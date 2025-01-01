import React, { useContext } from "react";
import { PanierContext } from "../context/PanierContext"; // Importer le PanierContext
import "../styles/Panier.css"; // Importer le fichier CSS

const Panier = () => {
  const { panier, removeFromPanier } = useContext(PanierContext); // Utiliser le contexte pour obtenir le panier

  // Calculer le prix total du panier
  const totalPrice = panier.reduce((total, item) => total + item.price, 0); 

  const handleRemove = (index) => {
    removeFromPanier(index); // Supprimer l'élément du panier par son index
  };

  return (
    <div className="panier-container">
      <h2 className="receipt-title">KTYM</h2> {/* Titre du reçu */}
      <div className="receipt">
        {panier.length > 0 ? (
          <div className="receipt-items">
            {console.log(panier,totalPrice)}
            {panier.map((item, index) => (
              <div key={index} className="receipt-item">
                <h3>{item.name}</h3>
                <div className="ingredients-list">
                  {item.ingredients && item.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="ingredient-detail">
                      <p>{ingredient.name} - {ingredient.price}€</p>
                    </div>
                  ))}
                </div>
                <p className="item-price">Item Price: {item.price}€</p>
                <button className="remove-button" onClick={() => handleRemove(index)}>Remove</button>
              </div>
            ))}
            <div className="total-price">
              <h3>Total: {totalPrice}€</h3>
            </div>
          </div>
        ) : (
          <p>No items in the panier.</p>
        )}
      </div>
    </div>
  );
};

export default Panier;
