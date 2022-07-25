import { FastifyInstance } from 'fastify';

const { getSessions } = require('../controllers/handler/sessionHandler');
const { getSessionSchema } = require('../controllers/schemas/sessionSchema');

const sessionRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/sessions', {
    handler: getSessions,
    schema: getSessionSchema,
  });
};

module.exports = sessionRoutes;
