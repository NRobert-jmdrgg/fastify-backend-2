export {};

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
  {
    awards: {
      nominations: Number,
      text: String,
      wins: Number,
    },
    cast: [String],
    countries: [String],
    directors: [String],
    fullplot: String,
    genres: [String],
    imdb: {
      id: Number,
      rating: Number,
      votes: Number,
    },
    languages: [String],
    lastupdated: String,
    metacritic: Number,
    num_mflix_comments: Number,
    plot: String,
    poster: String,
    rated: String,
    released: Date,
    runtime: Number,
    title: String,
    tomatoes: {
      boxOffice: String,
      consensus: String,
      critic: {
        meter: Number,
        numReviews: Number,
        rating: Number,
      },
      dvd: Date,
      fresh: Number,
      lastUpdated: Date,
      production: String,
      rotten: Number,
      viewer: {
        meter: Number,
        numReviews: Number,
        rating: Number,
      },
      website: String,
    },
    type: String,
    writers: [String],
    year: Number,
  },
  // Meghatározzuk, hogy melyik táblából származik
  { collection: 'movies', strict: false }
);

module.exports = mongoose.model('Movie', MovieSchema);
