const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idService: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);