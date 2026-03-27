import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { prisma } from '../../db/prisma';
import { getRedis } from '../../db/redis';

interface HealthStatus {
  status: 'ok' | 'degraded' | 'down';
  timestamp: string;
  uptime: number;
  version: string;
  services: {
    database: 'ok' | 'error';
    redis: 'ok' | 'error';
  };
}

export const healthRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  /**
   * GET /health
   * Lightweight liveness check — used by load balancers
   */
  app.get(
    '/',
    {
      schema: {
        tags: ['health'],
        summary: 'Liveness check',
        response: {
          200: {
            type: 'object',
            properties: {
              status: { type: 'string' },
              timestamp: { type: 'string' },
            },
          },
        },
      },
    },
    async (_req, reply) => {
      return reply.send({ status: 'ok', timestamp: new Date().toISOString() });
    },
  );

  /**
   * GET /health/ready
   * Deep readiness check — verifies DB and Redis connectivity
   */
  app.get(
    '/ready',
    {
      schema: {
        tags: ['health'],
        summary: 'Readiness check with dependency status',
      },
    },
    async (_req, reply) => {
      const services: HealthStatus['services'] = {
        database: 'ok',
        redis: 'ok',
      };

      // Check database
      try {
        await prisma.$queryRaw`SELECT 1`;
      } catch {
        services.database = 'error';
      }

      // Check Redis
      try {
        await getRedis().ping();
      } catch {
        services.redis = 'error';
      }

      const allOk = Object.values(services).every((s) => s === 'ok');
      const status: HealthStatus['status'] = allOk ? 'ok' : 'degraded';

      const body: HealthStatus = {
        status,
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env['npm_package_version'] ?? '0.0.0',
        services,
      };

      return reply.status(allOk ? 200 : 503).send(body);
    },
  );
};
