import React from "react";
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Coin.css";
import Background from "../../images/bc.jpg";
import sample from "../../images/sustain.png";
import wallet from "../../images/wallet.png";
import Exchange from "../../images/exchange.png";
import Money from "../../images/cd.png";

var sectionStyle = {
  width: "100%",
  height: "394px",
  BackgroundPosition: "center",
  backgroundImage: `url(${Background})`,
  Option: "0.6",
};

let ShreeCoin = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">
            What is SHREE coin?
          </h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container m-auto">
          <br />
          <br />
          <div
            className="row m-auto pt-5 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 section_abt coin_border"
            style={{ backgroundColor: "#670ACE" }}
          >
            <div className="col-md-10" style={{ backgroundColor: "#670ACE" }}>
              <div className="row justify-content-center">
                <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ms-2 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-2">
                  <h2 className="text-start text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5  mt-5 ">
                    To sustain a secure network
                  </h2>

                  <p className="text-start text-white coin_txt">
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
                    rate currently is 18%.
                  </p>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1  pt-xxl-5 pt-xl-5  mt-5 pt-md-5 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2">
                  <img
                    className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                    src={wallet}
                    alt="First slide"
                    width="2px"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1  pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2 ms-2 ms-xxl-3 ms-xl-3 ms-md-3 ms-sm-2">
                  <img
                    className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-3 ms-md-3 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                    src={sample}
                    alt="First slide"
                    width="2px"
                  />
                </div>

                <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ">
                  <h2 className="text-start text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5 ">
                    Choose a Wallet
                  </h2>
                  <p className="text-start text-white">
                    To use Monero, the first thing you are going to need is a
                    wallet. Visit our Downloads page and get the right wallet
                    for you. The Monero wallets are available for a variety of
                    platforms and contain everything you need to use Monero
                    immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd */}

            {/* 3rd */}
            <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ms-2 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-2">
              <h2 className="text-start text-white pt-1 pt-xxl-2 pt-xl-2 pt-md-2 pt-sm-5 ">
                Get Some Coins
              </h2>
              <p className="text-start text-white">
                After you install a wallet, you need to get some Monero. There
                are multiple ways to acquire some coins to spend, like mining or
                working in exchange for Monero, but the easiest way is to use an
                exchange and convert your fiat money into XMR. Many exchanges,
                centralized and decentralized, list Monero (XMR).
              </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1  pt-xxl-5 pt-xl-5  pt-md-5 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2">
              <img
                className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-3 ms-md-3 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                src={Exchange}
                alt="First slide"
                width="2px"
              />
            </div>

            {/* 4th */}

            <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1  pt-xxl-1 pt-xl-1 pt-md-3 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2 ms-2 ms-xxl-3 ms-xl-3 ms-md-3 ms-sm-2">
              <img
                className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-3 ms-md-3 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                src={Money}
                alt="First slide"
                width="2px"
              />
            </div>

            <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ">
              <h2 className="text-start text-white pt-1 pt-xxl-1 pt-xl-1 pt-md-1 pt-sm-1 ">
                It's a Currency: Use It!
              </h2>
              <p className="text-start text-white">
                Monero is a currency and can be exchanged for goods, services
                and other currencies, privately and with very low fees. Many
                entities will gladly accept XMR for payments; take a look at our
                'Merchants' page.
              </p>
            </div>
          </div>
          <br />
          <br />
          <section>
            <div
              className="row m-auto pt-5 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 section_abt coin_border"
              style={{ backgroundColor: "#670ACE" }}
            >
              <div className="col-md-6 col-xxl-6 col-xl-6 col-sm-6 col-12  pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ">
                <h2 className="text-center text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5  mt-5 ">
                  Find Answers to Your Questions
                </h2>

                <p className="text-center text-white ms-3">
                  We've heard a lot of questions over the years and have
                  compiled a thorough and varied FAQ. Don't worry, if your
                  questions are not in there, you can always ask the community.
                </p>
              </div>
              <div className="col-md-5 offset-md-2  col-xxl-5 col-xl-5 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ">
                <h2 className="text-center text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5  mt-5 ">
                  Paying network fees
                </h2>

                <p className="text-center text-white ms-3">
                  SHREE coin is used to pay for general network fees such as
                  transaction fees to access and support network operations.
                </p>
              </div>
            </div>
          </section>

          <br />
          <br />
          <div
            className="row m-auto pt-5 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 section_abt coin_border"
            style={{ backgroundColor: "#670ACE" }}
          >
            <div className="col-md-12">
              <h1 className="text-center text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5  mt-5 ">
                Join Community
              </h1>
            </div>
            <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ms-2 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-2">
              <h2 className="text-start text-white pt-1 pt-xxl-3 pt-xl-3 pt-md-3 pt-sm-5  mt-5 ">
                We Need Your Skills: Contribute!
              </h2>

              <p className="text-start text-white coin_txt">
                Monero is not simply a currency, it's a decentralized community
                and exists only thanks to the hundreds of volunteers that
                dedicate their time to the project. Join us!
              </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1  pt-xxl-5 pt-xl-5  mt-5 pt-md-5 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2">
              <img
                className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                src={wallet}
                alt="First slide"
                width="2px"
              />
            </div>
            {/* 2nd */}
            <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-5 pt-1   mt-0 pt-md-3 pt-sm-5 mt-0 order-2 order-xxl-2 order-xl-1 order-md-1 order-sm-2 ms-2 ms-xxl-3 ms-xl-3 ms-md-3 ms-sm-2">
              <img
                className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-3 ms-md-3 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                src={Money}
                alt="First slide"
                width="2px"
              />
            </div>

            <div className="col-md-7 col-xxl-7 col-xl-7 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-1 ">
              <h2 className="text-start text-white pt-1 pt-xxl-1 pt-xl-1 pt-md-1 pt-sm-1  mt-0">
                It's a Currency: Use It!
              </h2>
              <p className="text-start text-white">
                Monero is a currency and can be exchanged for goods, services
                and other currencies, privately and with very low fees. Many
                entities will gladly accept XMR for payments; take a look at our
                'Merchants' page.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default ShreeCoin;
