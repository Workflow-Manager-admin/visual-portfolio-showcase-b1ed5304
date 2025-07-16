import React from "react";
import "./FooterSection.css";

const ICON_COLOR = "#fc4308";

// PUBLIC_INTERFACE
/**
 * FooterSection renders the styled bottom footer as designed in Figma.
 * - Contains logo, site nav links, and social icons.
 * - Credits and legal info.
 * - Easy to extend nav and icons.
 */
export default function FooterSection() {
  return (
    <footer className="footer-section">
      {/* Main content bar */}
      <div className="footer-content-bar">
        {/* Logo Area */}
        <div className="footer-logo-group">
          {/* Logo Icon */}
          <svg
            className="footer-logo-icon"
            width="21"
            height="9"
            viewBox="0 0 21 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo icon"
          >
            {/* SVG: simple rounded rectangle - update path with real logo as available */}
            <rect width="21" height="9" rx="2" fill={ICON_COLOR}/>
          </svg>
          <span className="footer-logo-text">Capture Studio</span>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/projects">Projects</a>
          <a href="/portraits">Portraits</a>
          <a href="/fashion">Fashion</a>
          <a href="/fine-art">Fine Art</a>
        </nav>

        {/* Social Links */}
        <div className="footer-socials">
          {/* Facebook */}
          <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 5 9" aria-hidden="true" focusable="false"><rect x="0" y="0" width="5" height="9" rx="1" fill={ICON_COLOR}/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 9 9" aria-hidden="true" focusable="false"><circle cx="4.5" cy="4.5" r="4.5" fill={ICON_COLOR}/></svg>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 9 8" aria-hidden="true" focusable="false"><ellipse cx="4.5" cy="4" rx="4.5" ry="4" fill={ICON_COLOR}/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com" className="footer-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 9 9" aria-hidden="true" focusable="false"><rect width="9" height="9" rx="2" fill={ICON_COLOR}/></svg>
          </a>
        </div>
      </div>

      {/* Credits/Divider Section */}
      <div className="footer-credits-section">
        <div className="footer-divider"></div>
        <div className="footer-credits-row">
          <div className="footer-credits-text">
            © 2023 Capture Studio. All rights reserved.
          </div>
          <div className="footer-credits-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
