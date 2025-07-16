import React from "react";
import "./FooterSection.css";

// Pixel-perfect footer translation of Figma "Content" and "Credits" frames
export default function FooterSection() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Content Row - 3 Columns/Sections (placeholders) */}
        <div className="footer-content">
          <div className="footer-col">
            {/* Placeholder content for left column */}
            <span className="footer-link">About</span>
          </div>
          <div className="footer-col footer-col-center">
            {/* Placeholder content for middle column */}
            <span className="footer-link">Contact</span>
          </div>
          <div className="footer-col footer-col-right">
            {/* Placeholder content for right column */}
            <span className="footer-link">Links</span>
          </div>
        </div>

        {/* Credits Row - 2 Lines (placeholders) */}
        <div className="footer-credits">
          <span className="footer-credit-main">© 2024 Visual Portfolio</span>
          <span className="footer-credit-designer">Design by Team Pixel</span>
        </div>
      </div>
    </footer>
  );
}
