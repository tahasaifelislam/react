// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  sandwiches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sandwich",
  }],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
