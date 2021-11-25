

import Dashbord from './components/Dashbord'
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Rigester from'./components/rigester';
import Footer from './components/footer/Footer';
import Login from './components/login'

export default class App extends Component {
    render() {
        return (
            <div className="App">
          <Dashbord/>
                <Rigester/>
                <Footer/>
                <Header/>
                <Home/>
                
               <Login/>

            </div>
        )
    }
}
