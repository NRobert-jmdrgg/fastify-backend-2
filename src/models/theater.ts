export {};

const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema(
  {
    threaterId: Number,
    location: {
      addess: {
        street1: String,
        city: String,
        state: String,
        zipcode: String,
      },
      geo: {
        type: String,
        coordinates: [Number],
      },
    },
  },
  {
    collection: 'theaters',
  }
);

module.exports = mongoose.model('theater', theaterSchema);
