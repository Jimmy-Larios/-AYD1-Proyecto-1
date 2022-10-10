import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FormRegisterUser from '../components/FormRegisterUser';
import Login from '../components/Login';
import FormRegisterTertiaryService from '../components/FormRegisterTertiaryService';
import FormRegisterReserveRoom from '../components/FormRegisterReserveRoom';
import HomeUsers from '../components/HomeUsers';
import Navegacion from '../components/Navegacion';
import {ReactSession} from 'react-client-session'
import HomeVuelos from '../components/Flights/HomeVuelos';
import HomeCarros from '../components/Cars/HomeCarros';
import HomeHotel from '../components/Hotels/HomeHotel'

import SeeCars from '../components/Cars/SeeCars';
import SeeRooms from '../components/Hotels/SeeRooms';
import SeeFlights from '../components/Flights/SeeFlights';

const RoutesPath = () => {
	ReactSession.setStoreType("localStorage");
	
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path={'/sigup'}  element={<FormRegisterUser/>}/>
					<Route exact path={'/login'} element={<Login/>}/>
					<Route exact path={'/registerService'} element={<FormRegisterTertiaryService/>}/>
					<Route exact path={'/registerReserveRoom'} element={<FormRegisterReserveRoom/>}/>
					<Route exact path={'/homeUser'} element={<HomeUsers/>}/>
					<Route exact path={'/homeHotel'} element={<HomeHotel/>}/>
					<Route exact path={'/homeVuelos'} element={<HomeVuelos/>}/>
					<Route exact path={'/homeCarros'} element={<HomeCarros/>}/>
					<Route exact path={'/Navegacion'} element={<Navegacion/>}/>

					<Route exact path={'/SeeCars'} element={<SeeCars/>}/>
					<Route exact path={'/SeeRooms'} element={<SeeRooms/>}/>
					<Route exact path={'/SeeFlights'} element={<SeeFlights/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default RoutesPath;