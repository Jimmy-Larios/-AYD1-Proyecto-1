import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormRegisterUser from '../components/FormRegisterUser';
import Login from '../components/Login';
import FormRegisterTertiaryService from '../components/FormRegisterTertiaryService';

import FormRegisterCar from '../components/FormRegisterCar';
import FormRegisterRoom from '../components/FormRegisterRoom';
import FormRegisterReserveRoom from '../components/FormRegisterReserveRoom';

const RoutesPath = () => {
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
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default RoutesPath;