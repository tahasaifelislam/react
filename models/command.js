const mongoose = require("mongoose");

const commandSchema = new mongoose.Schema({
  sandwiches: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  uniqueCode: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Command", commandSchema);
