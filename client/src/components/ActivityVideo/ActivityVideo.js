import React from "react";

import "./ActivityVideo.css";

const ActivityVideo = (props) => {
  const { src } = props;
  return (
    <video
      className="activity-video shadow-lg"
      controls
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default ActivityVideo;
