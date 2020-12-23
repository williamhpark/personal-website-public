import React from "react";

import "./ActivityCaption.css";

const ActivityCaption = (props) => {
  const { title, text } = props;
  return (
    <div className="activity-caption">
      <h1>{title}</h1>
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ActivityCaption;
