import React from "react";

import "./ActivityDisplay.css";
import ActivityCaption from "../ActivityCaption/ActivityCaption";
import ActivityVideo from "../ActivityVideo/ActivityVideo";

const ActivityDisplay = (props) => {
  const { title, text, src } = props;
  return (
    <div className="activity-display">
      <ActivityCaption title={title} text={text} />
      <ActivityVideo src={src} />
    </div>
  );
};

export default ActivityDisplay;
