import { Worker, Job } from 'bullmq';
import { createBullMQConnection } from '../db/redis';
import { logger } from '../utils/logger';
import { prisma } from '../db/prisma';
import { QUEUE_NAMES } from './queues';

export interface AnalysisJobData {
  analysisJobId: string;
}

export interface AnalysisJobResult {
  success: boolean;
  analysisJobId: string;
  findingsCount?: number;
}

async function processAnalysisJob(
  job: Job<AnalysisJobData, AnalysisJobResult>,
): Promise<AnalysisJobResult> {
  const { analysisJobId } = job.data;

  logger.info({ jobId: job.id, analysisJobId }, 'Processing analysis job');

  // Mark job as in-progress
  await prisma.analysisJob.update({
    where: { id: analysisJobId },
    data: { status: 'IN_PROGRESS', startedAt: new Date() },
  });

  try {
    // ─── Placeholder: Business logic will go here ─────────────────────────
    // 1. Fetch PR diff from GitHub
    // 2. Run AI analysis via analysisService
    // 3. Store findings in DB
    // 4. Post comments back to GitHub
    // 5. Update commit status check
    // ─────────────────────────────────────────────────────────────────────

    await job.updateProgress(100);

    await prisma.analysisJob.update({
      where: { id: analysisJobId },
      data: {
        status: 'COMPLETED',
        completedAt: new Date(),
        gateResult: 'PASS',
      },
    });

    logger.info({ jobId: job.id, analysisJobId }, 'Analysis job completed');

    return { success: true, analysisJobId, findingsCount: 0 };
  } catch (err) {
    logger.error({ jobId: job.id, analysisJobId, err }, 'Analysis job failed');

    await prisma.analysisJob.update({
      where: { id: analysisJobId },
      data: {
        status: 'FAILED',
        completedAt: new Date(),
        errorMessage: err instanceof Error ? err.message : String(err),
      },
    });

    throw err;
  }
}

export const analysisWorker = new Worker<AnalysisJobData, AnalysisJobResult>(
  QUEUE_NAMES.ANALYSIS,
  processAnalysisJob,
  {
    connection: createBullMQConnection(),
    concurrency: 5,
    limiter: {
      max: 10,
      duration: 1_000,
    },
  },
);

analysisWorker.on('completed', (job, result) => {
  logger.info({ jobId: job.id, result }, 'Worker: analysis job completed');
});

analysisWorker.on('failed', (job, err) => {
  logger.error({ jobId: job?.id, err }, 'Worker: analysis job failed');
});

analysisWorker.on('stalled', (jobId) => {
  logger.warn({ jobId }, 'Worker: analysis job stalled');
});

analysisWorker.on('error', (err) => {
  logger.error({ err }, 'Worker: unexpected error');
});
