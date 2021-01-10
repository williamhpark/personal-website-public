import React from "react";

import guitar from "../../assets/videos/guitar.mp4";
import soccer from "../../assets/videos/soccer.mp4";
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
        "I've been playing guitar for six years and worked as an instructor for two years. Check out my instagram page for more <a href='https://www.instagram.com/willpark_music/' target='_blank' rel='noopener noreferrer'>@willpark_music</a>.",
      src: guitar,
    },
    soccer: {
      title: "Soccer",
      text:
        "I love playing soccer - I played MSL-level club soccer and school soccer for five years.",
      src: soccer,
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
        src={activityInfo.guitar.src}
        captionFirst={true}
      />
      <ActivityDisplay
        title={activityInfo.soccer.title}
        text={activityInfo.soccer.text}
        src={activityInfo.soccer.src}
        captionFirst={false}
      />
    </div>
  );
};

export default HomePage;
