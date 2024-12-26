import React from "react";
import abtus from "../assets/abt.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${abtus})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p> 

Chez KTYM, nous réinventons l'art du bocadillo dans un cadre moderne et accueillant. Notre passion : créer des sandwichs qui allient tradition et créativité.

Nos ingrédients sont soigneusement sélectionnés auprès de fournisseurs locaux de confiance. Du pain frais quotidien aux garnitures préparées avec soin, chaque élément est choisi pour vous offrir une expérience gustative unique.

Notre équipe passionnée vous accueille dans une ambiance chaleureuse et décontractée, où chaque bocadillo est préparé à la minute avec expertise et amour du travail bien fait.

TKYM - L'authentique snack de bocadillos où tradition espagnole rencontre modernité.
          
        </p>
      </div>
    </div>
  );
}

export default About;
