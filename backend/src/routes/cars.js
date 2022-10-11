const express = require('express');
const carSchema = require('../models/car');

const router = express.Router();

// create car
router.post('/create', (req, res) => {
    const car = carSchema(req.body);
    car
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all cars
router.get('/getAll', (req, res) => {
    carSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.post('/getCarsServ', async function(req,res,next) {
       

        let singlePerson = await carSchema.find({idCarRentalService:req.body.idServ}).exec();
      return res.json(singlePerson);
   
    

});



module.exports = router;