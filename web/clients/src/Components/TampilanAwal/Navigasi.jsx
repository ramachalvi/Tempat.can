import React from "react";
import { Link } from "react-router-dom";

import {
  NavItem,
  Collapse,
  DropdownToggle,
  DropdownItem,
  Navbar,
  UncontrolledDropdown,
  DropdownMenu,
  Nav,
  NavbarBrand,
  Row,
  NavLink,
  Col,
  Container,
  Button
} from "reactstrap";

export default class Navigasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  /** fungsi mount component */
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              href="/"
              rel="noopener noreferrer"
              title="Dipersembahkan oleh Tim HRD"
              tag={Link}
            >
              <span>Tempat.can</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="/" onClick={e => e.preventDefault()}>
                    Tempat-Can
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Beranda</NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Lainnya
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag={Link} to="/tentang">
                    <i className="tim-icons icon-paper" />
                    Tentang
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/bantuan">
                    <i className="tim-icons icon-bullet-list-67" />
                    Bantuan
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/kerjasama">
                    <i className="tim-icons icon-image-02" />
                    Kerjasama
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/kontak">
                    <i className="tim-icons icon-single-02" />
                    Kontak
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button tag={Link} to="/pinjam" className="nav-link d-none d-lg-block" color="default">
                  <i className="tim-icons icon-calendar-60" /> Pinjam!
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
