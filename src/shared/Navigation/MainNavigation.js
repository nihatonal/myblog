import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

//import LanguageSelector from "../../shared/IU/LanguageSelector";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <MainHeader>
      <div className="header-wrapper">
        <h3 className="logo">Nihat</h3>
        <NavLinks
          className={navbarOpen ? "show-nav" : ""}
          showNavLink={navbarOpen ? "show-nav-item" : "showoff-nav-item"}
        />
        <Hamburger show={navbarOpen} onClick={handleToggle} />
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
