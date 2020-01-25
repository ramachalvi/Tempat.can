import React, { Component } from "react";
import { Container } from "reactstrap";

export class HeaderBeranda extends Component {
  render() {
    return (
      <div className='page-header header-filter'>
        <div className='squares square3' />
        <div className='squares square4' />
        <div className='squares square5' />
        <div className='squares square6' />
        <div className='squares square7' />
        <div className='squares square8' />
        <Container>
          <div className='content-center brand'>
            <h1 className='h1-seo'>Tempat-can</h1>
            <h3 className='d-none d-sm-block'>
              Membantu proses peminjaman, dan penyediaan tempat untuk acara
              anda.
            </h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default HeaderBeranda;
