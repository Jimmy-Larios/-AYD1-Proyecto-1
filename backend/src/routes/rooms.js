const express = require('express');
const roomSchema = require('../models/room');

const router = express.Router();

// create room
router.post('/create', (req, res) => {
    const room = roomSchema(req.body);
    room
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all rooms
router.get('/getAll', (req, res) => {
    roomSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;