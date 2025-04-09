// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelPackage', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  totalMembers: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema);
