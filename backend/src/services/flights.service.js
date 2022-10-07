const express = require('express');
const flightSchema = require('../mongodb/models/flight.model');

const router = express.Router();

// createFlight
const createFlight = (req, res) => {
    const flight = flightSchema(req.body);
    flight.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// getAllFlights
const getAllFlights = (req, res) => {
    flightSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// getByDestination
const getByDestination = (req, res) => {
    const { destination } = req.params;
    flightSchema.findOne({ destination: destination })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createFlight,
    getAllFlights,
    getByDestination
};
