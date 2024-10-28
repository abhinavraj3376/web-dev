// server/routes/itineraryRoutes.js
const express = require('express');
const Itinerary = require('../models/Itinerary');

const router = express.Router();

// Get all itineraries or filter by location, budget, and interests
router.get('/', async (req, res) => {
  const { location, budget, interests } = req.query;
  const filter = {};
  
  if (location) filter.location = location;
  if (budget) filter.budget = budget;
  if (interests) filter.interests = { $in: interests.split(',') };
  
  try {
    const itineraries = await Itinerary.find(filter);
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
