// server/models/Itinerary.js
const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  location: String,
  budget: String,       // e.g., "low", "medium", "high"
  interests: [String],  // e.g., ["hiking", "beach"]
  details: String,      // e.g., "A scenic hike through the mountains."
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
