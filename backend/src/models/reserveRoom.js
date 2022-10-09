const mongoose = require('mongoose');

const reserveRoomSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idRoom: {
        type: String,
        required: true
    },
    reservationDate: {
        type: Date,
        required: true
    },
    numberDays: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("ReserveRoom", reserveRoomSchema);