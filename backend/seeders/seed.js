const mongoose = require('mongoose');
const Sandwich = require('../models/Sandwich'); // Assuming this is your Sandwich model

// Sample Sandwich data to insert into the database
const MenuList = [
  {
    name: "Bocadillo Casawi",
    image: "/assets/bocadillochamali.webp",
    price: 5.99,
    ingredients: ["Baguette", "Chicken", "Lettuce", "Tomato", "Cheese"] // Add ingredients
  },
  {
    name: "Bocadillo Tanjaoui",
    image: "/assets/bocadillotanjawi.webp",
    price: 5.99,
    ingredients: ["Baguette", "Beef", "Lettuce", "Tomato", "Onion"] // Add ingredients
  },
  {
    name: "Bocadillo Swiri",
    image: "/assets/bocadillomaxi.webp",
    price: 11.5,
    ingredients: ["Baguette", "Fish", "Lettuce", "Tomato", "Cheese"] // Add ingredients
  },
  {
    name: "Bocadillo New York",
    image: "/assets/bocadillonewyork.webp",
    price: 17.99,
    ingredients: ["Baguette", "Roast Beef", "Cheese", "Onions", "Mustard"] // Add ingredients
  },
  {
    name: "Bocadillo Tortilla",
    image: "/assets/bocadillotortilla.webp",
    price: 7.99,
    ingredients: ["Tortilla", "Chicken", "Lettuce", "Tomato", "Cheese"] // Add ingredients
  },
  {
    name: "Bocadillo Marrakchi",
    image: "/assets/bocadillomarrakchi.webp",
    price: 17.99,
    ingredients: ["Baguette", "Lamb", "Lettuce", "Tomato", "Spices"] // Add ingredients
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/reactsandwich', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');

    // Delete existing sandwiches if any
    await Sandwich.deleteMany({});

    // Insert new sandwiches from the MenuList
    await Sandwich.insertMany(MenuList);
    console.log('Sandwiches added to database!');

    // Close the database connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
    mongoose.connection.close();
  });
