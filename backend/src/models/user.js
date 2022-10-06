const mongoose = require('mongoose');


// TODO: agregar todos los campos necesarios
const userShcema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userShcema);