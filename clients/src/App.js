import React, { Component } from "react";
import Alur from "./Components/Alur";
import Header from "./Components/HeaderBeranda";

import "./assets/css/nucleo-icons.css";
import "./assets/css/style.css";
import "./assets/demo/demo.css";

export class App extends Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Alur />
          <Header />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
