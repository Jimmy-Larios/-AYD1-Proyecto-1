const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    idAirlineService: {
        type: String,
        required: true
    },
    travelDate: {
        type: String,
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
    }
});

module.exports = mongoose.model('Flight', flightSchema);