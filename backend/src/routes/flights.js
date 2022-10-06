const express = require('express');
const flightSchema = require('../models/flight');

const router = express.Router();

// create flight
router.post('/create', (req, res) => {
    const flight = flightSchema(req.body);
    flight
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all flights
router.get('/getAll', (req, res) => {
    flightSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// FIX: no retorna nada
// get flight by destination
router.get('/getByDestination/:destination', (req, res) => {
    const { destination } = req.params;
    flightSchema
        .findOne({ destination: destination })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
