import { Octokit } from '@octokit/rest';
import { getInstallationToken, invalidateCachedToken } from './github.auth';
import { logger } from '../utils/logger';
import { ExternalServiceError, NotFoundError } from '../utils/errors';
import type { PullRequestFile, RepoRef } from './github.service.types';

// ─── Constants ────────────────────────────────────────────────────────────────

/** GitHub's hard cap for files returned per page on this endpoint */
const FILES_PER_PAGE = 100;

/** Stop paginating after this many pages to guard against runaway PRs */
const MAX_PAGES = 30; // 30 * 100 = 3,000 files max

// ─── Octokit factory ──────────────────────────────────────────────────────────

/**
 * Creates an Octokit instance authenticated as the given installation.
 * Each call may reuse a cached token from github.auth.ts.
 */
async function createInstallationOctokit(installationId: number): Promise<Octokit> {
  const token = await getInstallationToken(installationId);
  return new Octokit({ auth: token });
}

// ─── Core function ────────────────────────────────────────────────────────────

/**
 * Fetches all changed files for a pull request, handling GitHub pagination.
 *
 * Authentication flows:
 *  - Calls github.auth.ts to obtain a short-lived installation access token
 *  - On 401, invalidates the cached token and retries once with a fresh token
 *
 * @param installationId  GitHub App installation ID for the repository's org/user
 * @param repo            Repository owner and name
 * @param prNumber        Pull request number
 * @returns               Array of changed files with their unified diff patches
 *
 * @throws {NotFoundError}       When the PR or repo does not exist (404)
 * @throws {ExternalServiceError} On any other GitHub API error
 */
export async function getPullRequestDiff(
  installationId: number,
  repo: RepoRef,
  prNumber: number,
): Promise<PullRequestFile[]> {
  logger.info(
    { installationId, owner: repo.owner, repo: repo.repo, prNumber },
    'Fetching PR diff from GitHub',
  );

  try {
    const octokit = await createInstallationOctokit(installationId);
    return await fetchAllPages(octokit, repo, prNumber);
  } catch (err) {
    // ── Retry once on 401 with a fresh token ────────────────────────────────
    if (isHttpError(err, 401)) {
      logger.warn(
        { installationId, prNumber },
        'GitHub returned 401 — invalidating token and retrying once',
      );
      invalidateCachedToken(installationId);

      try {
        const freshOctokit = await createInstallationOctokit(installationId);
        return await fetchAllPages(freshOctokit, repo, prNumber);
      } catch (retryErr) {
        throw wrapGitHubError(retryErr, repo, prNumber);
      }
    }

    throw wrapGitHubError(err, repo, prNumber);
  }
}

// ─── Pagination ───────────────────────────────────────────────────────────────

async function fetchAllPages(
  octokit: Octokit,
  repo: RepoRef,
  prNumber: number,
): Promise<PullRequestFile[]> {
  const files: PullRequestFile[] = [];
  let page = 1;

  while (page <= MAX_PAGES) {
    logger.debug(
      { owner: repo.owner, repo: repo.repo, prNumber, page },
      'Fetching PR files page',
    );

    const { data } = await octokit.pulls.listFiles({
      owner: repo.owner,
      repo: repo.repo,
      pull_number: prNumber,
      per_page: FILES_PER_PAGE,
      page,
    });

    if (data.length === 0) break;

    for (const file of data) {
      files.push({
        filename: file.filename,
        patch: file.patch,
        status: file.status as PullRequestFile['status'],
        additions: file.additions,
        deletions: file.deletions,
        changes: file.changes,
        previousFilename: file.previous_filename,
      });
    }

    if (data.length < FILES_PER_PAGE) break; // Last page

    page++;
  }

  if (page > MAX_PAGES) {
    logger.warn(
      { owner: repo.owner, repo: repo.repo, prNumber, maxPages: MAX_PAGES },
      'PR diff fetching reached page limit — some files may be missing',
    );
  }

  logger.info(
    { owner: repo.owner, repo: repo.repo, prNumber, fileCount: files.length },
    'PR diff fetched successfully',
  );

  return files;
}

// ─── Error helpers ────────────────────────────────────────────────────────────

function isHttpError(err: unknown, status: number): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    (err as { status: number }).status === status
  );
}

function wrapGitHubError(
  err: unknown,
  repo: RepoRef,
  prNumber: number,
): NotFoundError | ExternalServiceError {
  if (isHttpError(err, 404)) {
    return new NotFoundError(
      `Pull request ${repo.owner}/${repo.repo}#${prNumber}`,
    );
  }

  const message =
    err instanceof Error ? err.message : `Unexpected error: ${String(err)}`;

  logger.error(
    { err, owner: repo.owner, repo: repo.repo, prNumber },
    'GitHub API error while fetching PR diff',
  );

  return new ExternalServiceError('GitHub', message);
}
