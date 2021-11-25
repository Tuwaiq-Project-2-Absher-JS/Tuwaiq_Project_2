import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Rigester from'./components/rigester';
import Footer from './components/footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="App">

                <Header/>
                <Home/>
                <Footer/>
                {/* <Rigester/> */}
                
               {/* <Login/> */}
            </div>
        )
    }
}
