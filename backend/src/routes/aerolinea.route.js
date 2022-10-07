const { Router } = require('express');
const fligh = require('../services/flights.service');

const router = Router();

router.post('/create', fligh.createFlight);
router.get('/getAll', fligh.getAllFlights);
router.get('/getByDestination', fligh.getByDestination);

module.exports = router;