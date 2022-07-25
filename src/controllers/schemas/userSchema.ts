const getUserSchema = {
  response: {
    // ha ok, akkor objektumok listáját várjuk
    200: {
      type: 'array',
    },
  },
};

module.exports = { getUserSchema };
