const express = require('express');
const mongoose = require('mongoose');
// routes requires
const userRoutes = require('./routes/users');
const hotelRoutes = require('./routes/hotels');
const carRoutes = require('./routes/cars');
const flighRoutes = require('./routes/flights');

// initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(express.json());

// routes
app.use('/user', userRoutes);
app.use('/hotel', hotelRoutes);
app.use('/car', carRoutes);
app.use('/flight', flighRoutes);

// server initialization
app.listen(app.get('port'), () => {
    console.log(`server o port ${app.get('port')}`);
});