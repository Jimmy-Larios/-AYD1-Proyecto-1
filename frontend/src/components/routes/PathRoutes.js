import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from '../example/Example';
import Form from '../example/Form';

const RoutesPath = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={'/'} element={<Example />} />
				<Route exact path={'/RegisterUser'} element={<Form />} />
			</Routes>
		</BrowserRouter>
		
	);
};

export default RoutesPath;