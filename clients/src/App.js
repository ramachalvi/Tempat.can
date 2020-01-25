import React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Beranda from "./Beranda";
import Tentang from "./Components/Tentang";

import "./assets/css/nucleo-icons.css";
import "./assets/css/style.css";
import "./assets/demo/demo.css";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={props => <Beranda {...props} />} />
            <Route path='/tentang' render={props => <Tentang {...props} />} />
          </Switch>
          <Redirect from='/' to='/beranda' />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
