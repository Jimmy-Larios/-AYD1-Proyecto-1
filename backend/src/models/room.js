const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    idHotel: {
        type: String,
        required: true
    },
    amountPeople: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Room', roomSchema);