const { Router } = require('express');
const car = require('../services/cars.service');

const router = Router();

router.post('/create', car.createCar);
router.get('/getAll', car.getAllCars);

module.exports = router;