import { FastifyReply, FastifyRequest } from 'fastify';

const User = require('../../models/user');

const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const users = User.find();
    return users;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
};
