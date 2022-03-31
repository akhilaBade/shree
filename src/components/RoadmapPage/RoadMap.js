import React from "react";
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./roadmap.scss";
// import { BsBoxArrowDown } from "react-icons/bs";

// import { Button } from "react-bootstrap";
import Background from "../../images/bc.jpg";
// import About from "../../images/abot.png";
// import Credit from "../../images/1f4b3.png";
// import Defi from "../../images/1f4b8.png";
// import Meta from "../../images/MetaMask.png";
// import Growth from "../../images/growth.png";
// import Dapp from "../../images/dapp.png";
// import App from "../../images/app.png";

// import { Card } from "react-bootstrap";

var sectionStyle = {
  width: "100%",
  height: "394px",
  BackgroundPosition: "center",
  backgroundImage: `url(${Background})`,
  Option: "0.6",
};

let RoadMap = () => {
  return (
    <React.Fragment>
      <section className="coin_shree " style={sectionStyle}>
        <div className="mt-5">
          <h1 className="text-white text-center pb-5 wht_shree">ROAD MAP</h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#7900FF" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mt-5 rounded1">
              <div className="row">
                <div className="col-md-12">
                  <main>
                    <p className="road text-white">
                      <h4>Pre-Sale</h4>
                      Doggo ipsum long bois lotsa pats blep. What a nice floof
                      ruff super chub very good spot, the neighborhood pupper
                      lotsa pats. Borkdrive shibe shoober what a nice floof,
                      borking doggo.
                    </p>
                    <p className="road text-white text-end">
                      <h4>Re-Search</h4>
                      Shoober shooberino adorable doggo many pats, heckin good
                      boys many pats pupper wrinkler, corgo maximum borkdrive. A
                      frighten puggo wow very biscit.
                    </p>
                    <p className="road text-white">
                      <h4>Pre-Sale</h4>
                      Big ol h*ck adorable doggo vvv smol borking doggo with a
                      long snoot for pats big ol, he made many woofs doing me a
                      frighten puggo wow very biscit, ruff fat boi ruff long
                      doggo.
                    </p>
                    <p className="road text-white text-end">
                      <h4>Re-Search</h4>
                      Long bois mlem I am bekom fat wrinkler puggo maximum
                      borkdrive big ol pupper I am bekom fat, fluffer vvv
                      adorable doggo lotsa pats snoot. I am bekom fat ur givin
                      me a spook length boy wow very biscit very good spot.
                    </p>
                    <p className="road text-white">
                      <h4>Pre-Sale</h4>
                      Doggo ipsum long bois lotsa pats blep. What a nice floof
                      ruff super chub very good spot, the neighborhood pupper
                      lotsa pats. Borkdrive shibe shoober what a nice floof,
                      borking doggo.
                    </p>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </React.Fragment>
  );
};
export default RoadMap;
