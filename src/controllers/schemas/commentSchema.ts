const getCommentSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        movie_id: { type: 'string' },
        text: { type: 'string' },
        date: { type: 'string' },
      },
    },
  },
};

const getCommentsSchema = {
  response: {
    // ha ok, akkor objektumok listáját várjuk
    200: {
      type: 'array',
    },
  },
};

module.exports = { getCommentsSchema, getCommentSchema };
