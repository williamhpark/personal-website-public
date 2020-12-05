import React from "react";

import "./SectionCaption.css";

const SectionCaption = (props) => {
  return <h1 className="section-caption">{props.text}</h1>;
};

export default SectionCaption;
