import {
  FastifyError,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import { ZodError } from 'zod';
import { AppError } from '../../utils/errors';
import { logger } from '../../utils/logger';

interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  requestId?: string;
}

export function errorHandler(
  err: FastifyError | AppError | ZodError | Error,
  request: FastifyRequest,
  reply: FastifyReply,
): void {
  const requestId = request.id;

  // ── Zod validation errors ─────────────────────────────────────────────────
  if (err instanceof ZodError) {
    logger.warn({ requestId, issues: err.issues }, 'Validation error');

    void reply.status(400).send({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Request validation failed',
        details: err.flatten().fieldErrors,
      },
      requestId,
    } satisfies ErrorResponse);
    return;
  }

  // ── Operational application errors ────────────────────────────────────────
  if (err instanceof AppError) {
    if (err.statusCode >= 500) {
      logger.error({ requestId, err }, 'Application error');
    } else {
      logger.warn({ requestId, code: err.code, message: err.message }, 'Client error');
    }

    void reply.status(err.statusCode).send({
      success: false,
      error: {
        code: err.code,
        message: err.message,
      },
      requestId,
    } satisfies ErrorResponse);
    return;
  }

  // ── Fastify native errors (e.g. route not found, method not allowed) ──────
  const fastifyErr = err as FastifyError;
  if (fastifyErr.statusCode) {
    logger.warn({ requestId, statusCode: fastifyErr.statusCode, message: err.message }, 'Fastify error');

    void reply.status(fastifyErr.statusCode).send({
      success: false,
      error: {
        code: 'REQUEST_ERROR',
        message: err.message,
      },
      requestId,
    } satisfies ErrorResponse);
    return;
  }

  // ── Catch-all for unexpected errors ───────────────────────────────────────
  logger.error({ requestId, err }, 'Unhandled error');

  void reply.status(500).send({
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
    },
    requestId,
  } satisfies ErrorResponse);
}
