import { FastifyInstance } from 'fastify';

const {
  getMovieById,
  getMoviesInIndexRange,
  getMovieCount,
} = require('../controllers/handler/movieHandler');
const { getMoviesSchema } = require('../controllers/schemas/movieSchema');

const MovieRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/movie/:id', {
    handler: getMovieById,
  });

  fastify.get('/api/movies/display/:begin', {
    handler: getMoviesInIndexRange,
    schema: getMoviesSchema,
  });

  fastify.get('/api/movies/count', {
    handler: getMovieCount,
  });
};

module.exports = MovieRoutes;
