import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
// import Header from "./Header";
import About from "./About";
import Appdownload from "./Appdownload";
import Howitwork from "./Howitwork";
import Main from "./Main";
import Whitepaper from "./Whitepaper";

class Home extends Component {
  render() {
    return (
      <div>
        <Main />
        <About />
        <Howitwork />
        <Whitepaper />
        <Appdownload />
      </div>
    );
  }
}
export default Home;
