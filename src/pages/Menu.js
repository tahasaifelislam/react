import React, { useState, useEffect, useContext } from "react";
import axios from "axios"; // Importer axios
import MenuItem from "../components/MenuItem";
import { PanierContext } from "../context/PanierContext"; 
import "../styles/Menu.css";

function Menu() {
  const { addToPanier } = useContext(PanierContext); // Utiliser le contexte
  const [menuItems, setMenuItems] = useState([]); // État pour stocker les sandwiches

  // Fonction pour récupérer les sandwiches du backend
  const fetchMenuItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/sandwiches"); // API du backend
      setMenuItems(response.data); // Mettre à jour l'état avec les données
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  // Charger les sandwiches au démarrage du composant
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleAddToPanier = (item) => {
    // Ajouter l'item au panier
    addToPanier(item);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {menuItems.length > 0 ? (
          menuItems.map((menuItem, key) => (
            <div key={key} className="menu-item">
              <MenuItem
                image={menuItem.image}  // Associer l'image depuis l'API
                name={menuItem.name}
                price={menuItem.price}
              />
              <button
                className="addToPanierButton"
                onClick={() => handleAddToPanier(menuItem)}
              >
                Add to Panier
              </button>
            </div>
          ))
        ) : (
          <p>Loading menu...</p> // Afficher un message pendant le chargement des données
        )}
      </div>
    </div>
  );
}

export default Menu;

