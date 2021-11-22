import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Home/>
                {/* <Login/> */}
            </div>
        )
    }
}
