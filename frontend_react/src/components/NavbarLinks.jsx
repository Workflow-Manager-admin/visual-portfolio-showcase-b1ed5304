import React from "react";
import "../styles/NavbarLinks.css";

// PUBLIC_INTERFACE
/**
 * NavbarLinks displays navigation links at the top of the site.
 * Style is defined in src/styles/NavbarLinks.css.
 */
const NavbarLinks = () => (
  <nav className="navbar-links-frame">
    <a href="#" className="navbar-link navbar-link-projects">Projects</a>
    <a href="#" className="navbar-link navbar-link-portraits">Portraits</a>
    <a href="#" className="navbar-link navbar-link-fashion">Fashion</a>
    <a href="#" className="navbar-link navbar-link-fineart">Fine Art</a>
  </nav>
);

export default NavbarLinks;
