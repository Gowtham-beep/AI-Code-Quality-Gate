/**
 * Analysis types shared across the analysis pipeline.
 */

export type SeverityLevel = 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

export interface CodeFinding {
  filePath: string;
  lineStart?: number;
  lineEnd?: number;
  severity: SeverityLevel;
  ruleId: string;
  message: string;
  suggestion?: string;
  category?: string;
}

export interface AnalysisContext {
  analysisJobId: string;
  repositoryFullName: string;
  prNumber: number;
  commitSha: string;
  baseSha: string;
  headBranch: string;
  baseBranch: string;
  installationId?: number;
}

export interface AnalysisResult {
  jobId: string;
  gateResult: 'PASS' | 'FAIL' | 'SKIPPED';
  score: number;
  summary: string;
  findings: CodeFinding[];
  durationMs: number;
}

export interface DiffFile {
  filename: string;
  status: 'added' | 'removed' | 'modified' | 'renamed';
  additions: number;
  deletions: number;
  patch?: string;
}

export interface PullRequestDiff {
  files: DiffFile[];
  totalAdditions: number;
  totalDeletions: number;
}
