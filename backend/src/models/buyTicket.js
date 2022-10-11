const mongoose = require('mongoose');

const buyTicketSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idFlight: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: String,
        required: true
    }    

});

module.exports = mongoose.model("BuyTicket", buyTicketSchema);