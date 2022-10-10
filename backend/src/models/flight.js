const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    idAirlineService: {
        type: String,
        required: true
    },
    travelDate: {
        type: Date,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    typeFlight: {
        type: Number, /* (1 outbound trip, 2 round trip) */
        required: true
    }
});

module.exports = mongoose.model('Flight', flightSchema);