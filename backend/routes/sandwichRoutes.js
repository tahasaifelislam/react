const express = require('express');
const Sandwich = require('../models/Sandwich');
const router = express.Router();

// Route to fetch all sandwiches (menu items)
router.get('/menu', async (req, res) => {
  try {
    const sandwiches = await Sandwich.find();  // Fetch all sandwiches from the database
    if (!sandwiches || sandwiches.length === 0) {
      return res.status(404).json({ message: 'No sandwiches found.' });
    }
    res.status(200).json(sandwiches);  // Send the sandwiches data as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu items', error: err });
  }
});

module.exports = router;
