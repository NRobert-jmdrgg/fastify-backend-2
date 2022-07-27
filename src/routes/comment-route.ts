import { FastifyInstance } from 'fastify';

const {
  getComments,
  getCommentById,
  getCommentsByMovieId,
} = require('../controllers/handler/commentHandler');

const {
  getCommentSchema,
  getCommentsSchema,
} = require('../controllers/schemas/commentSchema');

const commentRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/comment/:id', {
    handler: getCommentById,
    schema: getCommentSchema,
  });

  fastify.get('/api/comments/all', {
    handler: getComments,
    schema: getCommentsSchema,
  });

  fastify.get('/api/comments/:movieId', {
    handler: getCommentsByMovieId,
    schema: getCommentsSchema,
  });
};

module.exports = commentRoutes;
