import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Assets/style.css";

export class Navbar extends Component {
  render() {
    return (
      <div id='header'>
        <div className='container'>
          <div id='logo' className='pull-left'>
            <h1>
              Tempat<span>.can</span>
            </h1>
          </div>

          <nav id='nav-menu-container'>
            <ul className='nav-menu'>
              <Link to='/beranda'>Beranda</Link>
              <Link to='/tentang'>Tentang</Link>
              <Link to='/bantuan'>Bantuan</Link>
              <Link to='/kerjasama'>Kerjasama</Link>
              <Link to='/kontak'>Kontak</Link>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
