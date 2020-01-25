import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navigasi";

export class Alur extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' render={props => <Navbar {...props} />} />
          <Route path='/' render={props => <Navbar {...props} />} />
          <Route path='/' render={props => <Navbar {...props} />} />
          <Route path='/' render={props => <Navbar {...props} />} />
          {/* <Redirect from='/' to='/components' /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Alur;
