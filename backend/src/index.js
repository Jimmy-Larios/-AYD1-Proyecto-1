const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const publicRoute = require('./routes/public.route');
const turistaRoute = require('./routes/turista.route');
const rentCarRoute = require('./routes/rentCar.route')
const hotelRoute = require('./routes/hotel.route');
const aerolineaRoute = require('./routes/aerolinea.route');

// initializations
const app = express();
require('./mongodb');

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(cors());
app.use(express.json());

//Services
app.use('user', publicRoute);
app.use('turista', turistaRoute);
app.use('rentCar', rentCarRoute);
app.use('hotel', hotelRoute);
app.use('aerolinea', aerolineaRoute)

// server initialization
app.listen(app.get('port'), () => {
    console.log(`server o port ${app.get('port')}`);
});