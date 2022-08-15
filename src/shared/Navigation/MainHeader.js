import React, { useState } from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  const [fixHeader, setFixed] = useState(false);
  const fixedHeader = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", fixedHeader);
  return (
    <header className={fixHeader ? `header header-fixed` : "header"}>
      {props.children}
    </header>
  );
};

export default MainHeader;
