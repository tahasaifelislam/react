const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();
const cors = require("cors");

const sandwichRoutes = require("./routes/sandwichRoutes");
const commandRoutes = require("./routes/commandRoutes");
const commentRoutes = require("./routes/commentRoutes"); // Ajouter l'importation des routes des commentaires

// Initialiser l'application Express
const app = express();

// Configurer CORS avant de définir les routes
app.use(cors({
  origin: "http://localhost:3000",  // Autoriser les requêtes provenant de localhost:3000
  methods: ["GET", "POST"],        // Autoriser les méthodes GET et POST
}));

// Connecter à la base de données
connectToDb();

// Utiliser le middleware pour analyser les requêtes JSON
app.use(express.json());

// Définir les routes
app.use("/api/sandwiches", sandwichRoutes);
app.use("/api/commands", commandRoutes);
app.use("/api/comments", commentRoutes); // Ajouter les routes des commentaires

// Démarrer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
