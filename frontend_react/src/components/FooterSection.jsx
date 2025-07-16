import React from "react";
import "./FooterSection.css";

// PUBLIC_INTERFACE
/**
 * FooterSection renders the styled bottom footer as designed in Figma.
 * - Contains logo, site nav links, and a NEW precise social media row.
 * - Credits and legal info.
 * - Social row uses 4 placeholders (to be replaced with SVGs for Figma 1:130, 1:132, 1:134, 1:136).
 */
export default function FooterSection() {
  return (
    <footer className="footer-section">
      {/* Main content bar */}
      <div className="footer-content-bar">
        {/* Logo Area */}
        <div className="footer-logo-group">
          {/* Logo Icon (unchanged) */}
          <svg
            className="footer-logo-icon"
            width="21"
            height="9"
            viewBox="0 0 21 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo icon"
          >
            <rect width="21" height="9" rx="2" fill="#fc4308"/>
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
        {/* Social Links - Exact right-align, 150x12, gap 6px, 4 placeholders */}
        <div className="footer-social-links" aria-label="Footer social media links">
          {/* 1:130 - Placeholder for Social Icon 1 */}
          <a href="#" className="footer-social-icon" aria-label="Social 1">
            {/* TODO: Insert SVG for 1:130 here */}
            <span className="footer-icon-placeholder" />
          </a>
          {/* 1:132 - Placeholder for Social Icon 2 */}
          <a href="#" className="footer-social-icon" aria-label="Social 2">
            {/* TODO: Insert SVG for 1:132 here */}
            <span className="footer-icon-placeholder" />
          </a>
          {/* 1:134 - Placeholder for Social Icon 3 */}
          <a href="#" className="footer-social-icon" aria-label="Social 3">
            {/* TODO: Insert SVG for 1:134 here */}
            <span className="footer-icon-placeholder" />
          </a>
          {/* 1:136 - Placeholder for Social Icon 4 */}
          <a href="#" className="footer-social-icon" aria-label="Social 4">
            {/* TODO: Insert SVG for 1:136 here */}
            <span className="footer-icon-placeholder" />
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
