const mongoose = require('mongoose');
const carSchema = mongoose.Schema({
    brand: { type: String, required: true },
    mileage: { type: Number, required: true },
    numberOfDoors: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    transmission: { type: String, required: true },
    color: { type: String, required: true },
    electric: { type: Boolean, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    city: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Car', carSchema);