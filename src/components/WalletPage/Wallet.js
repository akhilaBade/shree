import React from "react";
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./wallet.css";

import Background from "../../images/bc.jpg";
import Support from "../../images/support.png";
import Credit from "../../images/1f4b3.png";
import Defi from "../../images/1f4b8.png";
import Meta from "../../images/MetaMask.png";
import Dapp from "../../images/dapp.png";
import App from "../../images/app.png";

import { Card } from "react-bootstrap";

var sectionStyle = {
  width: "100%",
  height: "394px",
  BackgroundPosition: "center",
  backgroundImage: `url(${Background})`,
  Option: "0.6",
};

let Wallet = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">
            SHREE Wallet
          </h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-10 mt-5 rounded1 "
              style={{ backgroundColor: "#670ACE" }}
            >
              <div className="row">
                <div className="col-md-7">
                  <h2 className="text-start text-white pt-5 ms-1 mt-3 mt-xxl-2 mt-xl-2 mt-md-2 ms-xxl-5 ms-xl-5 ms-md-5">
                    Exclusively yours
                  </h2>

                  <p className="text-start text-white coin_txt ms-1 pt-2 ms-xxl-5 ms-xl-5 ms-md-5">
                    SHREE runs on a Proof-of-Authority mechanism which requires
                    SHREE coin to sustain the network. Validator nodes can stake
                    a minimum of 100000 SHREE coins and in return can receive
                    promising remuneration as rewards for their services.
                    Individuals holding shree can also delegate their stake to
                    help keep the shree blockchain network secure while also
                    earning rewards for doing so. Such individuals are called
                    delegators and do not need to run a node or assume
                    responsibility for consensus. They need to stake a minimum
                    of 1000 shree's to a pool of their choice and will earn
                    rewards proportionate to their stake. The annual percentage
                    rate currently is 18% .
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="card-img-top3 form p-3 ms-3 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3 mt-5 mb-5"
                    src={Support}
                    alt="First slide"
                    width="2px"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* 1st */}
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h2 className="text-white pb-4 text-center">
                Choose the wallet features you care about
              </h2>
            </div>

            <div
              className="col-md-3 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3 "
              />
              <Card.Body>
                <Card.Title>Buy crypto with a card</Card.Title>
                <Card.Text className="mb-5 text-white">
                  Buy SHREE directly from your wallet with a bank card.
                  Geographical restrictions may apply.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3  mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Img
                variant="top"
                src={Meta}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>Interactive and responsive UI</Card.Title>
                <Card.Text className="mb-5 text-white">
                  Use your Shree wallet with all its functionalities intact in
                  an interactive and responsive User Interface. A few clicks is
                  what it takes to carry out everything with almost no waiting
                  time.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3 rounded1 card_wallet "
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Defi}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>Access to DeFi</Card.Title>
                <Card.Text className="mb-5 text-white">
                  Borrow, lend and earn interest directly from your wallet.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          {/* 2nd */}
          <div className="row justify-content-center">
            <div
              className="col-md-3 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Dapp}
                className="credit_img mt-5 ms-3 "
              />
              <Card.Body>
                <Card.Title>Explore dapps</Card.Title>
                <Card.Text className="mb-5 text-white">
                  These wallets are designed to help you connect to Ethereum
                  dapps.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3  mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>Withdraw to bank</Card.Title>
                <Card.Text className="mb-5 text-white">
                  You can cash out your ETH straight to your bank account
                  without going through an exchange.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3 rounded1 card_wallet"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>Limits protection</Card.Title>
                <Card.Text className="mb-5 text-white">
                  Safeguard your assets by setting limits that prevent your
                  account being drained.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          {/* 3rd row */}
          <div className="row justify-content-center">
            <div
              className="col-md-3 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3 "
              />
              <Card.Body>
                <Card.Title>Multi-signature accounts</Card.Title>
                <Card.Text className="mb-5 text-white">
                  For extra security, multi-signature wallets require more than
                  one account to authorise certain transactions.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3  mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>Interactive and responsive UI</Card.Title>
                <Card.Text className="mb-5 text-white">
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
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
                <Card.Title>High-volume purchases</Card.Title>
                <Card.Text className="mb-5 text-white">
                  If you want to hold a lot of ETH, choose a wallet that lets
                  you buy more than $2000 ETH at a time.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div
              className="col-md-10 mt-5 rounded1"
              style={{ backgroundColor: "#670ACE" }}
            >
              <div className="row">
                <div className="col-md-5 order-2 order-xxl-1 order-xl-1 order-md-1">
                  <img
                    className="card-img-top3 form p-3 ms-5 ms-xxl-5 ms-xl-5 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3 mt-5 mb-5"
                    src={App}
                    alt="First slide"
                    width="2px"
                  />
                </div>
                <div className="col-md-6 order-1 order-xxl-2 order-xl-2 order-md-2">
                  <h2 className="text-start text-white pt-5">
                    Completely private, Fully secure
                  </h2>

                  <p className="text-start text-white coin_txt pt-2">
                    SHREE runs on a Proof-of-Authority mechanism which requires
                    SHREE coin to sustain the network. Validator nodes can stake
                    a minimum of 100000 SHREE coins and in return can receive
                    promising remuneration as rewards for their services.
                    Individuals holding shree can also delegate their stake to
                    help keep the shree blockchain network secure while also
                    earning rewards for doing so.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default Wallet;
