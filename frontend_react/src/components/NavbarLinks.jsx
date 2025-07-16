import React from "react";
import "../styles/NavbarLinks.css";

// PUBLIC_INTERFACE
/**
 * NavbarLinks displays navigation links at the top of the site.
 * Style is defined in src/styles/NavbarLinks.css.
 */
const NavbarLinks = () => (
  <nav className="navbar-links-frame">
    <a href="#" className="navbar-link">Link 1</a>
    <a href="#" className="navbar-link">Link 2</a>
    <a href="#" className="navbar-link">Link 3</a>
    <a href="#" className="navbar-link">Link 4</a>
  </nav>
);

export default NavbarLinks;
