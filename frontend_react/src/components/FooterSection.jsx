import React from "react";
import "./FooterSection.css";

// Vector SVG for simple logo (camera outline, example placeholder for photo portfolio)
const Logo = () => (
  <span className="footer-logo" aria-label="Portfolio Logo">
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="none">
      <rect x="5" y="10" width="22" height="16" rx="3" stroke="#fc4308" strokeWidth="2"/>
      <circle cx="16" cy="18" r="5" stroke="#fc4308" strokeWidth="2"/>
      <rect x="12" y="7" width="8" height="3" rx="1" fill="#fc4308"/>
    </svg>
  </span>
);

// Social Media Icons using Figma #fc4308 color brand
const SocialLinks = () => (
  <nav className="footer-social-links" aria-label="Social media">
    <a href="#" className="footer-social-icon" aria-label="Facebook">
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M7.874 2.5H8.5V1.125A8.905 8.905 0 0 0 7.383 1C6.474 1 5.865 1.607 5.865 2.715V3.5H4.5v1.5h1.365V11h1.5V5h1.236l.174-1.5H7.365v-.595c0-.387.104-.655.51-.655Z" fill="#fc4308"/></svg>
    </a>
    <a href="#" className="footer-social-icon" aria-label="Instagram">
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="#fc4308" strokeWidth="1.3" fill="none"/>
        <circle cx="6" cy="6" r="2" stroke="#fc4308" strokeWidth="1.3" fill="none"/>
        <circle cx="8.5" cy="3.5" r=".75" fill="#fc4308"/>
      </svg>
    </a>
    <a href="#" className="footer-social-icon" aria-label="Twitter">
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M10.32 3.12c-.23.1-.48.16-.74.19.27-.16.48-.42.58-.73-.25.15-.53.26-.83.32a1.311 1.311 0 0 0-2.23 1.2C5.16 4.88 3.59 4.03 2.46 2.68c-.28.48-.14 1.1.32 1.41-.21-.01-.4-.06-.57-.16v.02c0 .73.48 1.34 1.18 1.48-.12.04-.25.06-.38.06-.09 0-.18-.01-.27-.02.18.56.7.97 1.31.98a2.629 2.629 0 0 1-1.63.56c-.1 0-.2 0-.3-.02.58.37 1.28.58 2.03.58 2.44 0 3.78-2.02 3.78-3.78 0-.06 0-.13 0-.19.26-.18.48-.41.66-.67Z" fill="#fc4308"/>
      </svg>
    </a>
    <a href="#" className="footer-social-icon" aria-label="LinkedIn">
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="10" height="10" rx="2" stroke="#fc4308" strokeWidth="1.3"/>
        <rect x="3" y="5" width="1.4" height="4.2" fill="#fc4308"/>
        <circle cx="3.7" cy="3.7" r=".75" fill="#fc4308"/>
        <rect x="5.6" y="5" width="1.4" height="4.2" fill="#fc4308"/>
        <path d="M8.6 5.7c-.65 0-1.06.37-1.21.63V5h-1.4v4.2h1.4V7.3c0-.6.21-.85.67-.85.46 0 .63.34.63.85v2.05h1.4V7.12c0-1.17-.65-1.42-1.49-1.42Z" fill="#fc4308"/>
      </svg>
    </a>
  </nav>
);

// Main nav links for the footer (right after logo in row)
const FooterNav = () => (
  <nav className="footer-nav-links" aria-label="Footer navigation">
    <a href="#" className="footer-nav-link">Projects</a>
    <a href="#" className="footer-nav-link">Portraits</a>
    <a href="#" className="footer-nav-link">Fashion</a>
    <a href="#" className="footer-nav-link">Fine Art</a>
    <a href="#" className="footer-nav-link">Contact</a>
  </nav>
);

const FooterSection = () => (
  <footer className="footer-figma-root">
    <div className="footer-figma-content-row">
      <div className="footer-figma-logo-wrap">
        <Logo />
      </div>
      <FooterNav />
      <SocialLinks />
    </div>
    <div className="footer-figma-divider" aria-hidden="true" />
    <div className="footer-figma-verticals">
      <div className="footer-figma-credits">
        <span className="footer-credit-main">© 2024 Visual Portfolio. All rights reserved.</span>
        <span className="footer-credit-designer">
          Designed by <a href="https://team-pixel.com" className="footer-credit-link" target="_blank" rel="noopener noreferrer">Team Pixel</a>
        </span>
      </div>
      <div className="footer-figma-aux-links" role="navigation" aria-label="Legal and policies">
        <a className="footer-aux-link" href="/privacy">Privacy Policy</a>
        <span className="footer-aux-sep" aria-hidden="true">|</span>
        <a className="footer-aux-link" href="/terms">Terms of Service</a>
        <span className="footer-aux-sep" aria-hidden="true">|</span>
        <a className="footer-aux-link" href="/impressum">Impressum</a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
