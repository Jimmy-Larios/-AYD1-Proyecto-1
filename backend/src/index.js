const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// routes requires
const userRoutes = require('./routes/users');
const tertiaryServiceRoutes = require('./routes/tertiaryService')
const carRoutes = require('./routes/cars');
const flighRoutes = require('./routes/flights');
const reviewRoutes = require('./routes/reviews');
const roomRoutes = require('./routes/rooms');
const reserveRoomRoutes = require('./routes/reserveRooms');

// initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/user', userRoutes);
app.use('/car', carRoutes);
app.use('/flight', flighRoutes);
app.use('/review', reviewRoutes);
app.use('/tertiaryService', tertiaryServiceRoutes)
app.use('/room', roomRoutes);
app.use('/reserveRoom', reserveRoomRoutes);

// server initialization
const server = app.listen(app.get('port'), () => {
    console.log(`server o port ${app.get('port')}`);
});

module.exports = server