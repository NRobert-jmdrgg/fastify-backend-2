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

const getNMovies = async (
  req: FastifyRequest<{ Params: { num: number } }>,
  reply: FastifyReply
) => {
  try {
    const moviesQuery = Movie.find().limit(req.params.num);
    const movies = moviesQuery.select('_id runtime poster title year');
    return movies;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMovieById,
  getNMovies,
};
