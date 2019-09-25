/* eslint-disable react/prop-types */
import React from "react";

const Image = ({ src, alt, width, height, className }) => (
  <img
    className={className}
    width= {width}
    height= {height}
    src={src}
    alt={alt}
  />
);
export default Image;