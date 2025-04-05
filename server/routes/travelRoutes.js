const express = require('express');
const router = express.Router();
const TravelPackage = require('../models/TravelPackage');
// const Package = require('../models/Package');

// GET all packages
router.get('/', async (req, res) => {
  try {
    const packages = await TravelPackage.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a package (use Postman for now)
router.post('/', async (req, res) => {
    console.log('Request Body:', req.body); // 🧪 Add this
  
    const newPackage = new TravelPackage(req.body);
    try {
      const saved = await newPackage.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
 // GET single package by ID
router.get('/:id', async (req, res) => {
  try {
      const pkg = await TravelPackage.findById(req.params.id); // ✅ FIXED
      if (!pkg) return res.status(404).json({ message: 'Package not found' });
      res.json(pkg);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});



module.exports = router;
