import React, { useState, useContext } from "react";
import shortid from "shortid";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Text, LanguageContext } from "../../shared/context/Language";

import { HiOutlineMail } from "react-icons/hi";
import { MdAlarm } from "react-icons/md";
import "./SideMenu.css";

const SideMenu = (props) => {
  const location = useLocation();
  const lang = useContext(LanguageContext);

  return (
    <div className="side-menu-wrapper" style={props.style}>
      
    </div>
  );
};

export default SideMenu;
