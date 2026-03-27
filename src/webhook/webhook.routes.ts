import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import rawBody from 'fastify-raw-body';
import { webhookHandler } from './webhook.handler';
import { verifyGitHubSignature } from './webhook.verify';

/**
 * webhookRoutes — registers POST /webhook/github
 *
 * fastify-raw-body must be registered BEFORE the route so that
 * the rawBody buffer is available for HMAC signature verification.
 */
export const webhookRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  // Register raw-body plugin scoped to this sub-app only.
  // This prevents the overhead of buffering raw bodies on every other route.
  await app.register(rawBody, {
    field: 'rawBody',       // Attach as request.rawBody
    global: false,          // Only routes that opt-in (via config.rawBody: true)
    encoding: false,        // Keep it as a Buffer, not a string
    runFirst: true,         // Run before content-type parser
  });

  /**
   * POST /webhook/github
   *
   * Entry point for all GitHub App webhook events.
   * Signature verification happens before any processing.
   * Returns 200 immediately after enqueueing — analysis runs asynchronously.
   */
  app.post(
    '/github',
    {
      config: {
        rawBody: true,  // Tell fastify-raw-body to buffer this route
      },
      schema: {
        tags: ['webhook'],
        summary: 'GitHub App webhook receiver',
        description:
          'Receives pull_request.opened / pull_request.synchronize events and enqueues analysis jobs.',
        headers: {
          type: 'object',
          required: [
            'x-hub-signature-256',
            'x-github-event',
            'x-github-delivery',
          ],
          properties: {
            'x-hub-signature-256': {
              type: 'string',
              description: 'HMAC-SHA256 signature of the raw request body',
            },
            'x-github-event': {
              type: 'string',
              description: 'GitHub event type (e.g. pull_request)',
            },
            'x-github-delivery': {
              type: 'string',
              description: 'Unique delivery GUID for idempotency',
            },
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
          401: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              error: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    async (request, reply) => {
      // ── Step 1: Verify HMAC-SHA256 signature ──────────────────────────────
      // Throws UnauthorizedError → caught by global error handler → 401
      await verifyGitHubSignature(request);

      // ── Step 2: Dispatch event and enqueue job ────────────────────────────
      await webhookHandler(request, reply);
    },
  );
};
