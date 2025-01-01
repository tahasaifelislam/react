const Command = require("../models/command");
const Sandwich = require("../models/Sandwich");
const crypto = require("crypto");

exports.getAllCommands = async (req, res) => {
    try {
      const commands = await Command.find();
      res.status(200).json(commands);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };

/* exports.createCommand = async (req, res) => {
  try {
    const { customerName, sandwiches } = req.body;

    let totalPrice = 0;
    for (const item of sandwiches) {
      const sandwich = await Sandwich.findById(item.sandwich);
      if (!sandwich) throw new Error(`Sandwich with ID ${item.sandwich} not found`);
      totalPrice += sandwich.price * item.quantity;
    }

    const uniqueCode = crypto.randomBytes(3).toString("hex").toUpperCase();

    const newCommand = new Command({
      customerName,
      sandwiches,
      totalPrice,
      uniqueCode,
    });

    await newCommand.save();
    res.status(201).json({ message: "Command created", uniqueCode });
  } catch (err) {
    res.status(400).json({ message: "Error creating command", error: err.message });
  }
};
 */
// commandController.js
exports.createCommand = async (req, res) => {
    try {
      const { sandwiches, totalPrice } = req.body;
  
      const sandwichDetails = sandwiches.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity, 
        total: item.price * item.quantity, 
      }));
  
      const uniqueCode = crypto.randomBytes(3).toString("hex").toUpperCase();
  
      const newCommand = new Command({
        sandwiches: sandwichDetails,
        totalPrice,
        uniqueCode,
      });
  
      await newCommand.save();
      res.status(201).json({ message: "Command created", uniqueCode });
    } catch (err) {
      res.status(400).json({ message: "Error creating command", error: err.message });
    }
  };
  