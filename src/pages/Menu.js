import React, { useContext } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { PanierContext } from "../context/PanierContext"; // Importer le PanierContext
import "../styles/Menu.css";

function Menu() {
  const { addToPanier } = useContext(PanierContext); // Utiliser le contexte
  const handleAddToPanier = (item) => {
    // Ajouter l'item au panier
    addToPanier(item);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div key={key} className="menu-item">
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
            {/* Bouton pour ajouter au panier */}
            <button
              className="addToPanierButton"
              onClick={() => handleAddToPanier(menuItem)}
            >
              Add to Panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
