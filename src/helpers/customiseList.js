// Import images from src/assets
import cheese from "../assets/cheese.png";
import onion from "../assets/onion.png";
import tomato from "../assets/tomato.png";
import olives from "../assets/olives.png";

import viande from "../assets/viande.png";
import poulet from "../assets/poulet.png";
import thon from "../assets/thon.png";
import laitue from "../assets/laitue.png";

export const availableIngredients = [
    { name: "cheese", image: cheese },
    { name: "Onion", image: onion },
    { name: "Tomato", image: tomato},
    { name: "Olives", image: olives },
    {name: "Viande", image: viande, group: "protein" },
    { name: "Poulet", image: poulet, group: "protein" },
    { name: "Thon", image: thon, group: "protein" },
    { name: "Laitue", image: laitue },
  ];
  
