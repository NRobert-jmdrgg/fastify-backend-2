const getSessionSchema = {
  response: {
    // ha ok, akkor objektumok listáját várjuk
    200: {
      type: 'array',
    },
  },
};

module.exports = { getSessionSchema };
