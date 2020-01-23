import React from "react";
import { Switch, Route } from "react-router-dom";

import Beranda from "./Beranda";
import TentangKami from "./TentangKami";
import Bantuan from "./Bantuan";
import Kerjasama from "./Kerjasama";
import Kontak from "./Kontak";

const Alur = () => (
  <Switch>
    <Route exact path='/' component={Beranda} />
    <Route path='/beranda' component={Beranda} />
    <Route path='/tentang' component={TentangKami} />
    <Route path='/bantuan' component={Bantuan} />
    <Route path='/kerjasama' component={Kerjasama} />
    <Route path='/kontak' component={Kontak} />
  </Switch>
);

export default Alur;
