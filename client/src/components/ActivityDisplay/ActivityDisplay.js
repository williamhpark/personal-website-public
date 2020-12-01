import React from "react";

import "./ActivityDisplay.css";
import ActivityCaption from "../ActivityCaption/ActivityCaption";
import ActivityVideo from "../ActivityVideo/ActivityVideo";

const ActivityDisplay = (props) => {
  const {
    isCaptionFirst,
    title,
    text,
    captionLink,
    captionLinkText,
    videoSrc,
  } = props;

  if (isCaptionFirst) {
    return (
      <div className="activityDisplay">
        <div className="caption">
          <ActivityCaption
            title={title}
            text={text}
            captionLink={captionLink}
            captionLinkText={captionLinkText}
          />
        </div>
        <div className="video">
          <ActivityVideo src={videoSrc} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="activityDisplay">
        <div className="video">
          <ActivityVideo src={videoSrc} />
        </div>
        <div className="caption">
          <ActivityCaption
            title={title}
            text={text}
            captionLink={captionLink}
            captionLinkText={captionLinkText}
          />
        </div>
      </div>
    );
  }
};

export default ActivityDisplay;
