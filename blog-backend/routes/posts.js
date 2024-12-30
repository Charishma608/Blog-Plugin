const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Get 
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Create
router.post('/', async (req, res) => {
  const { title, content, imageUrl } = req.body;
  const newPost = new Post({ title, content, imageUrl });
  const savedPost = await newPost.save();
  res.status(201).json(savedPost);
});

// Like
router.put('/:id/like', async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  const updatedPost = await post.save();
  res.json(updatedPost);
});

// Delete 
router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = router;
