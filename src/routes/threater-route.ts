import { FastifyInstance } from 'fastify';

const {
  getCitiesByState,
  getStreetsByCity,
  getGeoLocation,
  getStates,
} = require('../controllers/handler/theaterHandler');

const theaterRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/theaters/states', { handler: getStates });

  fastify.get('/api/theaters/state/:state', { handler: getCitiesByState });

  fastify.get('/api/theaters/city/:city', { handler: getStreetsByCity });

  fastify.get('/api/theaters/geo/:address', {
    handler: getGeoLocation,
  });
};

module.exports = theaterRoutes;
