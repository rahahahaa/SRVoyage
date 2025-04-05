require('dotenv').config(); // ✅ Important!
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend running ✅');
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log('🚀 Server running on port', process.env.PORT || 5000);
    });
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});
// Add this below middlewares
const travelRoutes = require('./routes/travelRoutes');
app.use('/api/packages', travelRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

