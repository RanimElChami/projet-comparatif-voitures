const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema({
    carId: { type: String, required: true },
    reservationStartDate: { type: Date, required: true },
    reservationEndDate: { type: Date, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);