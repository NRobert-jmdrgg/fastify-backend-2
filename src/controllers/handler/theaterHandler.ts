import { FastifyReply, FastifyRequest } from 'fastify';

const Theater = require('../../models/theater');

const getCitiesByState = async (
  req: FastifyRequest<{ Params: { state: string } }>,
  reply: FastifyReply
) => {
  try {
    const query = Theater.find({
      'location.address.state': req.params.state,
    });
    const cities = query.select('location.address.city');
    return cities;
  } catch (error) {
    console.error(error);
  }
};

const getStreetsByCity = async (
  req: FastifyRequest<{ Params: { city: string } }>,
  reply: FastifyReply
) => {
  try {
    const query = Theater.find({
      'location.address.city': req.params.city,
    });
    const streets = query.select('location.address.street1');
    return streets;
  } catch (error) {
    console.error(error);
  }
};

const getGeoLocationByStreet = async (
  req: FastifyRequest<{ Params: { street: string } }>,
  reply: FastifyReply
) => {
  try {
    const street = req.params.street.replaceAll('-', ' ');

    const query = Theater.find({ 'location.address.street1': street });

    // const geo = query.select('location.geo.coordinates');

    return query;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCitiesByState,
  getStreetsByCity,
  getGeoLocationByStreet,
};
