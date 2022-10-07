const mongoose = require('mongoose');

// TODO: falta terminar el schema
const reviewSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);