import React, { Component } from 'react'
import Dashbord from './components/Dashbord'
import Login from './components/login'

export default class App extends Component {
    render() {
        return (
            <div>
                <Dashbord/>
                <Login/>
            </div>
        )
    }
}
