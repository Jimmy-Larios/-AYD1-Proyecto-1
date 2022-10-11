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

router.post('/getRoomServ', async function(req,res,next) {
    let singlePerson = await roomSchema.find({idHotel:req.body.idServ}).exec();
  return res.json(singlePerson);

});

module.exports = router;