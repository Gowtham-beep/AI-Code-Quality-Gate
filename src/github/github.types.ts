/**
 * GitHub webhook payload types.
 * Covers pull_request events required by the quality gate.
 */

// ─── Shared sub-types ─────────────────────────────────────────────────────────

export interface GitHubUser {
  login: string;
  id: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubUser;
  default_branch: string;
  clone_url: string;
  html_url: string;
}

export interface GitHubInstallation {
  id: number;
}

export interface GitHubPullRequestRef {
  label: string;
  ref: string;
  sha: string;
  repo: GitHubRepository;
}

export interface GitHubPullRequest {
  number: number;
  title: string;
  body: string | null;
  state: 'open' | 'closed';
  draft: boolean;
  merged: boolean;
  html_url: string;
  head: GitHubPullRequestRef;
  base: GitHubPullRequestRef;
  user: GitHubUser;
  additions: number;
  deletions: number;
  changed_files: number;
}

// ─── Event payloads ───────────────────────────────────────────────────────────

export type PullRequestAction =
  | 'opened'
  | 'synchronize'
  | 'closed'
  | 'reopened'
  | 'edited'
  | 'labeled'
  | 'unlabeled'
  | 'ready_for_review'
  | 'converted_to_draft';

export interface PullRequestPayload {
  action: PullRequestAction;
  number: number;
  pull_request: GitHubPullRequest;
  repository: GitHubRepository;
  installation?: GitHubInstallation;
  sender: GitHubUser;
}

export interface PingPayload {
  zen: string;
  hook_id: number;
  hook: Record<string, unknown>;
  repository?: GitHubRepository;
  installation?: GitHubInstallation;
}

// ─── Event discriminated union ────────────────────────────────────────────────

export type SupportedGitHubEvent = 'pull_request' | 'ping';

export type GitHubEventPayload =
  | { event: 'pull_request'; payload: PullRequestPayload }
  | { event: 'ping'; payload: PingPayload };

// ─── Actions we care about ────────────────────────────────────────────────────

export const ANALYZED_PR_ACTIONS = new Set<PullRequestAction>([
  'opened',
  'synchronize',
]);
