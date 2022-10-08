const mongoose = require('mongoose');

const bcrypt =require("bcryptjs");

const tertiaryServiceShcema = mongoose.Schema({
    typeService: {
        type: Number, //(1->Hoteles, 2->rentade autos, 3->aerolinea)
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { // TODO: falta encriptarla
        type: String,
        required: true
    }
});

tertiaryServiceShcema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt= await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt);
})

tertiaryServiceShcema.methods.matchPassword= async function(enteredPass){
    return await bcrypt.compare(enteredPass, this.password);
}


module.exports = mongoose.model('tertiaryService', tertiaryServiceShcema);