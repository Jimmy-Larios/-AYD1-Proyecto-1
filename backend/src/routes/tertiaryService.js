const express = require('express');
const tertiaryServiceSchema = require('../models/tertiaryService');

const router = express.Router();

// create tertiary services
router.post('/create', (req, res) => {
    const tertiaryService = tertiaryServiceSchema(req.body);
    tertiaryService  
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all tertiary services
router.get('/getAll', (req, res) => {
    tertiaryServiceSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;