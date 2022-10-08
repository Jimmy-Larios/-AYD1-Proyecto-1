import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/forms.css';
import reportWebVitals from './reportWebVitals';
import RoutesPath from './routes/PathRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesPath />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
