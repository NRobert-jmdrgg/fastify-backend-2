export {};

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    movie_id: mongoose.ObjectId,
    text: String,
    date: Date,
  },
  {
    collection: 'comments',
    versionKey: false,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
