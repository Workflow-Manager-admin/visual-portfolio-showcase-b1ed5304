import React from "react";
import "./ImageWrapper.css";

// PUBLIC_INTERFACE
/**
 * ImageWrapper
 * Displays the featured Figma-inspired image on the left of the Section component.
 * Style and layout is visually matched to the Figma "Image Wrapper" asset (width 80px, height 100px, subtle shadow).
 */
const ImageWrapper = () => (
  <div className="image-wrapper-figma">
    <img
      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d97c4d1-0147-49f4-ab0e-6b4828776e90"
      alt="Photography sample - Figma Image Wrapper"
      className="image-wrapper-img"
      draggable="false"
      width={80}
      height={100}
      style={{ display: 'block' }}
    />
  </div>
);

export default ImageWrapper;
