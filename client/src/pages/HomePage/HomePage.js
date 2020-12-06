import React from "react";

import "../../App.css";
import guitar from "../../assets/video/guitar.mp4";
import soccer from "../../assets/video/soccer.mp4";
import WelcomeDisplay from "../../components/WelcomeDisplay/WelcomeDisplay";
import ActivityDisplay from "../../components/ActivityDisplay/ActivityDisplay";
import SectionCaption from "../../components/SectionCaption/SectionCaption";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = (props) => {
  const sectionCaption = {
    projects: "Here are some of my projects...",
    activities: "...and some other things I'm passionate about!",
  };
  const activityInfo = {
    guitar: {
      title: "Guitar",
      text:
        "I've been playing guitar for 6 years and worked as an instructor for 2 years. Check out my instagram page for more ",
      captionLink: "https://www.instagram.com/willpark_music/",
      captionLinkText: "@willpark_music",
      src: guitar,
      poster: null,
    },
    soccer: {
      title: "Soccer",
      text:
        "I love playing soccer - I played MSL-level soccer for 5 years. Even though I don't play for a team anymore, I go out to the field with friends whenever I get the chance",
      captionLink: "",
      captionLinkText: "",
      src: soccer,
      poster: null,
    },
  };

  return (
    <div>
      <WelcomeDisplay />
      <SectionCaption text={sectionCaption.projects} />
      <Carousel />
      <SectionCaption text={sectionCaption.activities} />
      <ActivityDisplay
        title={activityInfo.guitar.title}
        text={activityInfo.guitar.text}
        captionLink={activityInfo.guitar.captionLink}
        captionLinkText={activityInfo.guitar.captionLinkText}
        src={activityInfo.guitar.src}
        poster={activityInfo.guitar.poster}
      />
      <ActivityDisplay
        title={activityInfo.soccer.title}
        text={activityInfo.soccer.text}
        captionLink={activityInfo.soccer.captionLink}
        captionLinkText={activityInfo.soccer.captionLinkText}
        src={activityInfo.soccer.src}
        poster={activityInfo.soccer.poster}
      />
    </div>
  );
};

export default HomePage;
