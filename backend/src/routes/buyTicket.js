const express = require('express');
const userSchema = require('../models/user');
const buyTicketSchema = require('../models/buyTicket');

const router = express.Router();

router.post('/create', async (req, res) => {
    const { idUser, confirmPassword } = req.body;
    let userExist = await userSchema.findOne({ _id: idUser }).exec();

    if(!userExist) 
        return res.status(400).send({
        message: 'User not found'
        });

    if (userExist && (await userExist.matchPassword(confirmPassword)))
        return buyTicketSchema(req.body)
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: error }))
    else res.status(400).send({
        message: 'Password did not match'
    });
});

module.exports = router;