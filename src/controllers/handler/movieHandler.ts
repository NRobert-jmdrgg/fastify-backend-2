import { FastifyReply, FastifyRequest } from 'fastify';
const Movie = require('../../models/movie');

const getMovieById = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const id = req.params.id;
    const movie = Movie.findById(id);
    return movie;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesInIndexRange = async (
  req: FastifyRequest<{ Params: { begin: number; end: number } }>,
  reply: FastifyReply
) => {
  try {
    const moviesQuery = Movie.find()
      .skip(req.params.begin)
      .limit(req.params.end);
    const movies = moviesQuery.select('_id runtime poster title year');
    return movies;
  } catch (error) {
    console.log(error);
  }
};

const getMovieCount = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const count = Movie.count({});
    return count;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMovieById,
  getMoviesInIndexRange,
  getMovieCount,
};
