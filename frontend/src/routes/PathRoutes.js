import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../components/Login';




const RoutesPath = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
				
					<Route exact path={'/login'} element={<Login/>}/>

			
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RoutesPath;