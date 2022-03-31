import React from "react";
// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsBoxArrowDown } from "react-icons/bs";
import "../App.css";
import "./appdownload.css";
import { Card } from "react-bootstrap";
import Icon from "../images/ico-img.png";

import { Stack, Button } from "react-bootstrap";
// import Iocns from "../images/icon1.png";
import Mobile from "../images/mobile.png";
import "animate.css/animate.css";
import logo from "./../logo.png";

let Appdownload = () => {
  return (
    <React.Fragment>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-sm-10 col-xxl-12 col-xl-12 mt-xxl-5 mt-xl-5 mt-md-5 mt-sm-5 mt-0 ms-0 rounded1 ms-xxl-2 ms-xl-2 ms-md-0 ms-sm-0">
              <div className="row">
                <h6 className="text-start pt-5 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 small_hd">
                  SHREE PAY
                </h6>
                <h2 className="text-start text-white ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 mt-xxl-1 mt-xl-1 mt-md-1">
                  SHREE Pay Mobile App
                </h2>
                <div className="col-md-7 order-2 order-xxl-1 order-xl-1 order-md-1 order-sm-1">
                  <p className="text-start text-white coin_txt mt-0 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 pt-2 mt-xxl-1 mt-xl-1 mt-md-1 mt-sm-1">
                    SHREE is a revolutionary blockchain platform that is built
                    for efficiency, speed, reliability and robust security that
                    runs on the PoA consensus algorithm. Unlike other blockchain
                    platforms, SHREE is cheaper and easy to use when it comes to
                    building decentralized applications. However, the best part
                    is its compatibility and portability with Ethereum’s tooling
                    and Web3 technology stack.
                  </p>
                  <p className="text-start text-white coin_txt ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 pt-2">
                    <ul class="check-list mb-30">
                      <li>
                        <span>
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </span>{" "}
                        <p className="crypto">Crypto-news curation</p>
                      </li>
                      <li>
                        <span>
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </span>{" "}
                        <p className="crypto">Natural Language Understanding</p>
                      </li>
                      <li>
                        <span>
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </span>{" "}
                        <p className="crypto">
                          Et harum quidem rerum facilis est et expedita
                          distinctio.
                        </p>
                      </li>
                    </ul>
                  </p>
                  <Button
                    type="submit"
                    className="btn-dark-white rounded app_download"
                    size="lg"
                  >
                    <span className="fs-6 dwnld">GET THE APP NOW</span>
                  </Button>
                </div>
                <div className="col-md-5 order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-2 about_imge1">
                  <img
                    className="card-img-top4 form p-3 ms-3 mt-5 mt-md-5 mt-xxl-0 mt-xl-0 mt-md-0 ms-xl-4 ms-md-4 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3 mb-5"
                    src={Icon}
                    alt="First slide"
                    width="2px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Appdownload;
