import React from "react";

import hero_img from "../assets/images/about.jpg";

import "./Hero.css";
const Hero = () => {
  return (
    <section id='home' className="hero section">
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">Nihat Onal</p>
          <h1>CREATIVE DESIGNER BASED IN MOSCOW</h1>
          <ul className="hero-list">
            <li>Well Designed and Functional</li>
            <li>Easy to Use</li>
            <li>Optimized for Mobile</li>
            <li>Fresh, Quality Content</li>
            <li>Readily accessible contact</li>
          </ul>
          <ul className="exp-list">
            <li>
              <strong>3</strong>
              <span>
                Years of<br></br> Experience
              </span>
            </li>
          </ul>
        </div>
        <div className="hero-banner">
          <img src={hero_img} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
