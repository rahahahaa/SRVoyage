// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelPackage', required: true },
  name: String,
  email: String,
  selectedDate: String
});

module.exports = mongoose.model('Booking', BookingSchema);
