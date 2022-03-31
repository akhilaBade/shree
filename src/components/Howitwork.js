import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInfinity } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../App.css";
import GlobeAbout from "../images/wave.png";
import Iocns from "../images/icon1.png";
import "animate.css/animate.css";
// import GlobeAbt from "../images/globe12.gif";

var sectionGlobe = {
  width: "100%",
  height: "770px",
  BackgroundPosition: "center",
  backgroundImage: `url(${GlobeAbout})`,
  Option: "0.8",
  position: "relative",
  top: "-2em",
};

let Howitwork = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#7900ff" }} className="how_bg">
        {/* <video id="video" autoPlay loop muted>
          <source src={GlobeAbt} type="video/mp4" />
        </video> */}
        <section
          className="pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 abt_bg"
          // style={sectionGlobe}
        >
          <Container>
            <div className="about_innr ms-0 pt-5 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 bg_how1 xx">
              <h2
                className="text-start text-white mt-3 pb-3 mb-4 ms-3"
                style={{ zIndex: "3" }}
              >
                HOW IT WORKS
              </h2>
              <div class="container">
                <div class="row abt_sec">
                  <div class="col-md-5 col-xxl-5 col-xl-5 col-sm-5 col-12 ">
                    <div class="col-md-12 col-xxl-12 col-xl-12 col-sm-12 col-12">
                      <div
                        class="how_card mb-3 mb-xxl-0 mb-xl-0 mb-md-0 mb-sm-0 card1"
                        style={
                          {
                            // backgroundImage: `linear-gradient(to bottom, #06102D, #11475C)`,
                            // border: "none",
                          }
                        }
                      >
                        <p className="icon_card text-end p-4  p-xxl-4 p-xl-4 p-md-2 p-sm-4 fs-1 p-xxl-3 p-xl-3 p-md-3 p-sm-3">
                          {" "}
                          <FaInfinity />{" "}
                        </p>
                        <div className="p-2 p-xxl-4 p-xl-3 p-md-3 p-sm-5">
                          <img
                            className="card-img-top icon1 pt-3  pt-xxl-5 pt-xl-5 pt-md-5 ms-3 ms-xxl-5 ms-xl-5 ms-md-5 ms-sm-5 "
                            src={Iocns}
                            alt="First slide"
                          />

                          <div class="card-body ms-3 ms-xxl-5 ms-xl-5 ms-md-5 ms-sm-5">
                            <h5 class="card-title fw-bold pb-4 pb-xxl-5 pb-xl-5 pb-md-5 fs-2 mt-md-4 mt-0 mt-xxl-0 mt-xl-0 mt-sm-0 title_how">
                              One secure account for all your digital assets.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-xxl-7 col-xl-7 col-sm-7 col-12">
                    <div class="row">
                      <div class="col-md-6 col-xxl-6 col-xl-6 col-sm-6 col-12">
                        <div class="card-body how_card mb-3 mb-xxl-0 mb-xl-0 mb-md-0 mb-sm-0 card2">
                          <p className="icon_card text-end p-2 fs-1 p-xxl-0 p-xl-0 p-md-2 p-sm-2">
                            {" "}
                            +{" "}
                          </p>
                          <h5 class="card-title fw-bold pb-5 fs-2 pb-xxl-4 pb-xl-5 pb-md-5 pb-sm-5 ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0">
                            Safe Contracts
                          </h5>

                          <p className="comng_sn ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card-body how_card mb-3 mb-xxl-0 mb-xl-0 mb-md-0 mb-sm-0 card3">
                          <p className="icon_card text-end p-2 fs-1 p-xxl-0 p-xl-0 p-md-0 p-sm-2">
                            {" "}
                            +{" "}
                          </p>
                          <h5 class="card-title fw-bold pb-5 fs-2 ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 pb-xxl-4 pb-xl-5 pb-md-5 pb-sm-5">
                            Fast Blockchain
                          </h5>

                          <p className="comng_sn ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12 col-xxl-12 col-xl-12 col-sm-12 col-12">
                        <div class="how_card how_card mb-3 mb-xxl-0 mb-xl-0 mb-md-0 mb-sm-0 card3">
                          <p className="icon_card text-end p-4 fs-1 p-xxl-3 p-xl-2 p-md-4 p-sm-4">
                            {" "}
                            +{" "}
                          </p>

                          <span class="fw-bold  card-title p-3 fs-2 ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 p-xxl-3 p-xl-3 p-md-3 p-sm-3">
                            Lowest Cost
                          </span>

                          <img
                            className="card-img-top1 icon1 pt-5 ms-5 mb-4 pb-xxl-1 pt-xxl-0 pt-xl-0  mt-1 mt-xxl-o mt-xl-0 mt-md-0 mt-sm-0  pt-md-0 pt-sm-0 ms-xxl-5 ms-xl-5 ms-md-5 ms-sm-5 mb-xxl-4 mb-xl-4 mb-md-4 mb-sm-4"
                            src={Iocns}
                            alt="First slide"
                          />
                          <p className="comng_sn p-3 pb-5 ms-3 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 p-xxl-3 p-xl-3 p-md-3 p-sm-3 pb-xxl-4 pb-xl-2 pb-md-4 pb-sm-4">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  {/* <div class="card how_card" width="15rem" style={{ backgroundImage: `linear-gradient(to bottom, #06102D, #11475C)`,border: 'none' }}             >
                        <span className="text-white plus text-end">+</span>
                        <img
                            className="card-img-top pt-5 ms-5"
                            src={Iocns}
                            alt="First slide" width="2px"
                        
                            />
                                      
                            <div class="card-body ms-5">
                                <h5 class="card-title fw-bold text-white pb-5">One secure account 
                                    for all your digital assets.</h5>
                               
                            </div>
                        </div> */}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Howitwork;
