const express = require('express');
const hotelSchema = require('../mongodb/models/hotel.model');

const router = express.Router();

// createHotel
const createHotel = (req, res) => {
    const hotel = hotelSchema(req.body);
    hotel.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// getAllHotels
const getAllHotels = (req, res) => {
    hotelSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createHotel,
    getAllHotels
};