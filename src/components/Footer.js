import React from "react";
// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
import { Stack } from "react-bootstrap";
// import Iocns from "../images/icon1.png";
// import Mobile from "../images/mobile.png";
import "animate.css/animate.css";
import logo from "./../logo.png";
import FooterBg from "../images/footer.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaTelegramPlane,
  FaAngleRight,
} from "react-icons/fa";

var sectionFooter = {
  width: "100%",
  height: "430px",
  BackgroundPosition: "center",
  backgroundImage: `url(${FooterBg})`,
  // Option: "0.2",
  position: "relative",
  // top:"-2em",
};

let Footer = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#7900ff" }}>
        <section className="pt-5 footer_bg" style={sectionFooter}>
          <div className="about_innr ms-3 pt-5">
            {/* <h2 className="text-start text-white mt-2 pb-3 ms-3">HOW IT WORKS</h2> */}
            <div class="container">
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div className="col-md-12">
                    <img
                      alt=""
                      src={logo}
                      width="70"
                      height="45"
                      className="d-inline-block align-top"
                    />{" "}
                    <span className="company_name fs-3 text-white">SHREE </span>
                  </div>
                  <div className="col-md-12 pt-3">
                    <p className="text-start text-white">
                      A white paper is an authoritative report or guide that
                      informs readers concisely about a complex issue and
                      presents the issuing body’s philosophy on the matter.
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-2">
                  <div className="col-md-12">
                    <h3 className="fs-4 text-white"> Company</h3>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white pt-4">
                      <FaAngleRight className="" /> Home
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      <FaAngleRight /> About Us
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      {" "}
                      <FaAngleRight /> White paper
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      {" "}
                      <FaAngleRight /> Shree Tool
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="col-md-12">
                    <h3 className="fs-4 text-white"> Information</h3>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white pt-4">
                      {" "}
                      <FaAngleRight /> Support & Privacy
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      {" "}
                      <FaAngleRight /> Terms & Conditions
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      {" "}
                      <FaAngleRight /> Community
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      {" "}
                      <FaAngleRight /> Meida & Press Relase
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="col-md-12">
                    <h3 className="fs-4 text-white"> Shree Tool</h3>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white pt-4">
                      {" "}
                      <FaAngleRight /> Wallet
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      <FaAngleRight /> Explore
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      <FaAngleRight /> Documentation
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="text-start text-white">
                      <FaAngleRight /> TestNet
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="social_part pt-3"></div>
                </div>

                <div className="col-md-8">
                  <p className="text-start text-white pt-4">
                    Copyright 2022 SHREE. All rights reserved.
                  </p>
                </div>
                <div className="col-md-4">
                  <Stack direction="horizontal" gap={3} className="mt-3">
                    <div className="bg-shree-transparent text-white fs-5 insta text-center p-2 pt-1">
                      <FaInstagram />
                    </div>
                    <div className="bg-shree-transparent text-white fs-6 insta text-center p-2 pt-2">
                      <FaFacebookF />
                    </div>
                    <div className="bg-shree-transparent text-white fs-6 insta text-center p-2 pt-2">
                      <FaTwitter />
                    </div>
                    <div className="bg-shree-transparent text-white fs-6 insta text-center p-2 pt-2">
                      <FaLinkedinIn />
                    </div>
                    <div className="bg-shree-transparent text-white fs-6 insta text-center p-2 pt-2">
                      <FaMediumM />
                    </div>
                    <div className="bg-shree-transparent text-white fs-6 insta text-center p-2 pt-2">
                      <FaTelegramPlane />
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Footer;
