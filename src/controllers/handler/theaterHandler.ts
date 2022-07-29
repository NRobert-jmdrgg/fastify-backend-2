import { FastifyReply, FastifyRequest } from 'fastify';

const Theater = require('../../models/theater');

const getStates = async (req: FastifyRequest, reply: FastifyReply) => {
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

const getStreetsByCity = async (
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

const getGeoLocationByStreet = async (
  req: FastifyRequest<{ Params: { street: string } }>,
  reply: FastifyReply
) => {
  try {
    const street = req.params.street.replaceAll('-', ' ');
    const query = Theater.find({ 'location.address.street1': street });
    return query;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCitiesByState,
  getStreetsByCity,
  getGeoLocationByStreet,
  getStates,
};
