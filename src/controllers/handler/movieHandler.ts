import { FastifyReply, FastifyRequest } from 'fastify';

const Movie = require('../../models/movie');

const getMovies = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const movies = Movie.find();
    return movies;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getMovies,
};
