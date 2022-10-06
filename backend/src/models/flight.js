const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Flight', flightSchema);