import React from "react";
import { useLocation } from "react-router-dom";
import "./Panier.css";

const Panier = () => {
  const location = useLocation();
  const { ingredients } = location.state || { ingredients: [] };

  return (
    <div className="panier-container">
      <h2>Your Panier</h2>
      {ingredients.length > 0 ? (
        <div className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <img src={ingredient.image} alt={ingredient.name} className="ingredient-image" />
              <p>{ingredient.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No ingredients selected.</p>
      )}
    </div>
  );
};

export default Panier;
