import React from "react";

import "./ActivityCaption.css";

const ActivityCaption = (props) => {
  const { title, text, captionLink, captionLinkText } = props;
  return (
    <div className="activity-caption">
      <h1>{title}</h1>
      <h3>
        {text}
        {captionLink !== "" ? (
          <a href={captionLink} target="_blank" rel="noopener noreferrer">
            {captionLinkText}
          </a>
        ) : null}
        .
      </h3>
    </div>
  );
};

export default ActivityCaption;
