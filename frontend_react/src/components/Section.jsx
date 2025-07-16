import React from "react";
import "./Section.css";

export default function Section() {
  return (
    <section className="section-root">
      <div className="section-center">
        {/* Headline and description */}
        <div className="section-content">
          <h1 className="section-headline">
            Capture the world with us
          </h1>
          <p className="section-paragraph">
            Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat nisl vel pretium lectus. In ornare quam viverra orci sagittis eu volutpat odio. Euismod nisi porta lorem mollis aliquam ut porttitor leo ac felis.
          </p>
        </div>
      </div>
      {/* Actions */}
      <div className="section-actions">
        <button className="section-btn">
          Contact us
        </button>
      </div>
    </section>
  );
}
