import { FastifyReply, FastifyRequest } from 'fastify';
const mongoose = require('mongoose');

const Comment = require('../../models/comment');

const getCommentById = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const comment = await Comment.findById(req.params.id);
    console.log('Comment: ' + comment);
    reply.code(200).send(comment);
  } catch (error) {
    console.error(error);
  }
};

const getComments = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const comments = Comment.find();
    return comments;
  } catch (error) {
    console.error(error);
  }
};

const getCommentsByMovieId = async (
  req: FastifyRequest<{ Params: { movieId: string } }>,
  reply: FastifyReply
) => {
  try {
    const comments = Comment.find({
      movie_id: mongoose.Types.ObjectId(req.params.movieId),
    });
    return comments;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getComments,
  getCommentById,
  getCommentsByMovieId,
};
