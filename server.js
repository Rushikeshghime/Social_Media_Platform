const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/social_media', { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const User = require('./models/user');
const Post = require('./models/post');

// Routes
app.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('user');
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { content, userId } = req.body;
  const post = new Post({ content, user: userId });
  await post.save();
  res.json(post);
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
