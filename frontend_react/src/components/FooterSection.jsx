import React from "react";
import "./FooterSection.css";

// PUBLIC_INTERFACE
/**
 * FooterSection - pixel-perfect footer based on Figma design and all recursive child nodes.
 * Features:
 *  - Left: Logo (inline SVG) and "Visual Portfolio"
 *  - Center: Four orange nav links, bold, spaced as in Figma
 *  - Right: Four social icons (Facebook, Instagram, Twitter, LinkedIn), #FC4308, inline SVGs
 *  - Divider: orange color
 *  - Bottom: Two-line credits row. Left: copyright,
 *            Right: Privacy Policy, Terms of Service, Cookie Settings links (orange, spaced)
 *  - All colors, type, spacing, margins, alignments, font weights, and opacities match Figma
 *  - Fully responsive (matches vertical/horizontal, mobile flows)
 */

function FooterLogo() {
  return (
    <div className="footer-figma-logo-wrap">
      <span className="footer-logo" aria-label="Logo">
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" fill="none">
          <rect x="5" y="10" width="22" height="16" rx="3" stroke="#FC4308" strokeWidth="2"/>
          <circle cx="16" cy="18" r="5" stroke="#FC4308" strokeWidth="2"/>
          <rect x="12" y="7" width="8" height="3" rx="1" fill="#FC4308"/>
        </svg>
      </span>
      <span className="footer-logo-brand">Visual Portfolio</span>
    </div>
  );
}

function FooterNav() {
  return (
    <nav className="footer-nav-links" aria-label="Main footer navigation">
      <a className="footer-nav-link" href="#">Projects</a>
      <a className="footer-nav-link" href="#">Portraits</a>
      <a className="footer-nav-link" href="#">Fashion</a>
      <a className="footer-nav-link" href="#">Fine Art</a>
    </nav>
  );
}

function FooterSocial() {
  // Each SVG precise and colored as per Figma (all fill/stroke #FC4308)
  return (
    <nav className="footer-social-links" aria-label="Social media">
      {/* Facebook */}
      <a href="#" className="footer-social-icon" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M7.874 2.5H8.5V1.125A8.905 8.905 0 0 0 7.383 1C6.474 1 5.865 1.607 5.865 2.715V3.5H4.5v1.5h1.365V11h1.5V5h1.236l.174-1.5H7.365v-.595c0-.387.104-.655.51-.655Z"
            fill="#FC4308"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href="#" className="footer-social-icon" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="8" height="8" rx="2" stroke="#FC4308" strokeWidth="1.3" fill="none"/>
          <circle cx="6" cy="6" r="2" stroke="#FC4308" strokeWidth="1.3" fill="none"/>
          <circle cx="8.5" cy="3.5" r=".75" fill="#FC4308"/>
        </svg>
      </a>
      {/* Twitter */}
      <a href="#" className="footer-social-icon" aria-label="Twitter">
        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M10.32 3.12c-.23.1-.48.16-.74.19.27-.16.48-.42.58-.73-.25.15-.53.26-.83.32a1.311 1.311 0 0 0-2.23 1.2C5.16 4.88 3.59 4.03 2.46 2.68c-.28.48-.14 1.1.32 1.41-.21-.01-.4-.06-.57-.16v.02c0 .73.48 1.34 1.18 1.48-.12.04-.25.06-.38.06-.09 0-.18-.01-.27-.02.18.56.7.97 1.31.98a2.629 2.629 0 0 1-1.63.56c-.1 0-.2 0-.3-.02.58.37 1.28.58 2.03.58 2.44 0 3.78-2.02 3.78-3.78 0-.06 0-.13 0-.19.26-.18.48-.41.66-.67Z"
            fill="#FC4308"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a href="#" className="footer-social-icon" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="10" height="10" rx="2" stroke="#FC4308" strokeWidth="1.3" fill="none"/>
          <rect x="3" y="5" width="1.4" height="4.2" fill="#FC4308"/>
          <circle cx="3.7" cy="3.7" r=".75" fill="#FC4308"/>
          <rect x="5.6" y="5" width="1.4" height="4.2" fill="#FC4308"/>
          <path d="M8.6 5.7c-.65 0-1.06.37-1.21.63V5h-1.4v4.2h1.4V7.3c0-.6.21-.85.67-.85.46 0 .63.34.63.85v2.05h1.4V7.12c0-1.17-.65-1.42-1.49-1.42Z" fill="#FC4308"/>
        </svg>
      </a>
    </nav>
  );
}


// Footer bottom row: divider + 2-line credits and right policies links
function FooterBottom() {
  return (
    <div className="footer-figma-verticals">
      <div className="footer-figma-credits">
        <span className="footer-credit-main">
          © 2024 Visual Portfolio. All rights reserved.
        </span>
        <span className="footer-credit-designer">
          Designed by{" "}
          <a
            href="https://team-pixel.com"
            className="footer-credit-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team Pixel
          </a>
        </span>
      </div>
      <div className="footer-figma-aux-links" role="navigation" aria-label="Legal and policy links">
        <a className="footer-aux-link" href="/privacy">Privacy Policy</a>
        <span className="footer-aux-sep" aria-hidden="true">|</span>
        <a className="footer-aux-link" href="/terms">Terms of Service</a>
        <span className="footer-aux-sep" aria-hidden="true">|</span>
        <a className="footer-aux-link" href="/cookies">Cookie Settings</a>
      </div>
    </div>
  );
}

const FooterSection = () => (
  <footer className="footer-figma-root">
    <div className="footer-figma-content-row">
      <FooterLogo />
      <FooterNav />
      <FooterSocial />
    </div>
    <div className="footer-figma-divider" aria-hidden="true" />
    <FooterBottom />
  </footer>
);

export default FooterSection;
