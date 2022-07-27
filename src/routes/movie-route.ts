import { FastifyInstance } from 'fastify';

const {
  getMovieById,
  getNMovies,
} = require('../controllers/handler/movieHandler');
const { getMoviesSchema } = require('../controllers/schemas/movieSchema');

const MovieRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/movie/:id', {
    handler: getMovieById,
  });

  fastify.get('/api/movies/:num', {
    handler: getNMovies,
    schema: getMoviesSchema,
  });
};

module.exports = MovieRoutes;
