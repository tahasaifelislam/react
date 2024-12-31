import React, { useState, useContext } from "react";
import "../styles/CustomSandwich.css";
import { useHistory } from "react-router-dom";
import { PanierContext } from "../context/PanierContext";
import { availableIngredients } from "../helpers/customiseList";
import topBread from "../assets/top-bread.png";
import bottomBread from "../assets/bottom-bread.png";

const CustomSandwich = () => {
  const [ingredients, setIngredients] = useState([]);
  const { addToPanier } = useContext(PanierContext);
  const history = useHistory();

  const toggleIngredient = (ingredient) => {
    const ingredientExists = ingredients.some(
      (item) => item.name === ingredient.name
    );

    if (ingredient.group) {
      const filteredIngredients = ingredients.filter(
        (item) => item.group !== ingredient.group
      );

      if (!ingredientExists) {
        setIngredients([...filteredIngredients, ingredient]);
      } else {
        setIngredients(filteredIngredients);
      }
    } else {
      if (ingredientExists) {
        setIngredients(ingredients.filter((item) => item.name !== ingredient.name));
      } else {
        setIngredients([...ingredients, ingredient]);
      }
    }
  };

  const handleValidation = () => {
    if (ingredients.length > 0) {
      const selectedIngredients = ingredients.map((ingredient) => ({
        name: ingredient.name,
        price: ingredient.price,
      }));
      addToPanier({ name: "Custom Sandwich", ingredients: selectedIngredients, price: 8 + ingredients.reduce((total, ingredient) => total + ingredient.price, 0) });
      history.push("/panier");
    } else {
      alert("Please select at least one ingredient.");
    }
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
              className="ingredient-small" // Classe pour petite taille
            />
          ))}
          <img src={bottomBread} alt="Bottom Bread" className="bread" />
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
      <button className="validate-button" onClick={handleValidation}>
        Validate Choices
      </button>
    </div>
  );
};

export default CustomSandwich;
