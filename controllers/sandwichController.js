const Sandwich = require("../models/Sandwich");

exports.getAllSandwiches = async (req, res) => {
  try {
    const sandwiches = await Sandwich.find();
    res.status(200).json(sandwiches);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.createSandwich = async (req, res) => {
  try {
    const newSandwich = new Sandwich(req.body);
    await newSandwich.save();
    res.status(201).json(newSandwich);
  } catch (err) {
    res.status(400).json({ message: "Validation error", error: err.message });
  }
};
