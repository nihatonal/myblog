import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./Carousel.css";

const carouselProperties = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: "slide",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const Carousel = (props) => {
  return (
    <div className="container-slider">
      <Slider {...carouselProperties}>
        {props.children}
      </Slider>
    </div>
  );
};

export default Carousel;
