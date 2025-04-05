// models/TravelPackage.js
const mongoose = require('mongoose');

const TravelPackageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  image: String,
  availableDates: [String],
});

module.exports = mongoose.model('TravelPackage', TravelPackageSchema);
