/**
 * Output type returned by the GitHub service layer.
 * Intentionally decoupled from Octokit's internal types so callers
 * don't have a transitive dependency on @octokit/types.
 */
export interface PullRequestFile {
  /** Repo-relative path of the changed file */
  filename: string;
  /**
   * Unified diff patch for the file.
   * May be undefined for binary files or files with very large diffs
   * that GitHub truncates.
   */
  patch: string | undefined;
  /** How the file changed */
  status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';
  additions: number;
  deletions: number;
  changes: number;
  /** Previous path — only set when status = 'renamed' | 'copied' */
  previousFilename: string | undefined;
}

/** Minimal repo identifier used throughout the GitHub service */
export interface RepoRef {
  owner: string;
  repo: string;
}
