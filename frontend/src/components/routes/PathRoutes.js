import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from '../example/Example';

const RoutesPath = () => {
	return (
		<div style={{backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white'}} >
			<BrowserRouter>
				<Routes>
					<Route exact path={'/'} element={<Example />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RoutesPath;