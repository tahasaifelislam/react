import React from 'react';
import axios from 'axios'; // Import axios for HTTP requests

function MenuItem({ image, name, price, ingredients, onClick }) {

  // Function to add sandwich to the backend (MongoDB)
  const addSandwichToDatabase = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sandwiches', {
        name,
        price,
        image,
        ingredients
      });
      console.log("Sandwich added:", response.data);
    } catch (error) {
      console.error("Error adding sandwich:", error);
    }
  };

  return (
    <div className="menuItem" onClick={addSandwichToDatabase}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
