import React from 'react';
import ReactDOM from 'react-dom';
import './Layouts/index.css';
import App from './Components/App';
import {BrowserRouter as Router} from 'react-router-dom'; 

ReactDOM.render( <Router> <App/> </Router>, document.getElementById('root'));