import React, { useState } from "react";

import "./Hamburger.css";

const Hamburger = (props) => {
  const [hoveredClass, setHoveredClass] = useState("");

  const updateHovered = (e) => {
    setHoveredClass("rotate_icon");
  };

  const removeHovered = (e) => {
    setHoveredClass("reverse_icon");
  };

  return (
    <div
      id="nav-icon"
      onMouseEnter={updateHovered}
      onMouseExit={removeHovered}
      className={props.show ? "open" : ""}
      onClick={props.onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default Hamburger;
