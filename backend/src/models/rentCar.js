const mongoose = require('mongoose');

const rentCarSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idCar: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    numberOfDays: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("RentCar", rentCarSchema);