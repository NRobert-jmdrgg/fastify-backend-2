const getCommentSchema = {
  response: {
    // ha ok, akkor objektumok listáját várjuk
    200: {
      type: 'array',
    },
  },
};

module.exports = { getCommentSchema };
