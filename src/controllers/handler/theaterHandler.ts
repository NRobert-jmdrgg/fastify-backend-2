import { FastifyReply, FastifyRequest } from 'fastify';

const Theater = require('../../models/theater');

const getTheaters = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const theaters = Theater.find();
    return theaters;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getTheaters,
};
