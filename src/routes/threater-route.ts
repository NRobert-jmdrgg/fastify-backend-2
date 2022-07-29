import { FastifyInstance } from 'fastify';

const {
  getCitiesByState,
  getStreetsByCity,
  getGeoLocationByStreet,
  getStates,
} = require('../controllers/handler/theaterHandler');

const theaterRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/theaters/states', { handler: getStates });

  fastify.get('/api/theaters/state/:state', { handler: getCitiesByState });

  fastify.get('/api/theaters/city/:city', { handler: getStreetsByCity });

  fastify.get('/api/theaters/street/:street', {
    handler: getGeoLocationByStreet,
  });
};

module.exports = theaterRoutes;
