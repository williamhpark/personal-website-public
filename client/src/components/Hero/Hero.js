import React from "react";

import "./Hero.css";

const Hero = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="hero">
      {title && <h1 className="title">{title}</h1>}
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
    </div>
  );
};

export default Hero;
