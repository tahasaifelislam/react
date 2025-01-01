const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
});

const sandwichSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: false, trim: true },
  ingredients: { type: [ingredientSchema], default: [] }
});

module.exports = mongoose.model("Sandwich", sandwichSchema);
