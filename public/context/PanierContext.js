import React, { createContext, useState } from "react";

// Créer le contexte
export const PanierContext = createContext();

// Fournisseur du contexte
export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  // Ajouter un élément au panier
  const addToPanier = (item) => {
    // Si c'est un sandwich personnalisé, calculez son prix
    if (item.ingredients) {
      const price = item.ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
      item = { ...item, price };
    }
    setPanier((prev) => [...prev, item]);
  };

  // Supprimer un élément du panier
  const removeFromPanier = (itemToRemove) => {
    setPanier((prev) =>
      prev.filter((item) => item.name !== itemToRemove.name)
    );
  };

  return (
    <PanierContext.Provider value={{ panier, addToPanier, removeFromPanier }}>
      {children}
    </PanierContext.Provider>
  );
};
