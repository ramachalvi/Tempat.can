import React from "react";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navigasi";
import Header from "./Components/HeaderBeranda";

export class Beranda extends Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <div className='wrapper'>
          <Header />
        </div>
      </React.Fragment>
    );
  }
}

export default Beranda;
