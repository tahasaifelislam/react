const { Sandwich } = require('../config/database');

async function seedSandwiches() {
  const sandwiches = [
    { name: 'Chicken Sandwich', price: 5.99, ingredients: 'Chicken, Lettuce, Mayo' },
    { name: 'Vegetarian Sandwich', price: 4.99, ingredients: 'Lettuce, Tomato, Avocado, Cheese' },
    { name: 'Beef Sandwich', price: 6.49, ingredients: 'Beef, Lettuce, Tomato, Mustard' }
  ];

  for (let sandwich of sandwiches) {
    await Sandwich.create(sandwich);
  }

  console.log('Seeders exécutés : Sandwichs ajoutés');
}

seedSandwiches();
