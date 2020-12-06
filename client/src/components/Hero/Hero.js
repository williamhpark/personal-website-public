import React from "react";

import "./Hero.css";

const Hero = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

export default Hero;
