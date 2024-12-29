import React, { useState } from "react";
import "./CustomSandwich.css";

// Import the available ingredients from the helper
import { availableIngredients } from "../helpers/customiseList";

// Import images from the assets folder
import topBread from "../assets/top-bread.png";
import bottomBread from "../assets/bottom-bread.png";

const CustomSandwich = () => {
  const [ingredients, setIngredients] = useState([]);

  // Add ingredient to the sandwich stack
  const toggleIngredient = (ingredient) => {
    // Check if the ingredient is already in the sandwich
    const ingredientExists = ingredients.some(
      (item) => item.name === ingredient.name
    );

    // If it exists, remove it; if not, add it
    if (ingredientExists) {
      setIngredients(ingredients.filter((item) => item.name !== ingredient.name));
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  return (
    
    <div className="custom-sandwich-container">
      <h2>Customize Your Sandwich</h2>
      <div className="sandwich-preview">
        <img src={topBread} alt="Top Bread" className="bread" />
        <div className="ingredients-stack">
          {ingredients.map((ingredient, index) => (
            <img
              key={index}
              src={ingredient.image}
              alt={ingredient.name}
              className="ingredient"
            />
          ))}<img src={bottomBread} alt="Bottom Bread" className="bread" />
        </div>
      </div>
            
      <div className="customiseList">
        {availableIngredients.map((ingredient) => (
          <img
            key={ingredient.name}
            src={ingredient.image}
            alt={ingredient.name}
            className="ingredient-option"
            onClick={() => toggleIngredient(ingredient)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSandwich;
