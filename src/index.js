import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <CssBaseline />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
