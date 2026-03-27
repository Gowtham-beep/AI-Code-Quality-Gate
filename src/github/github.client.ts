/**
 * github.client.ts — façade over the GitHub service layer.
 *
 * External callers (workers, analysis pipeline) should import from here.
 * This module re-exports the service function under the stable client API
 * and keeps stubs for functions not yet implemented.
 */

export { getPullRequestDiff } from './github.service';
export type { PullRequestFile, RepoRef } from './github.service.types';

import { logger } from '../utils/logger';
import { ExternalServiceError } from '../utils/errors';

// ─── Stubs for upcoming features ─────────────────────────────────────────────

/**
 * Post an inline review comment on a PR.
 * @stub — will be implemented with the reporting phase.
 */
export async function postReviewComment(
  _owner: string,
  _repo: string,
  _prNumber: number,
  _body: string,
  _commitSha: string,
  _installationId?: number,
): Promise<void> {
  logger.debug('githubClient.postReviewComment — not yet implemented');
  throw new ExternalServiceError('GitHub', 'postReviewComment not yet implemented');
}

/**
 * Set a commit status check on a PR's head SHA.
 * @stub — will be implemented with the reporting phase.
 */
export async function updateCommitStatus(
  _owner: string,
  _repo: string,
  _sha: string,
  _state: 'pending' | 'success' | 'failure' | 'error',
  _description: string,
  _installationId?: number,
): Promise<void> {
  logger.debug('githubClient.updateCommitStatus — not yet implemented');
  throw new ExternalServiceError('GitHub', 'updateCommitStatus not yet implemented');
}
