const Cart = require('../models/Cart');
const Sandwich = require('../models/Sandwich');
const mongoose = require('mongoose'); // For validating ObjectIds

// Function to add a sandwich to the cart
exports.addSandwichToCart = async (req, res) => {
  const { cartId, sandwichId } = req.body;

  // Validate IDs
  if (!mongoose.Types.ObjectId.isValid(cartId) || !mongoose.Types.ObjectId.isValid(sandwichId)) {
    return res.status(400).json({ message: 'Invalid cart or sandwich ID' });
  }

  try {
    // Find the cart and sandwich by their IDs
    const cart = await Cart.findById(cartId);
    const sandwich = await Sandwich.findById(sandwichId);

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    if (!sandwich) {
      return res.status(404).json({ message: 'Sandwich not found' });
    }

    // Add sandwich ID to the cart
    cart.sandwiches.push(sandwichId);
    cart.totalPrice += sandwich.price;

    // Save the updated cart
    await cart.save();

    return res.status(200).json({ message: 'Sandwich added to cart', cart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error adding sandwich to cart', error });
  }
};

// Function to remove a sandwich from the cart
exports.removeSandwichFromCart = async (req, res) => {
  const { cartId, sandwichId } = req.body;

  // Validate IDs
  if (!mongoose.Types.ObjectId.isValid(cartId) || !mongoose.Types.ObjectId.isValid(sandwichId)) {
    return res.status(400).json({ message: 'Invalid cart or sandwich ID' });
  }

  try {
    // Find the cart by its ID
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Check if the sandwich is in the cart
    const sandwichIndex = cart.sandwiches.indexOf(sandwichId);
    if (sandwichIndex === -1) {
      return res.status(404).json({ message: 'Sandwich not found in cart' });
    }

    // Find the sandwich to get its price
    const sandwich = await Sandwich.findById(sandwichId);
    if (!sandwich) {
      return res.status(404).json({ message: 'Sandwich not found' });
    }

    // Remove the sandwich from the cart
    cart.sandwiches.splice(sandwichIndex, 1);
    cart.totalPrice -= sandwich.price;

    // Prevent totalPrice from going negative
    if (cart.totalPrice < 0) {
      cart.totalPrice = 0;
    }

    // Save the updated cart
    await cart.save();

    return res.status(200).json({ message: 'Sandwich removed from cart', cart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error removing sandwich from cart', error });
  }
};
