import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import sensible from '@fastify/sensible';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

import { env } from './config/env';
import { logger } from './utils/logger';
import { errorHandler } from './api/middleware/error-handler';
import { requestLogger } from './api/middleware/request-logger';
import { notFoundHandler } from './api/middleware/not-found';

import { healthRoutes } from './api/routes/health.routes';
import { analysisRoutes } from './api/routes/analysis.routes';
import { webhookRoutes } from './webhook/webhook.routes';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: false, // We use our own pino logger
    trustProxy: true,
    ignoreTrailingSlash: true,
  });

  // ─── Security plugins ────────────────────────────────────────────────────
  await app.register(helmet, {
    contentSecurityPolicy: env.NODE_ENV === 'production',
  });

  await app.register(cors, {
    origin: env.NODE_ENV === 'production' ? false : true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  });

  await app.register(rateLimit, {
    global: true,
    max: env.RATE_LIMIT_MAX,
    timeWindow: env.RATE_LIMIT_TIME_WINDOW,
  });

  // ─── Utility plugins ─────────────────────────────────────────────────────
  await app.register(sensible);

  // ─── OpenAPI docs (dev only) ──────────────────────────────────────────────
  if (env.NODE_ENV !== 'production') {
    await app.register(swagger, {
      openapi: {
        info: {
          title: 'AI Code Quality Gate API',
          description: 'AI-powered code quality analysis for GitHub PRs',
          version: '0.1.0',
        },
        tags: [
          { name: 'health', description: 'Health check endpoints' },
          { name: 'analysis', description: 'Code analysis endpoints' },
          { name: 'webhook', description: 'GitHub webhook endpoints' },
        ],
      },
    });

    await app.register(swaggerUi, {
      routePrefix: '/docs',
    });
  }

  // ─── Hooks ────────────────────────────────────────────────────────────────
  app.addHook('onRequest', requestLogger);

  // ─── Error handler ────────────────────────────────────────────────────────
  app.setErrorHandler(errorHandler);
  app.setNotFoundHandler(notFoundHandler);

  // ─── Routes ───────────────────────────────────────────────────────────────
  await app.register(healthRoutes, { prefix: '/health' });
  await app.register(analysisRoutes, { prefix: '/api/v1/analysis' });
  await app.register(webhookRoutes, { prefix: '/webhook' });

  logger.info('Fastify app built successfully');

  return app;
}
