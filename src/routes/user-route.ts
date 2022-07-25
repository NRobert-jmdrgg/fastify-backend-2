import { FastifyInstance } from 'fastify';

const { getUsers } = require('../controllers/handler/userHandler');
const { getUserSchema } = require('../controllers/schemas/userSchema');

const userRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/users', {
    handler: getUsers,
    schema: getUserSchema,
  });
};

module.exports = userRoutes;
