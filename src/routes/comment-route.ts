import { FastifyInstance } from 'fastify';

const { getComments } = require('../controllers/handler/commentHandler');
const { getCommentSchema } = require('../controllers/schemas/commentSchema');

const commentRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/comments', {
    handler: getComments,
    schema: getCommentSchema,
  });
};

module.exports = commentRoutes;
