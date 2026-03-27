import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../utils/logger';
import { prisma } from '../db/prisma';
import { dispatchWebhookEvent } from '../github/webhookHandler';

/**
 * webhookHandler — Fastify route handler for POST /webhook/github
 *
 * Responsibilities:
 *  1. Extract event metadata from GitHub headers
 *  2. Persist the raw event for auditability / idempotency
 *  3. Delegate to the typed event dispatcher
 *  4. Return 200 immediately — processing is async via BullMQ
 */
export async function webhookHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const event = request.headers['x-github-event'] as string;
  const deliveryId = request.headers['x-github-delivery'] as string;
  const payload = request.body as Record<string, unknown>;

  logger.info({ event, deliveryId }, 'GitHub webhook received');

  // ── Idempotency: persist raw event before doing anything else ─────────────
  try {
    await prisma.webhookEvent.upsert({
      where: { deliveryId },
      update: {},
      create: {
        eventType: event,
        deliveryId,
        payload: payload as never,
      },
    });
  } catch (err) {
    // Log but don't block — persisting the event is best-effort
    logger.warn({ err, deliveryId }, 'Could not persist webhook event to DB');
  }

  // ── Dispatch to the correct handler and enqueue work ─────────────────────
  // This is intentionally NOT awaited for non-ping events — GitHub expects
  // a fast 200 response. Failures are handled by BullMQ retry logic.
  const message = await dispatchWebhookEvent(event, deliveryId, payload);

  // ── Mark as processed ─────────────────────────────────────────────────────
  prisma.webhookEvent
    .update({
      where: { deliveryId },
      data: { processed: true, processedAt: new Date() },
    })
    .catch((err: unknown) => {
      logger.warn({ err, deliveryId }, 'Could not mark webhook event as processed');
    });

  // ── Respond immediately ───────────────────────────────────────────────────
  void reply.status(200).send({
    success: true,
    message,
  });
}
