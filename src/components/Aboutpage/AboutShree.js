import React from "react";
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./About.css";
// import { BsBoxArrowDown } from "react-icons/bs";

// import { Button } from "react-bootstrap";
import Background from "../../images/bc.jpg";
import About from "../../images/abot.png";
import Credit from "../../images/1f4b3.png";
// import Defi from "../../images/1f4b8.png";
// import Meta from "../../images/MetaMask.png";
import Growth from "../../images/growth.png";
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

let AboutShree = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">ABOUT SHREE</h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-11 col-sm-10 col-xxl-11col-xl-11 mt-xxl-5 mt-xl-5 mt-md-5 mt-sm-5 mt-0 ms-0 rounded1 ms-xxl-5 ms-xl-5 ms-md-0 ms-sm-0">
              <div className="row">
                <h2 className="text-start text-white pt-5 ms-xxl-5 ms-xl-5 ms-md-0 ms-sm-5">
                  Welcome To Shree
                </h2>
                <div className="col-md-7 order-2 order-xxl-1 order-xl-1 order-md-1 order-sm-1">
                  <p className="text-start text-white coin_txt mt-0ms-xxl-5 ms-xl-5 ms-md-0 ms-sm-5 pt-2 mt-xxl-2 mt-xl-2 mt-md-2 mt-sm-2">
                    SHREE is a revolutionary blockchain platform that is built
                    for efficiency, speed, reliability and robust security that
                    runs on the PoA consensus algorithm. Unlike other blockchain
                    platforms, SHREE is cheaper and easy to use when it comes to
                    building decentralized applications. However, the best part
                    is its compatibility and portability with Ethereum’s tooling
                    and Web3 technology stack.At SHREE, we have a vision to
                    cater the demands for technology that is equally scalable as
                    well as decentralized, backed by robust security. For
                    turning this vision into reality, we constantly work closely
                    with all the stakeholders to develop an open system and
                    provide extensive support to our partners to adopt SHREE
                    technology.
                  </p>
                  <p className="text-start text-white coin_txt ms-xxl-5 ms-xl-5 ms-md-0 ms-sm-5 pt-2">
                    SHREE Foundation has been in the blockchain development
                    arena for years. With a well equipped team, having extensive
                    experience across the whole technology stack. Be it starting
                    from scratch for a consensus algorithm, or revamping your
                    existing software suit, we do it all.
                  </p>
                </div>
                <div className="col-md-5 order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-2 about_imge1">
                  <img
                    className="card-img-top4 form p-3 ms-3 mt-5  mt-md-5 mt-xxl-0 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3 mb-5"
                    src={About}
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
              <h2 className="text-white pb-4  pb-xxl-4 pb-xl-4 pb-md-4 pb-sm-4 text-center">
                Most Trusted Cryptocurrency Platform
              </h2>
              <br />
            </div>

            <div
              className="col-md-3 col-xxl-3 col-xl-3 col-sm-6 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0 md-sm-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={Credit}
                  className="credit_img mt-5 ms-3 ms-xxl-3 ms-xl-3 ms-md-3 mt-xxl-5 mt-xl-5 mt-md-5"
                />

                <Card.Body>
                  <Card.Title className="text-center">
                    Easy To Transact
                  </Card.Title>
                  <Card.Text className="mb-5 text-white mb-xxl-5 mb-xl-5 mb-md-5">
                    Buy SHREE directly from your wallet with a bank card.
                    Geographical restrictions may apply. Lorem ipsum dolor sit
                    amet, consect adipiscing elit, sed doconsect adipiscing
                    elit, sed do eiusmod temporg elit, sed do eiusmod tempor .
                  </Card.Text>
                </Card.Body>
              </div>
            </div>

            <div
              className="col-md-3 col-xxl-3 col-xl-3 col-sm-6 mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0 md-sm-0"
              style={{ backgroundColor: "#5706b0" }}
            >
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={Credit}
                  className="credit_img mt-5 ms-3 ms-xxl-3 ms-xl-3 ms-md-3 mt-xxl-5 mt-xl-5 mt-md-5"
                />

                <Card.Body>
                  <Card.Title className="text-center">
                    No Fear Of Loss
                  </Card.Title>
                  <Card.Text className="mb-5 mb-xxl-5 mb-xl-5 mb-md-5 text-white">
                    Buy SHREE directly from your wallet with a bank card.
                    Geographical restrictions may apply. Lorem ipsum dolor sit
                    amet, consect adipiscing elit, sed doconsect adipiscing
                    elit, sed do eiusmod temporg elit, sed do eiusmod tempor .
                  </Card.Text>
                </Card.Body>
              </div>
            </div>

            <div
              className="col-md-3 col-xxl-3 col-xl-3 col-sm-6 rounded1 card_wallet"
              style={{ backgroundColor: "#670ACE" }}
            >
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={Credit}
                  className="credit_img mt-5 ms-3"
                />

                <Card.Body>
                  <Card.Title className="text-center">
                    Easy To Transact
                  </Card.Title>
                  <Card.Text className="mb-5 mb-xxl-5 mb-xl-5 mb-md-5 text-white">
                    Buy SHREE directly from your wallet with a bank card.
                    Geographical restrictions may apply. Lorem ipsum dolor sit
                    amet, consect adipiscing elit, sed doconsect adipiscing
                    elit, sed do eiusmod temporg elit, sed do eiusmod tempor .
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </div>
          {/* 2nd */}
          {/* 3rd row */}
          <div className="row justify-content-center">
            <div className="col-md-12 mt-0 mt-xxl-2 mt-xl-2 mt-md-2 mt-sm-2 rounded1">
              <div className="row">
                <div className="col-md-4 col-xxl-5 col-xl-5 col-sm-5 order-2 order-xxl-1 order-xl-1 order-md-1 order-sm-1">
                  <img
                    className="card-img-top3 form p-3 ms-5 ms-xxl-5 ms-xl-5 ms-md-0 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3 mt-5 mb-5"
                    src={Growth}
                    alt="First slide"
                    width="2px"
                  />
                </div>
                <div className="col-md-8 col-xxl-6 col-xl-6 col-sm-6 order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-2">
                  <h2 className="text-start text-white pt-5">
                    SHREE is a grassroots community attracting the world's best
                    cryptocurrency researchers and engineering talent.
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
                  <p className="text-start text-white coin_txt pt-2">
                    The Monero Project is at the forefront of cryptocurrency
                    privacy and security. Its Research Lab and Development Team
                    are constantly working on new, innovative technologies.
                    Since its launch, the project has received contributions
                    from over 500 developers located all around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h2 className="text-white pb-4 text-center">
                How To Use SHREE Token
              </h2>
              <br />
            </div>

            <div
              className="col-md-6 col-xxl-6 col-xl-6 col-sm-6  mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0 md-sm-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="text-start pt-5">
                  Easy To Transact
                </Card.Title>
                <Card.Text className="text-white pb-5">
                  Buy SHREE directly from your wallet with a bank card.
                  Geographical restrictions may apply. Lorem ipsum dolor sit
                  amet, consect adipiscing elit, sed doconsect adipiscing elit,
                  sed do eiusmod temporg elit, sed do eiusmod tempor .
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-4 col-xxl-4 col-xl-4 col-sm-4 rounded1 card_wallet"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="text-start pt-5">
                  Inform Your Self
                </Card.Title>
                <Card.Text className="pb-5 text-white">
                  SHREE is a revolutionary blockchain platform that is built for
                  efficiency, speed, reliability and robust security that runs
                  on the PoA consensus algorithm. Unlike other blockchain
                  platforms, SHREE is cheaper and easy to use when it comes to
                  building decentralized applications. However, the best part is
                  its compatibility and portability with Ethereum’s tooling and
                  Web3 technology stack.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div
              className="col-md-4 col-xxl-4 col-xl-4 col-sm-4 mx-md-5 rounded1 card_wallet mb-4 mb-xxl-0 mb-xl-0 mb-md-0 md-sm-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="text-start pt-5">
                  Choose your wallet
                </Card.Title>
                <Card.Text className="text-white pb-5">
                  Free bitcoin wallets are available for all major operating
                  systems and devices to serve a variety of your needs. For
                  example, you can install an app on your mobile device for
                  everyday use or you can have a wallet only for online payments
                  on your computer. In any case, choosing a wallet is easy and
                  can be done in minutes.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-6 col-xxl-6 col-xl-6 col-sm-6 rounded1 card_wallet"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="text-start pt-5">
                  Get SHREE Token
                </Card.Title>
                <Card.Text className="pb-5 text-white">
                  SHREE is a revolutionary blockchain platform that is built for
                  efficiency, speed, reliability and robust security that runs
                  on the PoA consensus algorithm. Unlike other blockchain
                  platforms, SHREE is cheaper and easy to use when it comes to
                  building decentralized applications. However, the best part is
                  its compatibility and portability with Ethereum’s tooling and
                  Web3 technology stack.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default AboutShree;
