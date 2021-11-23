<<<<<<< HEAD
import React, { Component } from 'react'
import Dashbord from './components/Dashbord'
=======
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css'
>>>>>>> 391c4ffa81e187597839b630e7838aa78100ec75
import Login from './components/login'

export default class App extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                <Dashbord/>
                <Login/>
=======
            <div className="App">
                <Header/>
                <Home/>
                
               <Login/>
>>>>>>> 391c4ffa81e187597839b630e7838aa78100ec75
            </div>
        )
    }
}
