export {};

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    movie_id: String,
    text: String,
    date: Date,
  },
  {
    collection: 'comments',
  }
);

module.exports = mongoose.model('Comment', commentSchema);
