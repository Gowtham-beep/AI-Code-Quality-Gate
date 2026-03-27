import { createHmac, timingSafeEqual } from 'crypto';
import { FastifyRequest } from 'fastify';
import { config } from '../config';
import { UnauthorizedError } from '../utils/errors';

/**
 * Verifies the X-Hub-Signature-256 header sent by GitHub.
 * Uses timing-safe comparison to prevent timing attacks.
 */
export async function verifyGitHubSignature(request: FastifyRequest): Promise<void> {
  const secret = config.github.webhookSecret;

  if (!secret) {
    // In development without a secret, skip verification
    if (config.app.env !== 'production') return;
    throw new UnauthorizedError('GitHub webhook secret is not configured');
  }

  const signatureHeader = request.headers['x-hub-signature-256'];

  if (!signatureHeader || typeof signatureHeader !== 'string') {
    throw new UnauthorizedError('Missing X-Hub-Signature-256 header');
  }

  const rawBody = (request as FastifyRequest & { rawBody?: Buffer }).rawBody;

  if (!rawBody) {
    throw new UnauthorizedError('Raw request body is not available for signature verification');
  }

  const expectedSignature = `sha256=${createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex')}`;

  const expected = Buffer.from(expectedSignature, 'utf8');
  const received = Buffer.from(signatureHeader, 'utf8');

  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    throw new UnauthorizedError('Invalid webhook signature');
  }
}
