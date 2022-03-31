import React from "react";
import Container from "react-bootstrap/Container";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ShreecoinPage/ShreeCoin.js";
import logo from "./../logo.png";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "amir") {
          this.setState({ status: "amir" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          style={{
            backgroundColor:
              this.state.status === "top" ? "#8843F2" : "#670ACE",
            color: this.state.status === "top" ? "#670ACE" : "#670ACE",
            position: "fixed",
          }}
          collapseOnSelect
          expand="lg"
          bg="#670ACE"
          variant="dark"
          fixed="top"
          className="hdr"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="nav-link">
                <img
                  alt=""
                  src={logo}
                  width="70"
                  height="45"
                  className="d-inline-block align-top"
                />
                <span className="company_name fs-3">SHREE </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav justify-content-center navbarScroll">
              <Nav
                className="mx-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className="menus">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Technology"
                  id="basic-nav-dropdown"
                  className="menus"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Intro To Shree
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/About">
                    Stake On Shree
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/ShreeCoin" className="nav-link dropdown-item">
                      Shree Coin
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    The Consensus
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Shree Tool"
                  id="basic-nav-dropdown"
                  className="menus"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      Wallet
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <a
                      target="_blank"
                      href="https://shreescan.com"
                      className="nav-link dropdown-item"
                    >
                      {" "}
                      Explore
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <a
                      target="_blank"
                      href="https://docs.shreescan.com/"
                      className="nav-link dropdown-item"
                    >
                      Documentation
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <a
                      target="_blank"
                      href="https://docs.shreescan.com/"
                      className="nav-link dropdown-item"
                    >
                      TestNet
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <a
                      target="_blank"
                      href="https://shreescan.com/"
                      className="nav-link dropdown-item"
                    >
                      MainNet
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Ecosystem"
                  id="basic-nav-dropdown"
                  className="menus"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/About" className="nav-link dropdown-item">
                      About Us
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/Media" className="nav-link dropdown-item">
                      Media & Press Relase
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link to="/Road" className="nav-link dropdown-item">
                      Roadmap
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <Link to="/Community" className="nav-link dropdown-item">
                      Community
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfQrIRo-wNP4pgf_R1WEzo4VBwFdcWJiQCjEwZ_q7W-mHZzig/viewform"
                      className="nav-link dropdown-item"
                    >
                      Submit DApps
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Developer"
                  id="basic-nav-dropdown"
                  className="menus"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <a
                      target="_blank"
                      href="https://shree.live/whitepaper.pdf"
                      className="nav-link dropdown-item"
                    >
                      Whitepaper
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      Dev Documents
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <a
                      target="_blank"
                      href="https://docs.shreescan.com/fullnode.html"
                      className="nav-link dropdown-item"
                    >
                      Node Setup Process
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      Dev Forum
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Legal"
                  id="basic-nav-dropdown"
                  className="menus"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      Terms Of Use
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      KYC & AML Policy
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link to="/Wallet" className="nav-link dropdown-item">
                      Privacy Policy
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <Button
                    type="submit"
                    className="btn-dark-white rounded white-hm "
                    size="lg"
                  >
                    {" "}
                    <span className="fs-6">SHREE MERCHANT</span>
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
