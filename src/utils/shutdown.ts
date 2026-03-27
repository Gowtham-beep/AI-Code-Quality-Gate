import { FastifyInstance } from 'fastify';
import { logger } from './logger';

const SHUTDOWN_TIMEOUT_MS = 10_000;

export function gracefulShutdown(app: FastifyInstance): void {
  const signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

  let isShuttingDown = false;

  for (const signal of signals) {
    process.once(signal, async () => {
      if (isShuttingDown) return;
      isShuttingDown = true;

      logger.info({ signal }, `Received ${signal}, starting graceful shutdown...`);

      const timer = setTimeout(() => {
        logger.error('Graceful shutdown timed out. Forcing exit.');
        process.exit(1);
      }, SHUTDOWN_TIMEOUT_MS);

      timer.unref();

      try {
        await app.close();
        logger.info('Server closed successfully');
        clearTimeout(timer);
        process.exit(0);
      } catch (err) {
        logger.error({ err }, 'Error during graceful shutdown');
        process.exit(1);
      }
    });
  }
}
