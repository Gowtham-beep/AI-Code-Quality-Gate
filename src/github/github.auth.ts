import { logger } from '../utils/logger';
import type { AnalysisContext } from '../analysis/analysis.types';

/**
 * GitHub App authentication helper stub.
 * In Phase 2 this will use @octokit/auth-app to generate
 * installation access tokens for private repository access.
 */
export const githubAuth = {
  /**
   * Get an installation access token for the given installation ID.
   */
  async getInstallationToken(_installationId: number): Promise<string> {
    logger.debug('githubAuth.getInstallationToken — stub');
    throw new Error('GitHub App auth not yet implemented');
  },

  /**
   * Validate that the app has access to a given repository.
   */
  async validateRepositoryAccess(
    _context: Pick<AnalysisContext, 'repositoryFullName' | 'installationId'>,
  ): Promise<boolean> {
    logger.debug('githubAuth.validateRepositoryAccess — stub');
    return false;
  },
};
