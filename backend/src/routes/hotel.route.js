const { Router } = require('express');
const hotel = require('../services/hotels.service');

const router = Router();

router.post('/create', hotel.createHotel);
router.get('/getAll', hotel.getAllHotels);

module.exports = router;