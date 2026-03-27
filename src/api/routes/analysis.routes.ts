import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { analysisService } from '../../analysis/analysis.service';
import { NotFoundError } from '../../utils/errors';

const TriggerAnalysisSchema = z.object({
  repositoryFullName: z.string().min(1),
  prNumber: z.number().int().positive(),
  commitSha: z.string().min(7),
  baseSha: z.string().min(7),
  headBranch: z.string().min(1),
  baseBranch: z.string().min(1),
});

export const analysisRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  /**
   * POST /api/v1/analysis/trigger
   * Manually trigger a code quality analysis for a pull request.
   */
  app.post(
    '/trigger',
    {
      schema: {
        tags: ['analysis'],
        summary: 'Trigger analysis for a pull request',
        body: {
          type: 'object',
          required: ['repositoryFullName', 'prNumber', 'commitSha', 'baseSha', 'headBranch', 'baseBranch'],
          properties: {
            repositoryFullName: { type: 'string' },
            prNumber: { type: 'number' },
            commitSha: { type: 'string' },
            baseSha: { type: 'string' },
            headBranch: { type: 'string' },
            baseBranch: { type: 'string' },
          },
        },
      },
    },
    async (request, reply) => {
      const body = TriggerAnalysisSchema.parse(request.body);
      const job = await analysisService.enqueueAnalysis(body);
      return reply.status(202).send({ success: true, data: { jobId: job.id } });
    },
  );

  /**
   * GET /api/v1/analysis/:jobId
   * Retrieve the status and results of an analysis job.
   */
  app.get(
    '/:jobId',
    {
      schema: {
        tags: ['analysis'],
        summary: 'Get analysis job status and results',
        params: {
          type: 'object',
          properties: {
            jobId: { type: 'string' },
          },
        },
      },
    },
    async (request, reply) => {
      const { jobId } = request.params as { jobId: string };
      const job = await analysisService.getJobById(jobId);

      if (!job) {
        throw new NotFoundError('AnalysisJob', jobId);
      }

      return reply.send({ success: true, data: job });
    },
  );

  /**
   * GET /api/v1/analysis
   * List analysis jobs with optional filters.
   */
  app.get(
    '/',
    {
      schema: {
        tags: ['analysis'],
        summary: 'List analysis jobs',
        querystring: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            repository: { type: 'string' },
            limit: { type: 'number', default: 20 },
            offset: { type: 'number', default: 0 },
          },
        },
      },
    },
    async (request, reply) => {
      const query = request.query as {
        status?: string;
        repository?: string;
        limit?: number;
        offset?: number;
      };
      const jobs = await analysisService.listJobs(query);
      return reply.send({ success: true, data: jobs });
    },
  );
};
