const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
