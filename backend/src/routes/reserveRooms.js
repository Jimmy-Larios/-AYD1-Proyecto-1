const express = require('express');
const reserveRoomSchema = require('../models/reserveRoom');

const router = express.Router();

router.post('/create', (req, res) => {
    const reserveRoom = reserveRoomSchema(req.body);
    reserveRoom
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;