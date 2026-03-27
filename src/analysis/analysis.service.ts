import { prisma } from '../db/prisma';
import { analysisQueue } from '../workers/queues';
import { logger } from '../utils/logger';
import { AnalysisStatus } from '../db/generated/client';

interface TriggerAnalysisInput {
  repositoryFullName: string;
  prNumber: number;
  commitSha: string;
  baseSha: string;
  headBranch: string;
  baseBranch: string;
}

interface ListJobsQuery {
  status?: string;
  repository?: string;
  limit?: number;
  offset?: number;
}

/**
 * Analysis service — orchestrates the creation of analysis jobs and their
 * lifecycle. Delegates actual AI analysis to dedicated sub-services.
 */
export const analysisService = {
  /**
   * Creates an AnalysisJob record and enqueues it for processing.
   */
  async enqueueAnalysis(input: TriggerAnalysisInput) {
    const { repositoryFullName, prNumber, commitSha, baseSha, headBranch, baseBranch } =
      input;

    const [owner, name] = repositoryFullName.split('/');

    const repository = await prisma.repository.upsert({
      where: { fullName: repositoryFullName },
      update: {},
      create: {
        githubId: 0, // Will be updated when a real webhook fires
        owner: owner ?? '',
        name: name ?? '',
        fullName: repositoryFullName,
      },
    });

    const job = await prisma.analysisJob.create({
      data: {
        repositoryId: repository.id,
        prNumber,
        prTitle: `PR #${prNumber}`,
        commitSha,
        baseSha,
        headBranch,
        baseBranch,
        status: AnalysisStatus.QUEUED,
      },
    });

    await analysisQueue.add(
      'analyze-pr',
      { analysisJobId: job.id },
      {
        jobId: `analysis-${job.id}`,
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
      },
    );

    logger.info({ analysisJobId: job.id, prNumber, repositoryFullName }, 'Analysis enqueued');

    return job;
  },

  /**
   * Retrieve a single analysis job with its report and findings.
   */
  async getJobById(jobId: string) {
    return prisma.analysisJob.findUnique({
      where: { id: jobId },
      include: {
        repository: { select: { fullName: true, owner: true, name: true } },
        report: true,
        findings: {
          orderBy: { severity: 'desc' },
          take: 100,
        },
      },
    });
  },

  /**
   * List analysis jobs with optional filters and pagination.
   */
  async listJobs(query: ListJobsQuery) {
    const { status, repository, limit = 20, offset = 0 } = query;

    const where = {
      ...(status ? { status: status as AnalysisStatus } : {}),
      ...(repository
        ? { repository: { fullName: { contains: repository } } }
        : {}),
    };

    const [items, total] = await Promise.all([
      prisma.analysisJob.findMany({
        where,
        include: {
          repository: { select: { fullName: true } },
          report: { select: { gateResult: true, score: true, totalFindings: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.analysisJob.count({ where }),
    ]);

    return { items, total, limit, offset };
  },

  /**
   * Mark an analysis job as cancelled.
   */
  async cancelJob(jobId: string) {
    const job = await prisma.analysisJob.update({
      where: { id: jobId },
      data: {
        status: AnalysisStatus.CANCELLED,
        completedAt: new Date(),
      },
    });

    // Also remove from BullMQ queue if still waiting
    const bullJob = await analysisQueue.getJob(`analysis-${jobId}`);
    if (bullJob) {
      await bullJob.remove();
    }

    return job;
  },
};
