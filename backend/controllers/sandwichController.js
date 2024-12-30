const Sandwich = require('../models/Sandwich');

// Récupérer tous les sandwiches
exports.getAllSandwiches = async (req, res) => {
  try {
    const sandwiches = await Sandwich.find(); // Trouver tous les sandwiches
    res.status(200).json(sandwiches); // Retourner la liste des sandwiches
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des sandwiches', error });
  }
};

// Récupérer un sandwich par son ID
exports.getSandwichById = async (req, res) => {
  try {
    const sandwich = await Sandwich.findById(req.params.id); // Chercher un sandwich par son ID
    if (!sandwich) {
      return res.status(404).json({ message: 'Sandwich non trouvé' });
    }
    res.status(200).json(sandwich); // Retourner le sandwich
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du sandwich', error });
  }
};

// Créer un sandwich
exports.createSandwich = async (req, res) => {
  try {
    const { name, price, ingredients } = req.body;
    const newSandwich = new Sandwich({ name, price, ingredients });
    await newSandwich.save(); // Sauvegarder le sandwich dans la base de données
    res.status(201).json(newSandwich); // Retourner le sandwich créé
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du sandwich', error });
  }
};

// Mettre à jour un sandwich par son ID
exports.updateSandwich = async (req, res) => {
  try {
    const { name, price, ingredients } = req.body;
    const updatedSandwich = await Sandwich.findByIdAndUpdate(
      req.params.id,
      { name, price, ingredients },
      { new: true } // Retourner le sandwich mis à jour
    );

    if (!updatedSandwich) {
      return res.status(404).json({ message: 'Sandwich non trouvé' });
    }

    res.status(200).json(updatedSandwich); // Retourner le sandwich mis à jour
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du sandwich', error });
  }
};

// Supprimer un sandwich par son ID
exports.deleteSandwich = async (req, res) => {
  try {
    const deletedSandwich = await Sandwich.findByIdAndDelete(req.params.id); // Supprimer le sandwich par son ID
    if (!deletedSandwich) {
      return res.status(404).json({ message: 'Sandwich non trouvé' });
    }
    res.status(200).json({ message: 'Sandwich supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du sandwich', error });
  }
};
