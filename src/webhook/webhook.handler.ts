import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../utils/logger';
import { prisma } from '../db/prisma';
import { analysisQueue } from '../workers/queues';

type GitHubEvent =
  | 'pull_request'
  | 'pull_request_review'
  | 'push'
  | 'installation'
  | 'ping';

interface PullRequestPayload {
  action: string;
  number: number;
  pull_request: {
    title: string;
    head: { sha: string; ref: string };
    base: { sha: string; ref: string };
  };
  repository: {
    id: number;
    full_name: string;
    owner: { login: string };
    name: string;
    default_branch: string;
  };
  installation?: { id: number };
  sender: { login: string };
}

const ANALYZED_PR_ACTIONS = new Set(['opened', 'synchronize', 'reopened']);

export async function webhookHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const event = request.headers['x-github-event'] as GitHubEvent;
  const deliveryId = request.headers['x-github-delivery'] as string;
  const payload = request.body as Record<string, unknown>;

  logger.info({ event, deliveryId }, 'GitHub webhook received');

  // Persist the raw event for auditability and idempotency
  await prisma.webhookEvent.upsert({
    where: { deliveryId },
    update: {},
    create: {
      eventType: event,
      deliveryId,
      payload: payload as never,
    },
  });

  switch (event) {
    case 'ping':
      logger.info({ deliveryId }, 'GitHub ping received');
      break;

    case 'pull_request':
      await handlePullRequestEvent(
        payload as unknown as PullRequestPayload,
        deliveryId,
      );
      break;

    default:
      logger.debug({ event, deliveryId }, 'Unhandled webhook event type');
  }

  // Mark as processed
  await prisma.webhookEvent.update({
    where: { deliveryId },
    data: { processed: true, processedAt: new Date() },
  });

  void reply.status(202).send({ success: true, message: 'Webhook accepted' });
}

async function handlePullRequestEvent(
  payload: PullRequestPayload,
  deliveryId: string,
): Promise<void> {
  const { action, number: prNumber, pull_request, repository, sender } = payload;

  if (!ANALYZED_PR_ACTIONS.has(action)) {
    logger.debug({ action, deliveryId }, 'Ignoring PR action');
    return;
  }

  logger.info(
    { action, prNumber, repo: repository.full_name, deliveryId },
    'Queuing analysis for PR',
  );

  // Upsert the repository record
  const repo = await prisma.repository.upsert({
    where: { githubId: repository.id },
    update: { installationId: payload.installation?.id ?? null },
    create: {
      githubId: repository.id,
      owner: repository.owner.login,
      name: repository.name,
      fullName: repository.full_name,
      defaultBranch: repository.default_branch,
      installationId: payload.installation?.id ?? null,
    },
  });

  // Create the analysis job record
  const analysisJob = await prisma.analysisJob.create({
    data: {
      repositoryId: repo.id,
      prNumber,
      prTitle: pull_request.title,
      commitSha: pull_request.head.sha,
      baseSha: pull_request.base.sha,
      headBranch: pull_request.head.ref,
      baseBranch: pull_request.base.ref,
      triggeredBy: sender.login,
      status: 'QUEUED',
    },
  });

  // Enqueue into BullMQ
  await analysisQueue.add(
    'analyze-pr',
    { analysisJobId: analysisJob.id },
    {
      jobId: `analysis-${analysisJob.id}`,
      attempts: 3,
      backoff: { type: 'exponential', delay: 5000 },
    },
  );

  logger.info({ analysisJobId: analysisJob.id }, 'Analysis job created and queued');
}
