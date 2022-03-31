import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import GlobeTrems from "../images/tokenglobe.png";
import "../App.css";
// import Bgwhite from "../images/whitepaper.png";
// import Form from "../images/form.png";
import "animate.css/animate.css";
// import { Card } from "react-bootstrap";
// import {  Stack, Button} from 'react-bootstrap';
import { Chart } from "react-google-charts";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaCloudDownloadAlt } from 'react-icons/fa';

export const data = [
  ["Task", "Hours per Day"],
  ["Public Sale", 44],
  ["Private Offering", 3],
  ["Development", 25],
  ["Air Drop", 1],
  ["SHREE Charity", 6],
  ["Collaborations & Legal", 2],
  ["Founder & Team", 19],
];

export const options = {
  // title: "My Daily Activities",
  backgroundColor: "transparent",

  is3D: true,
  color: "#00a3e0",
  fontSize: 18,

  legend: {
    textStyle: { color: "white" },
    position: "none",
  },
};
var TermsGlobe = {
  width: "100%",
  // height: "950px",
  BackgroundPosition: "center",
  backgroundImage: `url(${GlobeTrems})`,
  Option: "0.1",
  // position:"relative",
  top: "-2em",
};

let Token = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#00001a" }}>
        <section
          className="pb-5 pb-xxl-5 pb-xl-5 pb-md-5 pb-sm-5 pt-5 pt-xxl-5 pt-xl-5 pt-0"
          style={TermsGlobe}
        >
          <div className="container about_section pb-4 pt-5 pb-xxl-4 pb-xl-4 pb-md-4 pd-sm-4 pt-xxl-4 pt-xl-4 pt-md-4 pt-sm-4 ">
            <h2 className="text-center text-white">TOKEN ALLOCATION</h2>
            <div className="row">
              <div className="col-md-5 ms-xxl-0 ms-xl-0 ms-md-0 ms-sm-0 mt-0 col-xxl-6 col-xl-5 col-sm-5 col-12 mt-xxl-3 mt-xl-3 mt-mb-3 mt-sm-3">
                <Chart
                  className="toke_pie"
                  chartType="PieChart"
                  data={data}
                  height="600px"
                  color="#fff"
                  margin-top="-1em"
                  legendToggle
                  options={options}
                />
              </div>
              <div className="col-md-6 pt-0 mt-0 col-xxl-6 col-xl-6 col-sm-6 col-12 pt-xxl-5 pt-xl-5 pt-md-5 pt-sm-5 mt-xxl-4 mt-xl-4 mt-md-4 mt-sm-4">
                <div className="w-75 w-xxl-75 w-xl-100 w-md-100 w-sm-75 col-md-12 col-xxl-12 col-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card border-right text-white p-3 mb-3"
                    style={{
                      borderLeft: "4px solid #3366cc",
                      position: "none",
                    }}
                  >
                    Public Sale
                  </div>
                </div>
                <div className=" w-75 col-md-12  col-xxl-8 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #dc3912" }}
                  >
                    Private Offering
                  </div>
                </div>
                <div className="w-75 col-md-12 col-xxl-12 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #ff9900" }}
                  >
                    Development
                  </div>
                </div>
                <div className="w-75 col-md-12 col-xxl-12 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #109618" }}
                  >
                    Air Drop
                  </div>
                </div>
                <div className=" w-75 col-md-12 col-xxl-12 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #990099" }}
                  >
                    SHREE Charity
                  </div>
                </div>
                <div className="w-75 col-md-12 col-xxl-12 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #0099c6" }}
                  >
                    Collaborations & Legal
                  </div>
                </div>
                <div className="w-75 col-md-12 col-xxl-12 xol-xl-12 col-sm-12 col-12 ms-5 ms-xxl-4 ms-xl-4 ms-md-4 ms-sm-4">
                  <div
                    className="token_card text-white p-3 mb-3"
                    style={{ borderLeft: "4px solid #dd4477" }}
                  >
                    Founder & Team
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* download whitepaper */}
        </section>
      </div>
    </React.Fragment>
  );
};
export default Token;
