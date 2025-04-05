// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a booking
router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (err) {
        res.status(500).json({ error: 'Booking failed', details: err });
    }
});

// Delete a booking by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Booking.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Booking not found' });
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all bookings and populate package details
router.get('/', async (req, res) => {
    try {
      const bookings = await Booking.find().populate('packageId');
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;
