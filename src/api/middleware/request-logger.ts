import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../utils/logger';

export async function requestLogger(
  request: FastifyRequest,
  _reply: FastifyReply,
): Promise<void> {
  logger.info(
    {
      requestId: request.id,
      method: request.method,
      url: request.url,
      ip: request.ip,
      userAgent: request.headers['user-agent'],
    },
    '→ Incoming request',
  );
}
