import React, { Component } from "react";

import Navbar from "./Components/Navigasi";
import Header from "./Components/HeaderBeranda";

export default class Beranda extends Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
      <div>
          <Navbar />
        <div className='wrapper'>
          <Header />
        </div>
      </div>
    );
  }
}