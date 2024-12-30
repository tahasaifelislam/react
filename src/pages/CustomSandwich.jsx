import React, { useState } from "react";
import "./CustomSandwich.css";
import { useHistory } from "react-router-dom";


// Import the available ingredients from the helper
import { availableIngredients } from "../helpers/customiseList";

// Import images from the assets folder
import topBread from "../assets/top-bread.png";
import bottomBread from "../assets/bottom-bread.png";

const CustomSandwich = () => {
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();

  // Function to toggle the ingredient (add or remove)
  const toggleIngredient = (ingredient) => {
    // Check if the ingredient is already in the sandwich
    const ingredientExists = ingredients.some(
      (item) => item.name === ingredient.name
    );

    // Handle mutually exclusive group logic
    if (ingredient.group) {
      // Remove other ingredients in the same group
      const filteredIngredients = ingredients.filter(
        (item) => item.group !== ingredient.group
      );

      if (!ingredientExists) {
        // Add the new ingredient from the group
        setIngredients([...filteredIngredients, ingredient]);
      } else {
        // Just keep the filtered ingredients (effectively removing the clicked one)
        setIngredients(filteredIngredients);
      }
    } else {
      // If no group, toggle normally
      if (ingredientExists) {
        setIngredients(ingredients.filter((item) => item.name !== ingredient.name));
      } else {
        setIngredients([...ingredients, ingredient]);
      }
    }
  };

  // Handle validation and navigation to the Panier page
  const handleValidation = () => {
    history.push("/panier", { ingredients });
  };
  

  return ( 
    
    <div className="custom-sandwich-container">
      
      <h2>Customize Your Sandwich</h2>
      
      <div className="sandwich-preview">
             
        <div className="ingredients-stack">
          <img src={topBread} alt="Top Bread" className="bread" />
          {ingredients.map((ingredient, index) => (
            <img
              key={index}
              src={ingredient.image}
              alt={ingredient.name}
              className="ingredient"
            />
          ))}<img src={bottomBread} alt="Bottom Bread" className="bread" />

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
        
      </div>
      
      
      <button className="validate-button" onClick={handleValidation}>
        Validate Choices
      </button>
    </div>
    
  );
};

export default CustomSandwich;