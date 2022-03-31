import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Bgwhite from "../images/block.png";
import Form from "../images/form.png";
import Form_img from "../images/form1.png";
import "../App.css";
import { BsBoxArrowDown } from "react-icons/bs";

import "animate.css/animate.css";
import { Stack, Button } from "react-bootstrap";

var WhiteBack = {
  width: "100%",
  height: "734px",
  BackgroundPosition: "center",
  backgroundImage: `url(${Bgwhite})`,
  Option: "0.1",
  // position:"relative",
  top: "-2em",
};

let Whitepaper = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#050914" }}>
        <section className="creative-banner pb-5">
          <div class="bubble-set">
            <div class="bubble-lg"></div>
            {/* <div class="bubble-md"></div> */}
            <div class="bubble-sm"></div>
          </div>
          <div className="container m-auto">
            <div className="row m-auto pt-5 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 section_abt pb-5">
              <div className="col-xxl-5 col-xl-5 col-md-5 col-sm-5 pt-1  pt-xxl-5 pt-xl-5  mt-5 pt-md-5 pt-sm-5 mt-0 order-2 order-xxl-1 order-xl-1 order-md-1 order-sm-1">
                <Stack direction="horizontal" gap={3}>
                  <div
                    className=""
                    style={{
                      // backgroundImage: `linear-gradient(to bottom, #06102D, #11475C)`,
                      border: "none",
                    }}
                  >
                    <img
                      className="card-img-top2 form p-3 ms-3 ms-xxl-4 ms-xl-3 ms-md-3 ms-sm-3 p-xxl-3 p-xl-3 p-md-3 p-sm-3"
                      src={Form}
                      alt="First slide"
                      width="2px"
                    />
                  </div>
                </Stack>
              </div>

              <div className="col-md-6 col-xxl-6 col-xl-6 col-sm-6 col-12 offset-xl-1 pb-5 m-auto order-1 order-xxl-2 order-xl-2 order-md-2 order-sm-2 ms-2 ms-xxl-2 ms-xl-2 ms-md-2 ms-sm-2">
                <h6 className="text-start pt-5 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 small_hd mt-5">
                  SHREE PAY
                </h6>
                <h2 className="text-start text-white pt-1 pt-xxl-1 pt-xl-1 pt-md-5 pt-sm-5">
                  DOWNLOAD WHITE PAPER
                </h2>
                <p className="text-start text-white">
                  A white paper is an authoritative report or guide that informs
                  readers concisely about a complex issue and presents the
                  issuing body’s philosophy on the matter. It is meant to help
                  readers understand an issue, solve a problem, or make a
                  decision.
                </p>
                <Button
                  type="submit"
                  className="btn-dark-white rounded"
                  size="lg"
                >
                  {" "}
                  <span className="fs-6 dwnld">Download Now</span>{" "}
                  <BsBoxArrowDown className="fs-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Whitepaper;
