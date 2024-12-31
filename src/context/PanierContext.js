import React, { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  const addToPanier = (item) => {
    setPanier((prevPanier) => [...prevPanier, item]);
  };

  const removeFromPanier = (index) => {
    setPanier((prevPanier) => prevPanier.filter((_, idx) => idx !== index));
  };

  return (
    <PanierContext.Provider value={{ panier, addToPanier, removeFromPanier }}>
      {children}
    </PanierContext.Provider>
  );
};
