const getMovieSchema = {
  response: {
    // ha ok, akkor objektumok listáját várjuk
    200: {
      type: 'array',
    },
  },
};

module.exports = { getMovieSchema };
