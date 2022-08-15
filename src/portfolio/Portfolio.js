import React from "react";
import { useInView } from "react-intersection-observer";
import Lightbox from "./Ligthbox";
import "./Portfolio.css";
const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  });

  return (
    <section id="portfolio" className='portfolio section' ref={ref}>
      <div className="container">
        <div className="section-title-body">
          <p
            className={inView ? "section-subtitle show_up" : "section-subtitle"}
          >
            Portfolio
          </p>
          <h2 className="section-title">Selected Works</h2>
        </div>

        <div className="lightbox-wrapper">
          <Lightbox />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
