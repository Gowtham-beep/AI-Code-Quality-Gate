import { createAppAuth } from '@octokit/auth-app';
import { config } from '../config';
import { logger } from '../utils/logger';
import { ExternalServiceError } from '../utils/errors';

// ─── Token cache ───────────────────────────────────────────────────────────────
// Tokens are valid for 1 hour. We cache with a 5-minute safety margin.

interface CachedToken {
  token: string;
  expiresAt: number; // Unix ms
}

const TOKEN_EXPIRY_BUFFER_MS = 5 * 60 * 1000; // 5 minutes

const tokenCache = new Map<number, CachedToken>();

// ─── App-level auth factory ────────────────────────────────────────────────────

/**
 * Validates required GitHub App credentials are present.
 * Throws if running in production without them.
 */
function assertAppCredentials(): { appId: string; privateKey: string } {
  const { appId, privateKey } = config.github;

  if (!appId || !privateKey) {
    const msg = 'GITHUB_APP_ID and GITHUB_APP_PRIVATE_KEY must be set';
    if (config.app.env === 'production') {
      throw new ExternalServiceError('GitHub', msg);
    }
    logger.warn(msg + ' — GitHub App auth will fail at runtime');
  }

  return {
    appId: appId ?? '',
    privateKey: (privateKey ?? '').replace(/\\n/g, '\n'), // Support PEM in env var
  };
}

// ─── Public API ────────────────────────────────────────────────────────────────

/**
 * Returns a short-lived GitHub installation access token for the given
 * installation ID, using @octokit/auth-app to sign a JWT and exchange it.
 *
 * Tokens are cached in-memory for their lifetime minus a 5-minute buffer,
 * so we avoid unnecessary token generation on each API call.
 */
export async function getInstallationToken(installationId: number): Promise<string> {
  // ── Cache hit ──────────────────────────────────────────────────────────────
  const cached = tokenCache.get(installationId);
  if (cached && cached.expiresAt > Date.now()) {
    logger.debug({ installationId }, 'Returning cached GitHub installation token');
    return cached.token;
  }

  const { appId, privateKey } = assertAppCredentials();

  logger.debug({ installationId }, 'Fetching new GitHub installation token');

  try {
    const auth = createAppAuth({ appId, privateKey });

    const { token, expiresAt } = await auth({
      type: 'installation',
      installationId,
    });

    // Cache until expiry minus buffer
    const expiresAtMs = new Date(expiresAt).getTime() - TOKEN_EXPIRY_BUFFER_MS;
    tokenCache.set(installationId, { token, expiresAt: expiresAtMs });

    logger.debug(
      { installationId, expiresAt },
      'GitHub installation token acquired and cached',
    );

    return token;
  } catch (err) {
    logger.error({ err, installationId }, 'Failed to acquire GitHub installation token');
    throw new ExternalServiceError(
      'GitHub',
      `Could not authenticate as installation ${installationId}: ${String(err)}`,
    );
  }
}

/**
 * Invalidates the cached token for an installation.
 * Useful when a 401 is received from the GitHub API mid-request.
 */
export function invalidateCachedToken(installationId: number): void {
  tokenCache.delete(installationId);
  logger.debug({ installationId }, 'GitHub installation token cache invalidated');
}
