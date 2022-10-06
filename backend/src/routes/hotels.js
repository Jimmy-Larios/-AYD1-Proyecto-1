const express = require('express');
const hotelSchema = require('../models/hotel');

const router = express.Router();

// create hotel
router.post('/create', (req, res) => {
    const hotel = hotelSchema(req.body);
    hotel  
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all hotels
router.get('/getAll', (req, res) => {
    hotelSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;