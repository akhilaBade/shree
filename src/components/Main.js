import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image from "./../banner.png";
import { Button, Carousel } from "react-bootstrap";
// import { $ } from "jquery";
import { BsArrowRight } from "react-icons/bs";
// import { useTransition, animated } from "react-spring";
// import GlobeAbt from "../images/g.png";

import "../App.css";
import "animate.css/animate.css";

// var sectionGlobe = {
//   backgroundImage: `url(${GlobeAbt})`,
// };

// function animate() {
//   $(".animate").whenInViewport(function ($animate) {
//     $animate.addClass("animated");
//   });
// }

// function scrollArrow() {
//   $("#scrollDown").click(function () {
//     $("html, body").animate(
//       {
//         scrollTop: $("#scrollDownLocation").offset().top,
//       },
//       500
//     );
//   });
// }

function Main() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item id="scrollDownLocation">
          <img
            className="d-block w-100 slider1"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="banner_txt text-start">
              {/* <span className="earth"> </span> */}
              {/* <img
                  className="d-block w-100 about_img"
                  src={sectionGlobe}
                  alt="First slide"
                /> */}
              <h1 className="font-weight-bold desktop_hd">
                Shree Token Driving The
                <br />
                Future Of Money
              </h1>
              {/* for mobile responsive */}
              <h2 className="font-weight-bold mobile_hd text-center">
                Shree Token Driving The
                <br />
                Future Of Money
              </h2>
              <div className="innertext">
                <p className="sample_txt pb-2 slide-right">
                  SHREE is a pioneer of blockchain technology in India. With its
                  growing suite of blockchain infrastructure services and
                  sophisticated resources, businesses can layout the groundwork
                  for emerging domains like digital assets, NFT, health infra
                  and fintech in the most seamless process while de-risking the
                  development process.
                </p>
                <Button
                  type="submit"
                  className="btn-dark-white rounded white-hm"
                  size="lg"
                >
                  {" "}
                  <span className="fs-6">Whitepaper</span> <BsArrowRight />
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  type="submit"
                  className="btn-dark-orange rounded white-hm"
                  size="lg"
                >
                  {" "}
                  <span className="fs-6">Book Token Now</span>
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Main;
