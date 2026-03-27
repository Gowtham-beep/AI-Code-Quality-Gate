import { Queue } from 'bullmq';
import { createBullMQConnection } from '../db/redis';
import { logger } from '../utils/logger';

export const QUEUE_NAMES = {
  ANALYSIS: 'code-analysis',
  GITHUB_COMMENTS: 'github-comments',
  NOTIFICATIONS: 'notifications',
} as const;

export type QueueName = (typeof QUEUE_NAMES)[keyof typeof QUEUE_NAMES];

// ─── Queue instances ──────────────────────────────────────────────────────────

export const analysisQueue = new Queue(QUEUE_NAMES.ANALYSIS, {
  connection: createBullMQConnection(),
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5_000,
    },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 500 },
  },
});

export const githubCommentsQueue = new Queue(QUEUE_NAMES.GITHUB_COMMENTS, {
  connection: createBullMQConnection(),
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: 'exponential', delay: 2_000 },
    removeOnComplete: { count: 50 },
    removeOnFail: { count: 200 },
  },
});

export const notificationsQueue = new Queue(QUEUE_NAMES.NOTIFICATIONS, {
  connection: createBullMQConnection(),
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'fixed', delay: 3_000 },
    removeOnComplete: { count: 50 },
    removeOnFail: { count: 100 },
  },
});

// ─── Queue health check ───────────────────────────────────────────────────────

export async function getQueueHealth(): Promise<Record<string, unknown>> {
  const queues = [analysisQueue, githubCommentsQueue, notificationsQueue];

  const stats = await Promise.all(
    queues.map(async (q) => ({
      name: q.name,
      waiting: await q.getWaitingCount(),
      active: await q.getActiveCount(),
      failed: await q.getFailedCount(),
      completed: await q.getCompletedCount(),
      delayed: await q.getDelayedCount(),
    })),
  );

  return Object.fromEntries(stats.map((s) => [s.name, s]));
}

logger.info(
  { queues: Object.values(QUEUE_NAMES) },
  'BullMQ queues initialized',
);
