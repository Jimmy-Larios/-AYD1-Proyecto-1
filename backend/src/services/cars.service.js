const carSchema = require('../mongodb/models/car.model');

// createCar
const createCar=  (req, res) => {
    const car = carSchema(req.body);
    car.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// getAllCars
const getAllCars = (req, res) => {
    carSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createCar,
    getAllCars
};