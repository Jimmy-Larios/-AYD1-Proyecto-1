const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// routes requires
const userRoutes = require('./src/routes/users');
const tertiaryServiceRoutes = require('./src/routes/tertiaryService')
const carRoutes = require('./src/routes/cars');
const flighRoutes = require('./src/routes/flights');
const roomRoutes = require('./src/routes/rooms');
const reserveRoomRoutes = require('./src/routes/reserveRooms');
const rentCarRoutes = require('./src/routes/rentCar');
const buyTickets = require('./src/routes/buyTicket');
const reviewRoutes = require('./src/routes/reviews');

// initializations
const app = express();
require('./src/database');

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/user', userRoutes);
app.use('/car', carRoutes);
app.use('/flight', flighRoutes);
app.use('/tertiaryService', tertiaryServiceRoutes)
app.use('/room', roomRoutes);
app.use('/reserveRoom', reserveRoomRoutes);
app.use('/rentCar', rentCarRoutes);
app.use('/buyTicket', buyTickets);
app.use('/review', reviewRoutes);

// server initialization
const server = app.listen(app.get('port'), () => {
    console.log(`server o port ${app.get('port')}`);
});

module.exports = server