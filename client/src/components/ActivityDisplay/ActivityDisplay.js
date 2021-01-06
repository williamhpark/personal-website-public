import React, { useState, useEffect } from "react";

import "./ActivityDisplay.css";
import ActivityCaption from "../ActivityCaption/ActivityCaption";
import ActivityVideo from "../ActivityVideo/ActivityVideo";

const ActivityDisplay = (props) => {
  const { title, text, src, captionFirst } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="activity-display">
      {captionFirst || width < breakpoint ? (
        <>
          <div className="activity-display__caption">
            <ActivityCaption title={title} text={text} />
          </div>
          <div className="activity-display__video">
            <ActivityVideo src={src} />
          </div>
        </>
      ) : (
        <>
          <div className="activity-display__video">
            <ActivityVideo src={src} />
          </div>
          <div className="activity-display__caption">
            <ActivityCaption title={title} text={text} />
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityDisplay;
