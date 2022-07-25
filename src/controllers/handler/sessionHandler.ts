import { FastifyReply, FastifyRequest } from 'fastify';

const Session = require('../../models/session');

const getSessions = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const sessions = Session.find();
    return sessions;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getSessions,
};
