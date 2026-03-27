import { logger } from '../utils/logger';
import { ExternalServiceError } from '../utils/errors';
import type { PullRequestDiff } from '../analysis/analysis.types';

/**
 * GitHub API client stub.
 * Will use @octokit/rest or a GitHub App installation token.
 * All methods are stubs — implementation goes here in Phase 2.
 */
export const githubClient = {
  /**
   * Fetch the diff / changed files for a pull request.
   */
  async getPullRequestDiff(
    _owner: string,
    _repo: string,
    _prNumber: number,
    _installationId?: number,
  ): Promise<PullRequestDiff> {
    // TODO: implement via Octokit
    logger.debug('githubClient.getPullRequestDiff — stub');
    throw new ExternalServiceError('GitHub', 'getPullRequestDiff not yet implemented');
  },

  /**
   * Post a review comment on a pull request.
   */
  async postReviewComment(
    _owner: string,
    _repo: string,
    _prNumber: number,
    _body: string,
    _commitSha: string,
    _installationId?: number,
  ): Promise<void> {
    logger.debug('githubClient.postReviewComment — stub');
    throw new ExternalServiceError('GitHub', 'postReviewComment not yet implemented');
  },

  /**
   * Update the commit status check for a pull request.
   */
  async updateCommitStatus(
    _owner: string,
    _repo: string,
    _sha: string,
    _state: 'pending' | 'success' | 'failure' | 'error',
    _description: string,
    _installationId?: number,
  ): Promise<void> {
    logger.debug('githubClient.updateCommitStatus — stub');
    throw new ExternalServiceError('GitHub', 'updateCommitStatus not yet implemented');
  },
};
