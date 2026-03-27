import { logger } from '../utils/logger';
import { enqueueAnalysisJob } from '../queue/producer';
import {
  ANALYZED_PR_ACTIONS,
  PullRequestPayload,
  PingPayload,
} from './github.types';

/**
 * webhookHandler — pure event dispatcher.
 *
 * Receives a parsed, typed GitHub event and routes it to the correct
 * internal handler. All DB writes and queue interactions are delegated
 * to dedicated modules; this file stays thin and easy to unit-test.
 *
 * @returns A human-readable status message for the HTTP response.
 */
export async function dispatchWebhookEvent(
  event: string,
  deliveryId: string,
  payload: unknown,
): Promise<string> {
  logger.info({ event, deliveryId }, 'Dispatching GitHub webhook event');

  switch (event) {
    case 'ping':
      return handlePing(payload as PingPayload, deliveryId);

    case 'pull_request':
      return handlePullRequest(payload as PullRequestPayload, deliveryId);

    default:
      logger.debug({ event, deliveryId }, 'No handler for GitHub event — skipping');
      return `Event "${event}" acknowledged but not processed`;
  }
}

// ─── Event handlers ───────────────────────────────────────────────────────────

function handlePing(payload: PingPayload, deliveryId: string): string {
  logger.info(
    { deliveryId, zen: payload.zen, hookId: payload.hook_id },
    'GitHub App ping received',
  );
  return 'pong';
}

async function handlePullRequest(
  payload: PullRequestPayload,
  deliveryId: string,
): Promise<string> {
  const { action, number: prNumber, pull_request, repository, installation, sender } =
    payload;

  // ── Guard: only react to opened / synchronize ────────────────────────────
  if (!ANALYZED_PR_ACTIONS.has(action)) {
    logger.debug(
      { action, prNumber, repo: repository.full_name, deliveryId },
      'PR action is not in the analyzed set — ignoring',
    );
    return `PR action "${action}" ignored`;
  }

  logger.info(
    {
      action,
      prNumber,
      repo: repository.full_name,
      commitSha: pull_request.head.sha,
      installationId: installation?.id,
      triggeredBy: sender.login,
      deliveryId,
    },
    'Enqueueing analysis job for PR',
  );

  // ── Delegate to the queue producer ────────────────────────────────────────
  const jobId = await enqueueAnalysisJob({
    repoName: repository.full_name,
    repoOwner: repository.owner.login,
    repoGithubId: repository.id,
    defaultBranch: repository.default_branch,
    prNumber,
    prTitle: pull_request.title,
    headSha: pull_request.head.sha,
    baseSha: pull_request.base.sha,
    headBranch: pull_request.head.ref,
    baseBranch: pull_request.base.ref,
    installationId: installation?.id ?? null,
    triggeredBy: sender.login,
    deliveryId,
  });

  logger.info({ jobId, prNumber, repo: repository.full_name }, 'Analysis job enqueued');

  return `Analysis job ${jobId} enqueued for PR #${prNumber}`;
}
