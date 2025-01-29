const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  followers: Number,
});

module.exports = mongoose.model('User', userSchema);
