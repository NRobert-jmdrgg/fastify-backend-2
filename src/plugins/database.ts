import { FastifyInstance } from 'fastify';

const fp = require('fastify-plugin');
const mongoose = require('mongoose');

// MongoDB csatlagozás a sample-aflix nevű adatbázishoz
const db = async (fastify: FastifyInstance) => {
  mongoose
    .connect(process.env.CONNECT_DB, { dbName: 'sample_mflix' })
    .then(fastify.log.info('DB CONNECTED...'))
    .catch((error: any) => fastify.log.error(error));
};

module.exports = fp(db);
