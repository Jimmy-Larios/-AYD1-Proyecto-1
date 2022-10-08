import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormRegisterUser from '../components/FormRegisterUser';
import Login from '../components/Login';
import FormRegisterTertiaryService from '../components/FormRegisterTertiaryService'
const RoutesPath = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path={'/sigup'}  element={<FormRegisterUser/>}/>
					<Route exact path={'/login'} element={<Login/>}/>
					<Route exact path={'/registerService'} element={<FormRegisterTertiaryService/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default RoutesPath;