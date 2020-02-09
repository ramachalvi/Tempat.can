import React, { Component, Fragment } from "react";
import {
  Button,
  Container,
  Col,
  CardBody,
  Card,
  CardTitle,
  Row
} from "reactstrap";

export class HeaderBeranda extends Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../../Assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../Assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../../Assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../../Assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../../Assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../../Assets/img/cercuri.png")}
            />

            <div className="content-center brand">
              <Row className="align-items-center text-center">
                <Container>
                  <h1 className="h1-seo text-white">
                    Minjem  <br /> dibuat  <br />
                    <span className="text-white">gampang</span>
                  </h1>

                  <p className="text-white mb-3">
                    Pertama di Indonesia, kami menyediakan aplikasi ini
                    supaya peminjaman tempat acara mudah, aman, praktis, tanpa basa-basi!
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Kuy minjem!
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                </Container>
                {/* <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../Assets/img/etherum.png")}
                  />
                </Col> */}
              </Row>
            </div>
          </div>

          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("../../Assets/img/path4.png")}
              />
            </section>
          </section>

          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("../../Assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../Assets/img/path5.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Fitur menarik dari kami~</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Negosiasi Harga</h4>
                        <hr className="line-primary" />
                        <p>
                          Harga terlalu tinggi? Tidak masalah, anda dapat nego
                          harga langsung dengan penyedia, baik tempat, maupun
                          dekorasi, dan lain-lain.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">Ratings</h4>
                        <hr className="line-warning" />
                        <p>
                          Dengan sistem nilai terverifikasi kami,
                          penyedia tempat dan lainnya memiliki rating!
                          Sehingga ada dapat pilih penyedia yang anda suka.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Akurat & Terpercaya</h4>
                        <hr className="line-success" />
                        <p>
                          Semua sistem kami dijamin memberikan
                          data yang akurat, dan terpercaya. Kami pula membuka bantuan
                          24/7!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("../../Assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../Assets/img/halo.jpeg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Aman</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">
                            Akurat
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Terkendali</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Ayo mulai pesan!</h3>
                    <p>
                      Anda dapat memesan tempat umum yang anda inginkan 'tuk
                      acara anda. Semua itu hanya dengan beberapa klik saja!
                      Sistem keamanan kami selalu siaga demi menciptakan transaksi
                      yang aman, dan terawas dengan baik.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Sistem yang fleksibel nan aman</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Pesan dengan beberapa klik</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Bantuan buka 24/7</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*  */}
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Fragment>
    );
  }
}

export default HeaderBeranda;
