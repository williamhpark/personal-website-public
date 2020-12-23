const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

// @route   POST
// #desc    Add a post to the database
router.post("/", async (req, res) => {
  // Retreive the data from the request
  const { title, createdAt, tags, html } = req.body;

  // Construct the Post model
  const newPost = new Post({
    title,
    createdAt,
    tags,
    html,
  });

  // Save Post model
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
  }
});

// @route   GET
// @desc    Retreive all posts in the database
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// @route   GET
// @desc    Retreive a specific post in the database
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
