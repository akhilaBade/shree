import { Component } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Header from "./components/Header";
// import Inform from "./components/Inform";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ShreeCoin from "./components/ShreecoinPage/ShreeCoin";
import Howitwork from "./components/Howitwork";
import Wallet from "./components/WalletPage/Wallet";
import AboutShree from "./components/Aboutpage/AboutShree";
// import RoadMap from "./components/RoadmapPage/RoadMap";
import RoadMap from "./components/RoadmapPage/RoadMap";
import Community from "./components/CommunityPage/Community";
import Media from "./components/Mediapage/Media";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/ShreeCoin" component={ShreeCoin} />
            <Route path="/About" component={AboutShree} />
            <Route path="/Howitwork" component={Howitwork} />
            <Route path="/Wallet" component={Wallet} />
            <Route path="/Road" component={RoadMap} />
            <Route path="/Community" component={Community} />
            <Route path="/Media" component={Media} />

            {/* <Route path="https://shreescan.com/" component={Explore} /> */}
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
{
  /* <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Link to="/">
    <img src="arcs logo 1.png" alt="Logo" className="logo" /> 
  </Link>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse>
    <ReactBootstrap.Nav className="ml-auto">
      <Link to="/ShreeCoin" className="nav-link text-muted">
        Technology
      </Link>
      <Link to="/ShreeCoin" className="nav-link">
        Shree Tool
      </Link>
      <Link to="/ecosystem" className="nav-link">
        Ecosystem
      </Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>; */
}
