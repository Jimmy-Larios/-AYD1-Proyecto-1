const mongoose = require('mongoose');

const userShcema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { // TODO: falta encriptarla
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userShcema);