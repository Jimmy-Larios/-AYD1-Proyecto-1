import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormRegisterUser from '../components/FormRegisterUser';
import Login from '../components/Login';
import FormRegisterTertiaryService from '../components/FormRegisterTertiaryService';

import FormRegisterCar from '../components/FormRegisterCar';
import FormRegisterRoom from '../components/FormRegisterRoom';
import FormRegisterReserveRoom from '../components/FormRegisterReserveRoom';

import HomeUsers from '../components/HomeUsers';
import Navegacion from '../components/Navegacion';
import {ReactSession} from 'react-client-session'
import HomeVuelos from '../components/HomeVuelos';
import HomeCarros from '../components/HomeCarros';
import HomeHotel from '../components/HomeHotel'
const RoutesPath = () => {
	ReactSession.setStoreType("localStorage");
	
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path={'/sigup'}  element={<FormRegisterUser/>}/>
					<Route exact path={'/login'} element={<Login/>}/>
					<Route exact path={'/registerService'} element={<FormRegisterTertiaryService/>}/>
					<Route exact path={'/registerCar'} element={<FormRegisterCar/>}/>
					<Route exact path={'/registerRoom'} element={<FormRegisterRoom/>}/>
					<Route exact path={'/registerReserveRoom'} element={<FormRegisterReserveRoom/>}/>
					<Route exact path={'/homeUser'} element={<HomeUsers/>}/>
					<Route exact path={'/homeHotel'} element={<HomeHotel/>}/>
					<Route exact path={'/homeVuelos'} element={<HomeVuelos/>}/>
					<Route exact path={'/homeCarros'} element={<HomeCarros/>}/>
					<Route exact path={'/Navegacion'} element={<Navegacion/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default RoutesPath;