import React from "react";

import "./ActivityVideo.css";

const ActivityVideo = (props) => {
  const { poster, src } = props;
  return (
    <video
      className="activity-video shadow-lg"
      poster={poster}
      controls
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default ActivityVideo;
