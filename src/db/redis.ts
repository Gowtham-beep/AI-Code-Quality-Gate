import Redis from 'ioredis';
import { config } from '../config';
import { logger } from '../utils/logger';

let redisInstance: Redis | null = null;

function createRedisClient(): Redis {
  const client = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    lazyConnect: true,
    maxRetriesPerRequest: null, // Required for BullMQ
    enableReadyCheck: false,   // Required for BullMQ
    retryStrategy(times) {
      const delay = Math.min(times * 100, 5000);
      logger.warn({ attempt: times, delayMs: delay }, 'Redis reconnecting...');
      return delay;
    },
  });

  client.on('connect', () => logger.info('Redis connected'));
  client.on('ready', () => logger.info('✅ Redis ready'));
  client.on('error', (err) => logger.error({ err }, 'Redis error'));
  client.on('close', () => logger.warn('Redis connection closed'));

  return client;
}

export function getRedis(): Redis {
  if (!redisInstance) {
    throw new Error('Redis is not initialized. Call connectRedis() first.');
  }
  return redisInstance;
}

export async function connectRedis(): Promise<Redis> {
  if (redisInstance) return redisInstance;

  redisInstance = createRedisClient();

  try {
    await redisInstance.connect();
    logger.info('Redis connection established');
  } catch (err) {
    logger.error({ err }, 'Failed to connect to Redis');
    throw err;
  }

  return redisInstance;
}

export async function disconnectRedis(): Promise<void> {
  if (redisInstance) {
    await redisInstance.quit();
    redisInstance = null;
    logger.info('Redis disconnected');
  }
}

/**
 * Create a new dedicated Redis connection for BullMQ workers/queues.
 * BullMQ requires separate connections for queue and worker.
 */
export function createBullMQConnection(): Redis {
  return createRedisClient();
}
