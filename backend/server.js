const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const sandwichRoutes = require('./routes/sandwichRoutes');  // Correct path to sandwichRoutes

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Serve static files (e.g., images) from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Use sandwich routes (ensures /api/menu is available)
app.use('/api', sandwichRoutes); // Ensure '/api' is prepended to the route

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/reactsandwich', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
