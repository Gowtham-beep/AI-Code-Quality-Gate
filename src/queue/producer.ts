import { Queue } from 'bullmq';
import { createBullMQConnection } from '../db/redis';
import { logger } from '../utils/logger';

// ─── Job payload type ─────────────────────────────────────────────────────────

/**
 * The shape of every job pushed onto the "analysis-jobs" queue.
 * This is the contract between the producer (webhook) and the consumer (worker).
 */
export interface AnalysisJobPayload {
  /** Full repo name: "owner/repo" */
  repoName: string;
  repoOwner: string;
  repoGithubId: number;
  defaultBranch: string;
  prNumber: number;
  prTitle: string;
  headSha: string;
  baseSha: string;
  headBranch: string;
  baseBranch: string;
  /** GitHub App installation ID — required for authenticated API calls */
  installationId: number | null;
  /** GitHub login of user who opened/updated the PR */
  triggeredBy: string;
  /** GitHub webhook X-GitHub-Delivery header for tracing */
  deliveryId: string;
}

// ─── Queue name ───────────────────────────────────────────────────────────────

export const ANALYSIS_JOBS_QUEUE = 'analysis-jobs' as const;

// ─── Singleton queue instance ─────────────────────────────────────────────────

let _analysisJobsQueue: Queue<AnalysisJobPayload> | null = null;

/**
 * Lazily initialises the "analysis-jobs" BullMQ queue and returns the singleton.
 * Using a lazy singleton avoids creating Redis connections at import time during tests.
 */
function getAnalysisJobsQueue(): Queue<AnalysisJobPayload> {
  if (!_analysisJobsQueue) {
    _analysisJobsQueue = new Queue<AnalysisJobPayload>(ANALYSIS_JOBS_QUEUE, {
      connection: createBullMQConnection(),
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5_000,
        },
        removeOnComplete: { count: 200 },
        removeOnFail: { count: 500 },
      },
    });

    logger.info({ queue: ANALYSIS_JOBS_QUEUE }, 'BullMQ analysis-jobs queue initialized');
  }

  return _analysisJobsQueue;
}

// ─── Producer function ────────────────────────────────────────────────────────

/**
 * Pushes an analysis job onto the "analysis-jobs" BullMQ queue.
 *
 * Job IDs are deterministic per (repo, PR, commit) so that duplicate webhook
 * deliveries for the same push don't create multiple jobs.
 *
 * @returns The BullMQ job ID of the created job.
 */
export async function enqueueAnalysisJob(
  payload: AnalysisJobPayload,
): Promise<string> {
  const queue = getAnalysisJobsQueue();

  // Deterministic job ID: prevents double-processing on duplicate webhook deliveries
  const jobId = `analysis::${payload.repoName}::pr-${payload.prNumber}::${payload.headSha}`;

  const job = await queue.add('analyze-pr', payload, {
    jobId,
    // Per-job overrides can go here in the future (e.g. higher priority for drafts)
  });

  logger.debug(
    { jobId: job.id, queue: ANALYSIS_JOBS_QUEUE, payload },
    'Job added to analysis-jobs queue',
  );

  return job.id ?? jobId;
}

/**
 * Gracefully closes the queue connection.
 * Call this during application shutdown.
 */
export async function closeAnalysisJobsQueue(): Promise<void> {
  if (_analysisJobsQueue) {
    await _analysisJobsQueue.close();
    _analysisJobsQueue = null;
    logger.info('analysis-jobs queue closed');
  }
}
