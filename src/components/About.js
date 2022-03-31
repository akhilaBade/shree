import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Background from "../images/cb.jpg";
import Samplevideo from "../images/sample.gif";
import "../App.css";
import "animate.css/animate.css";

var sectionStyle = {
  width: "100%",
  height: "694px",
  BackgroundPosition: "center",

  backgroundImage: `url(${Background})`,
  Option: "0.6",
};

let About = () => {
  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#050914" }} className="bg_abut">
        <section
          className="pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-xs-4"
          style={sectionStyle}
        >
          <div className="about_innr">
            <h2 className="text-center text-white pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-4 abt_hd">
              WELCOME TO SHREE
            </h2>
            <center className="pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-3 pt-sm-3 pt-3">
              <img
                className="d-block w-100 about_img"
                src={Samplevideo}
                alt="First slide"
              />
            </center>
            <center>
              <div className="container">
                <div className="col-xxl-6 col-xl-6 col-md-6 col-xs-6 col-10">
                  <p className="text-center text-white pt-3">
                    SHREE is a pioneer of blockchain technology in India. With
                    its growing suite of blockchain infrastructure services and
                    sophisticated resources, businesses can layout the
                    groundwork for emerging domains like digital assets, NFT,
                    health infra and fintech in the most seamless process while
                    de-risking the development process. of blockchain
                    infrastructure services and sophisticated resources,
                    businesses.
                  </p>
                </div>
              </div>
            </center>
            {/* <img
                className="d-block w-100 globe-img"
                src={GlobeAbout}
                alt="First slide" 
               
                /> */}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default About;
