import React from "react";
import "./FooterSection.css";

// PUBLIC_INTERFACE
/**
 * FooterSection renders a minimal, light-themed footer as per the latest design:
 * - Shows only "Capture the world" centered in the footer, no icons or links.
 */
export default function FooterSection() {
  return (
    <footer className="footer-section">
      <span className="footer-section-text">Capture the world</span>
    </footer>
  );
}
