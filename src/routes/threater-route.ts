import { FastifyInstance } from 'fastify';

const { getTheaters } = require('../controllers/handler/theaterHandler');
const { getTheaterSchema } = require('../controllers/schemas/theaterSchema');

const theaterRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/theaters/all', {
    handler: getTheaters,
    schema: getTheaterSchema,
  });
};

module.exports = theaterRoutes;
