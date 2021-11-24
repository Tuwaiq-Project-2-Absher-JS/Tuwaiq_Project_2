import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
<<<<<<< HEAD
import './App.css';
import Rigester from'./components/rigester';
import Footer from './components/footer/Footer';

=======
import './App.css'
import Login from './components/login'
>>>>>>> b0cc4514156c8d42f33dd7a69d02eed7e5b2fef2

export default class App extends Component {
    render() {
        return (
            <div className="App">
<<<<<<< HEAD
                {/* <Header/>
                <Home/> */}
                <Rigester/>
                <Footer/>

                {/* <Login/> */}
=======
                <Header/>
                <Home/>
                
               <Login/>
>>>>>>> b0cc4514156c8d42f33dd7a69d02eed7e5b2fef2
            </div>
        )
    }
}
