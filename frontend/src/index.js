import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Dashbord from './components/Dashbord';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Rigester from './components/rigester';

ReactDOM.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />}/>
<Route path="dashbord" element={<Dashbord />} />
</Routes>

</BrowserRouter>,









document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
