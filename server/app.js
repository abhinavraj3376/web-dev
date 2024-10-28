// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // Serve static files

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/travelPlatform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/itineraries', itineraryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
