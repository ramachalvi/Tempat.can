import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Alur from "./Components/Alur";
import "./Assets/style.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Alur />
        </div>
      </BrowserRouter>
    );
  }
}
