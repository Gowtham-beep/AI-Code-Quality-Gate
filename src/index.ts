import 'dotenv/config';
import { buildApp } from './app';
import { env } from './config/env';
import { logger } from './utils/logger';
import { connectRedis } from './db/redis';
import { connectDatabase } from './db/prisma';
import { gracefulShutdown } from './utils/shutdown';

async function main(): Promise<void> {
  // Connect to infrastructure
  await connectDatabase();
  await connectRedis();

  // Build and start the Fastify application
  const app = await buildApp();

  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });

  logger.info(
    { port: env.PORT, host: env.HOST, env: env.NODE_ENV },
    '🚀 AI Code Quality Gate server started',
  );

  // Register graceful shutdown handlers
  gracefulShutdown(app);
}

main().catch((err) => {
  logger.error({ err }, 'Fatal error during startup');
  process.exit(1);
});
