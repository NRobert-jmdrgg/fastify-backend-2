import { FastifyInstance } from 'fastify';

const { getMovies } = require('../controllers/handler/movieHandler');
const { getMovieSchema } = require('../controllers/schemas/movieSchema');

const MovieRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/movies/all', {
    handler: getMovies,
    schema: getMovieSchema,
  });
};

module.exports = MovieRoutes;
