import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import PersonInfo from './components/PersonInfo/PersonInfo';
import Register from './components/Register/Register';
import Dashbord from './components/Dashbord/Dashbord';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Member from './components/Member/Member';
import User from './components/user/user';


ReactDOM.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />}/>
<Route path="/dashbord" element={<Dashbord />}/>
<Route path="/register" element={<Register/>} />
<Route path="/information" element={<PersonInfo/>} />
<Route path="/user" element={<User/>}/>
<Route path="/member" element={<Member/>} />



</Routes>

</BrowserRouter>,








document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
