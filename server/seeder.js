const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Package = require('./models/packageModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("✅ Connected to DB");

    // 🔥 DELETE all existing packages
    await Package.deleteMany({});
    console.log("✅ Old packages cleared");

    // 🆕 INSERT only the uncommented ones
    await Package.insertMany([
        {
            title: "Kashmir Paradise",
            image: "uploads/kashmir.jpg",
            description: "Heaven on Earth",
            location: "Kashmir",
            price: 12999,
            dates: ["2025-04-10", "2025-04-18"]
        },
        {
            title: "Manali Adventures",
            image: "uploads/manali.jpg",
            description: "Snow, Thrill, and Peace",
            location: "Manali",
            price: 10999,
            dates: ["2025-05-01", "2025-05-10"]
        }
    ]);

    console.log("✅ New packages seeded");
    process.exit();
}).catch(err => {
    console.error("❌ Seeding error:", err);
    process.exit(1);
});
