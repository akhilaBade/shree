import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./community.css";
import { BsBoxArrowDown } from "react-icons/bs";

import { Button } from "react-bootstrap";
import Background from "../../images/home.jpg";
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

let Community = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">COMMUNITY</h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mt-5 rounded1 ">
              {" "}
              <h1 className="text-center text-white">Workgroups</h1>
            </div>
            <div
              className="col-md-10 mt-5 rounded1 "
              //   style={{ backgroundColor: "#670ACE" }}
            >
              <div className="row">
                <div className="col-md-7">
                  <h2 className="text-start text-white pt-0 pt-xxl-5 pt-xl-5 pt-md-5 mt-0 mt-xxl-5 mt-xl-5 mt-md-5">
                    Workgroups
                  </h2>

                  <p className="text-start text-white coin_txt pt-0 pt-xxl-2 pt-xl-2 pt-md-2">
                    Workgroups are formed by community members who join forces
                    to achieve a common goal. They have different structures and
                    goals. On this page we list some of the more active
                    workgroups and some tips to get you started, if you wish to
                    contribute to any of them. The best way to start
                    contributing to this workgroup is to join the chatrooms and
                    introduce yourself, stating your interests and the skills
                    you would like to offer to the community.
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
            {/* <div className="col-md-12">
              <h2 className="text-white pb-4 text-center">
                Choose the wallet features you care about
              </h2>
            </div> */}

            <div
              className="col-md-5  mx-md-4 rounded1 card_wallet mb-3 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="mt-5 text-center">
                  {" "}
                  <h3 className="text-white">Core Team</h3>
                </Card.Title>
                <Card.Text className="mb-3 text-white mt-3">
                  <h4 className="text-white">Description</h4>
                  As stewards of the project, the Core Team manages and
                  maintains infrastructure where centralization cannot be
                  avoided (domains, website, github repositories...). Its
                  members act as mediators as they see fit and aim to weigh
                  consensus in the community, perpetuating the quality
                  interactions that made Monero the successful project it is
                  today. The Core Team does not and has never received any
                  financial compensation.
                </Card.Text>
                <Card.Text className="mb-5 text-white mt-3">
                  <h4 className="text-white">Where to start</h4>
                  The Core Team is a closed workgroup; it's not possible to join
                  unless invited.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-5 rounded1 card_wallet mb-3 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Body>
                <Card.Title className="mt-5 text-center">
                  {" "}
                  <h3 className="text-white">Website Workgroup</h3>
                </Card.Title>
                <Card.Text className="mb-3 text-white mt-3">
                  <h4 className="text-white">Description</h4>
                  This dev-focused workgroup coordinates the development of the
                  website. Most members are also part of the Development
                  Workgroup. The Website Workgroup was mostly created to have
                  discussions related to the website all in one place.
                </Card.Text>
                <Card.Text className="mb-5 text-white mt-3">
                  <h4 className="text-white">Where to start</h4>
                  The Core Team is a closed workgroup; it's not possible to join
                  unless invited.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          {/* 2nd */}
          <div className="row justify-content-center">
            <div
              className="col-md-10 rounded1 card_wallet"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Body>
                <Card.Title className="mt-5 text-center">
                  {" "}
                  <h3 className="text-white">Community Workgroup</h3>
                </Card.Title>
                <Card.Text className="mb-3 text-white mt-4">
                  <h4 className="text-white text-center">Description</h4>
                  <p className="text-center">
                    This workgroup is used by the community to organize and
                    coordinate. Start here if you are a non-coder who wants to
                    contribute to Monero.
                  </p>
                </Card.Text>
                <Card.Text className="mb-5 text-white mt-3 text-center">
                  <h4 className="text-white">Where to start</h4>
                  The best way to start contributing to this workgroup is to
                  join the chatrooms and introduce yourself, stating your
                  interests and the skills you would like to offer to the
                  community.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          {/* 3rd row */}
          <div className="row justify-content-center">
            <h3 className="text-white text-center mb-5 mt-5">Sponsorships</h3>
            <div
              className="col-md-3 rounded1 card_wallet mb-3 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#670ACE" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3 "
              />
              <Card.Body>
                <Card.Text className="mb-5 text-white">
                  For extra security, multi-signature wallets require more than
                  one account to authorise certain transactions.
                </Card.Text>
              </Card.Body>
            </div>

            <div
              className="col-md-3  mx-md-5 rounded1 card_wallet mb-3 mb-xxl-0 mb-xl-0 mb-md-0"
              style={{ backgroundColor: "#5706b0" }}
            >
              <Card.Img
                variant="top"
                src={Credit}
                className="credit_img mt-5 ms-3"
              />
              <Card.Body>
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
                <Card.Text className="mb-5 text-white">
                  If you want to hold a lot of ETH, choose a wallet that lets
                  you buy more than $2000 ETH at a time.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <br />
          <br /> <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default Community;
