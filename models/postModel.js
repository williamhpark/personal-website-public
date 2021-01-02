const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, required: true },
  tags: { type: [String] },
  html: { type: String, required: true },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
