import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { Text } from "../../shared/context/Language";
import { useLocation } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  const location = useLocation();
  

  return (
    <nav className={`nav-wrapper ${props.className}`}>
      <ul>
        <li
          className={
            location.hash === "#home"
              ? `${props.showNavLink}  selected-item`
              : `${props.showNavLink} `
          }
        >
          <Link
            className={
              location.hash === "#home" ? `nav-item  selected` : `nav-item `
            }
            to="/#home"
            activeclassname="selected"
            onClick={props.onClickNavItem}
            smooth
          >
            Home
          </Link>
        </li>
        <li
          className={
            location.hash === "#portfolio"
              ? `${props.showNavLink}  selected-item`
              : `${props.showNavLink} `
          }
        >
          <Link
            className={
              location.hash === "#portfolio" ? `nav-item  selected` : `nav-item`
            }
            to="/#portfolio"
            activeclassname="selected"
            onClick={props.onClickNavItem}
            smooth
          >
            Portfolio
          </Link>
        </li>
        <li
          className={
            location.hash === "#skills"
              ? `${props.showNavLink}  selected-item`
              : `${props.showNavLink} `
          }
        >
          <Link
            className={
              location.hash === "#skills" ? `nav-item  selected` : `nav-item `
            }
            to="/#skills"
            activeclassname="selected"
            onClick={props.onClickNavItem}
            smooth
          >
            Skills
          </Link>
        </li>
        <li
          className={
            location.hash === "#contact"
              ? `${props.showNavLink}  selected-item`
              : `${props.showNavLink} `
          }
        >
          <Link
            className={
              location.hash === "#contact" ? `nav-item  selected` : `nav-item `
            }
            to="/#contact"
            activeclassname="selected"
            onClick={props.onClickNavItem}
            smooth
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
