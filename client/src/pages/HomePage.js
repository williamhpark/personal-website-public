import React from "react";

import "../App.css";
import test from "../img/test.mp4";
import WelcomeDisplay from "../components/WelcomeDisplay/WelcomeDisplay";
import ActivityDisplay from "../components/ActivityDisplay/ActivityDisplay";
import SectionCaption from "../components/SectionCaption/SectionCaption";
import Carousel from "../components/Carousel/Carousel";
import DownloadResume from "../components/DownloadResume/DownloadResume";

const HomePage = (props) => {
  const sectionCaption = {
    projects: "Here are some of my projects...",
    activities: "...and some other things I'm passionate about!",
  };
  const activityInfo = {
    guitar: {
      isCaptionFirst: true,
      title: "Guitar",
      text:
        "I've been playing guitar for 6 years and worked as an instructor for 2 years. Check out my instagram page for more ",
      captionLink: "https://www.instagram.com/willpark_music/",
      captionLinkText: "@willpark_music",
      videoSrc: test,
    },
    soccer: {
      isCaptionFirst: false,
      title: "Soccer",
      text: "I love playing soccer - I played MSL-level soccer for 5 years",
      captionLink: "",
      captionLinkText: "",
      videoSrc: test,
    },
  };

  return (
    <div>
      <WelcomeDisplay />
      <SectionCaption text={sectionCaption.projects} />
      <Carousel />
      <SectionCaption text={sectionCaption.activities} />
      <ActivityDisplay
        isCaptionFirst={activityInfo.guitar.isCaptionFirst}
        title={activityInfo.guitar.title}
        text={activityInfo.guitar.text}
        captionLink={activityInfo.guitar.captionLink}
        captionLinkText={activityInfo.guitar.captionLinkText}
        videoSrc={activityInfo.guitar.videoSrc}
      />
      <ActivityDisplay
        isCaptionFirst={activityInfo.soccer.isCaptionFirst}
        title={activityInfo.soccer.title}
        text={activityInfo.soccer.text}
        captionLink={activityInfo.soccer.captionLink}
        captionLinkText={activityInfo.soccer.captionLinkText}
        videoSrc={activityInfo.soccer.videoSrc}
      />
    </div>
  );
};

export default HomePage;
