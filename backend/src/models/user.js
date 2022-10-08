const mongoose = require('mongoose');

const bcrypt =require("bcryptjs");

const userShcema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
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
userShcema.pre('save', async function(next){
if(!this.isModified('password')){
    next();
}

const salt= await bcrypt.genSalt(10)
this.password= await bcrypt.hash(this.password,salt);

})
userShcema.methods.matchPassword= async function(enteredPass){
    return await bcrypt.compare(enteredPass, this.password);
    }


module.exports = mongoose.model('User', userShcema);