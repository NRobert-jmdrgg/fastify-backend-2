import { FastifyReply, FastifyRequest } from 'fastify';

const Theater = require('../../models/theater');

const getStates = (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const query = Theater.find();
    const states = query.distinct('location.address.state');
    return states;
  } catch (error) {
    console.error(error);
  }
};

const getCitiesByState = (
  req: FastifyRequest<{ Params: { state: string } }>,
  reply: FastifyReply
) => {
  try {
    const query = Theater.find({ 'location.address.state': req.params.state });
    const result = query.distinct('location.address.city');
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getStreetsByCity = (
  req: FastifyRequest<{ Params: { city: string } }>,
  reply: FastifyReply
) => {
  try {
    const query = Theater.find({ 'location.address.city': req.params.city });
    const result = query.distinct('location.address.street1');
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getGeoLocation = (
  req: FastifyRequest<{ Params: { address: string } }>,
  reply: FastifyReply
) => {
  try {
    const address = req.params.address.replaceAll('-', ' ').split('_');
    return Theater.aggregate([
      {
        $match: {
          'location.address.state': address[0],
          'location.address.city': address[1],
          'location.address.street1': address[2],
        },
      },
    ]).project({ coordinates: '$location.geo.coordinates' });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCitiesByState,
  getStreetsByCity,
  getGeoLocation,
  getStates,
};
