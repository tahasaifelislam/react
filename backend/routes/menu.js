const express = require('express');
const router = express.Router();
const Sandwich = require('../models/Sandwich'); // Adjust to your correct path

// Get all sandwiches from the database
router.get('/menu', async (req, res) => {
  try {
    const sandwiches = await Sandwich.find(); // Fetch all sandwiches from the database
    res.status(200).json(sandwiches);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu items', error });
  }
});

module.exports = router;
