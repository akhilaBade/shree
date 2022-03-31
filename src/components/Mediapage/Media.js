import React from "react";
import ReactDOM from "react-dom";
import InfiniteCarousel from "react-leaf-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./media.scss";

import Background from "../../images/home.jpg";
import Support from "../../images/support.png";
import Credit from "../../images/1f4b3.png";
// import Defi from "../../images/1f4b8.png";
// import Meta from "../../images/MetaMask.png";
// import Dapp from "../../images/dapp.png";
// import App from "../../images/app.png";

import { Card } from "react-bootstrap";

var sectionStyle = {
  width: "100%",
  height: "394px",
  BackgroundPosition: "center",
  backgroundImage: `url(${Background})`,
  Option: "0.6",
};

let Media = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">
            MEDIA CONTENT PRESS & RELEASE
          </h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row justify-content-center"></div>

          {/* 1st */}
          {/* 2nd */}
          {/* 3rd row */}
          <div className="row justify-content-center">
            <h3 className="text-white text-center mb-5 mt-5">Shree Partners</h3>
            <div
              className="col-md-3 rounded1 card_wallet "
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Text className="mb-5 text-white mt-5">
                  For extra security, multi-signature wallets require more than
                  one account to authorise certain transactions.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3  mx-md-5 rounded1 card_wallet"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Body>
                <Card.Text className="mb-5 text-white mt-5">
                  Use your Shree wallet with all its functionalities intact in
                  an interactive and responsive User Interface. A few clicks is
                  what it takes to carry out everything with almost no waiting
                  time.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3 rounded1 card_wallet"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Text className="mb-5 text-white mt-5">
                  If you want to hold a lot of ETH, choose a wallet that lets
                  you buy more than $2000 ETH at a time.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          <br />
          {/* <div className="row justify-content-center media">
            <div className="col-md-12 rounded1">
              <div class="slider">
                <div class="slide-track">
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <br />
          <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default Media;
