const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);