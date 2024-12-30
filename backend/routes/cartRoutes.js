// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Sandwich = require("../models/Sandwich");

// Add sandwich to cart
router.post("/cart/add", async (req, res) => {
  const { sandwichId } = req.body;

  try {
    // Find the cart or create a new one
    let cart = await Cart.findOne();
    if (!cart) {
      cart = await Cart.create({ totalPrice: 0, sandwiches: [] });
    }

    // Find the sandwich
    const sandwich = await Sandwich.findById(sandwichId);
    if (!sandwich) {
      return res.status(404).json({ message: "Sandwich not found" });
    }

    // Add the sandwich to the cart
    cart.sandwiches.push(sandwich._id);
    cart.totalPrice += sandwich.price;

    // Save the cart
    await cart.save();

    res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding sandwich to cart" });
  }
});

// Remove sandwich from cart
router.post("/cart/remove", async (req, res) => {
  const { cartId, sandwichId } = req.body;

  try {
    const cart = await Cart.findById(cartId).populate("sandwiches");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the sandwich in the cart
    const sandwichIndex = cart.sandwiches.findIndex(s => s._id.toString() === sandwichId);
    if (sandwichIndex === -1) {
      return res.status(404).json({ message: "Sandwich not found in cart" });
    }

    // Remove the sandwich from the cart
    const sandwich = cart.sandwiches[sandwichIndex];
    cart.sandwiches.splice(sandwichIndex, 1);
    cart.totalPrice -= sandwich.price;

    // Save the updated cart
    await cart.save();

    res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing sandwich from cart" });
  }
});

module.exports = router;
