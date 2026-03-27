import 'dotenv/config';
import { logger } from '../utils/logger';
import { connectDatabase } from '../db/prisma';
import { connectRedis } from '../db/redis';
import { analysisWorker } from './analysis.worker';

async function startWorkers(): Promise<void> {
  logger.info('Starting background workers...');

  await connectDatabase();
  await connectRedis();

  logger.info({ workers: ['analysis'] }, '✅ Workers started successfully');

  // Handle graceful shutdown
  const shutdown = async (signal: string): Promise<void> => {
    logger.info({ signal }, 'Shutting down workers...');
    await analysisWorker.close();
    process.exit(0);
  };

  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGINT', () => void shutdown('SIGINT'));
}

startWorkers().catch((err) => {
  logger.error({ err }, 'Failed to start workers');
  process.exit(1);
});
