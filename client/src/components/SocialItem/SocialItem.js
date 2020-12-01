import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SocialItem.css";

const SocialItem = (props) => {
  const { icon, link } = props;
  return (
    <a className="item" href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="3x" />
    </a>
  );
};

export default SocialItem;
