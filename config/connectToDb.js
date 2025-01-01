const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CLOUD_URI); // Supprimez les options inutiles
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed Connection !!", error);
    }
};
