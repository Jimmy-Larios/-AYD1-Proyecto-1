const express = require('express');
const userSchema = require('../models/user');
const servSchema =require('../models/tertiaryService')
const router = express.Router();
const bcrypt=require("bcryptjs");

const authUser =require('../controllers/userControllers')
// create user
router.post('/create', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get('/getAll', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.post('/login', async function(req,res,next) {
    console.log(req.body.email, req.body.password)
    const { email, password,service } = req.body;
    if(service===false){
    let userExist = await userSchema.findOne({ email: req.body.email }).exec();
    if(!userExist) return res.status(400).send({
        message: 'Email not found'
    });
    if (userExist.user == 'admin'){
        return res.status(200).send({
            message: 'Log in',
            success:true,
            id:userExist._id,
            user:userExist.user,
            tipo:'0'
        });
    }else if(userExist && (await userExist.matchPassword(password))){
        return res.status(200).send({
            message: 'Log in',
            id:userExist._id,
            user:userExist.user,
            tipo:'1',
            success:true
        });
    }else{
        return res.status(400).send({
            message: 'Password did not match'
        });
    }
    }else{
        let userExist=await servSchema.findOne({email: req.body.email}).exec();
    
    if(!userExist) return res.status(400).send({
        message: 'Email not found'
    });
    if (userExist.user == 'admin'){
        return res.status(200).send({
            message: 'Log in',
            success:true,
            id:userExist._id,
            user:userExist.user,
            tipo:'admin'
        });
    }else if(userExist && (await userExist.matchPassword(password))){
        return res.status(200).send({
            message: 'Log in',
            id:userExist._id,
            user:userExist.name,
            tipo:userExist.typeService,
            success:true
        });
    }else{
        return res.status(400).send({
            message: 'Password did not match'
        });
    }}
    

});
//router.get('/login', authUser.authUser);

module.exports = router;