import { PrismaClient } from './generated/client';
import { logger } from '../utils/logger';

declare global {
  var __prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log: [
      { emit: 'event', level: 'query' },
      { emit: 'event', level: 'error' },
      { emit: 'event', level: 'warn' },
    ],
  });
}

// Reuse client in development to prevent connection exhaustion under hot reload
export const prisma: PrismaClient =
  global.__prisma ?? createPrismaClient();

if (process.env['NODE_ENV'] !== 'production') {
  global.__prisma = prisma;
}

// Attach structured logging to Prisma events
prisma.$on('query' as never, (e: unknown) => {
  const event = e as { query: string; duration: number };
  logger.debug({ query: event.query, duration: event.duration }, 'Prisma query');
});

prisma.$on('error' as never, (e: unknown) => {
  logger.error({ err: e }, 'Prisma error');
});

prisma.$on('warn' as never, (e: unknown) => {
  logger.warn({ warn: e }, 'Prisma warning');
});

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info('✅ PostgreSQL connected via Prisma');
  } catch (err) {
    logger.error({ err }, 'Failed to connect to PostgreSQL');
    throw err;
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  logger.info('PostgreSQL disconnected');
}
