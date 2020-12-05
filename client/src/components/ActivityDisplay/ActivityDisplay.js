import React from "react";

import "./ActivityDisplay.css";
import ActivityCaption from "../ActivityCaption/ActivityCaption";
import ActivityVideo from "../ActivityVideo/ActivityVideo";

const ActivityDisplay = (props) => {
  const { title, text, captionLink, captionLinkText, src, poster } = props;
  return (
    <div className="activity-display">
      <ActivityCaption
        title={title}
        text={text}
        captionLink={captionLink}
        captionLinkText={captionLinkText}
      />
      <ActivityVideo src={src} poster={poster} />
    </div>
  );
};

export default ActivityDisplay;
