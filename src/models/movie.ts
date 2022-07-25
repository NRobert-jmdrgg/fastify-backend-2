export {};

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    countries: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: {
      wins: Number,
      nominations: Number,
      text: String,
    },
    lastUpdated: Date,
    year: Number,
    imdb: {
      rating: Number,
      votes: Number,
      id: Number,
    },
    type: String,
    tomatoes: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      lastUpdated: Date,
    },
  },
  // Meghatározzuk, hogy melyik táblából származik
  { collection: 'movies' }
);

module.exports = mongoose.model('Movie', movieSchema);
