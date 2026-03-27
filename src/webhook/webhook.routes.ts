import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { webhookHandler } from './webhook.handler';
import { verifyGitHubSignature } from './webhook.verify';

export const webhookRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  /**
   * POST /webhook/github
   * Receives GitHub App webhook events.
   * Signature verification is critical for security.
   */
  app.post(
    '/github',
    {
      config: {
        rawBody: true, // Required to verify HMAC signature
      },
      schema: {
        tags: ['webhook'],
        summary: 'GitHub webhook receiver',
        headers: {
          type: 'object',
          required: ['x-hub-signature-256', 'x-github-event', 'x-github-delivery'],
          properties: {
            'x-hub-signature-256': { type: 'string' },
            'x-github-event': { type: 'string' },
            'x-github-delivery': { type: 'string' },
          },
        },
        response: {
          202: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (request, reply) => {
      // Verify webhook signature before processing
      await verifyGitHubSignature(request);
      await webhookHandler(request, reply);
    },
  );
};
