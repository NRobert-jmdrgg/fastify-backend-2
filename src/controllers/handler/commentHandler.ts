import { FastifyReply, FastifyRequest } from 'fastify';

const Comment = require('../../models/comment');

const getComments = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const comments = Comment.find();
    return comments;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getComments,
};
