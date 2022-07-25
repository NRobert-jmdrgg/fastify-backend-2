export {};

const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    user_id: String,
    jwt: String,
  },
  {
    collection: 'sessions',
  }
);

module.exports = mongoose.model('Session', sessionSchema);
