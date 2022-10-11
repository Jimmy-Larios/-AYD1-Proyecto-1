const express = require('express');
const reviewSchema = require('../models/review');

const router = express.Router();

// create review
router.post('/create', (req, res) => {
    const review = reviewSchema(req.body);
    review
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/getAll', (req, res) => {
    reviewSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;