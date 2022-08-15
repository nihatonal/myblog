import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import project_1 from "../../assets/images/project_1.jpg";
import project_2 from "../../assets/images/project_2.jpg";
import project_3 from "../../assets/images/project_3.jpg";
import project_4 from "../../assets/images/project_4.jpg";
import "./SimpleSlider.css";

const carouselProperties = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  className: "slide",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SimpleSlider = (props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-250px",
  });
  return (
    <div className="container-slider" ref={ref}>
      <Slider {...carouselProperties}>
        <div>
          <a href="https://vedexpress.netlify.app/" target="_blank">
            <img
              className="img-fluid"
              alt="Comfort Office tools"
              src={project_1}
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
