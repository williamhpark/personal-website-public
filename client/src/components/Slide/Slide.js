import React from "react";

const Slide = (props) => {
  const imgStyles = {
    width: "100%",
    height: "auto",
  };

  const { src, alt } = props;
  return <img src={src} alt={alt} style={imgStyles} />;
};

export default Slide;
