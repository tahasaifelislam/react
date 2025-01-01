const Comment = require('../models/commentModel');

exports.createComment = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newComment = new Comment({ name, email, message });

    await newComment.save();
    res.status(201).json({ message: "Comment successfully created" });
  } catch (error) {
    res.status(400).json({ message: "Error creating comment", error: error.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error: error.message });
  }
};
