const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    //placa
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
    }
});

module.exports = mongoose.model('Car', carSchema);