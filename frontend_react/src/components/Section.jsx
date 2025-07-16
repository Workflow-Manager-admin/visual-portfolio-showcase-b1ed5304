import React from "react";
import "./Section.css";
import ImageWrapper from "./ImageWrapper";
import "./ImageWrapper.css";

// PUBLIC_INTERFACE
/**
 * Section
 * Hero area as shown in Figma: horizontally aligned,
 * left side is the ImageWrapper, right side is headline, description, and button.
 */
export default function Section() {
  return (
    <section className="section-root">
      {/* Left: ImageWrapper with all spacing handled by flex and gap */}
      <ImageWrapper />
      {/* Right: Headline, paragraph, and button vertical stack with Figma spacing/alignment */}
      <div className="section-center">
        <div className="section-content">
          <h1 className="section-headline">
            Capture the world with us
          </h1>
          <p className="section-paragraph">
            Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat nisl vel pretium lectus. In ornare quam viverra orci sagittis eu volutpat odio. Euismod nisi porta lorem mollis aliquam ut porttitor leo ac felis.
          </p>
        </div>
        <div className="section-actions">
          <button className="section-btn">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
