import React from "react";

import VideoPlayer from "react-video-js-player";

const ActivityVideo = (props) => {
  return (
    <VideoPlayer
      {...props}
      className="shadow-lg"
      hideControls={["playbackrates"]}
    />
  );
};

export default ActivityVideo;
