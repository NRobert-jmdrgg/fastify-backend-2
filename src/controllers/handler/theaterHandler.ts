import { FastifyReply, FastifyRequest } from 'fastify';

const Theater = require('../../models/theater');

type Address = {
  'location.address.state': string;
  'location.address.city'?: string;
  'location.address.street1'?: string;
};

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
  req: FastifyRequest<{
    Params: { state: string; city: string; street: string };
  }>,
  reply: FastifyReply
) => {
  try {
    console.log(req.params);
    let cond: Address = { 'location.address.state': req.params.state };
    if (req.params.city) cond['location.address.city'] = req.params.city;
    if (req.params.street) cond['location.address.street1'] = req.params.street;

    return Theater.aggregate([
      {
        $match: cond,
      },
    ]).project({
      coordinates: '$location.geo.coordinates',
    });
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
