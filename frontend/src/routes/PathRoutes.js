import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormRegisterUser from '../components/FormRegisterUser';

const RoutesPath = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path={'/sigup'}  element={<FormRegisterUser/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RoutesPath;