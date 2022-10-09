const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    //placa
    idCarRentalService: {
        type: String,
        required: true
    },
    carRegistration: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);