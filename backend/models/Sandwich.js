const mongoose = require('mongoose');

const sandwichSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [String],  // Array of ingredients
    required: true
  }
});

const Sandwich = mongoose.model('Sandwiches', sandwichSchema);

module.exports = Sandwich;
