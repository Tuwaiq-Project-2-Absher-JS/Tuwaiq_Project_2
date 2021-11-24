import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import PersonInfo from "./components/PersonInfo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <PersonInfo/>
         
        {/* <Login /> */}
      </div>
    );
  }
}
