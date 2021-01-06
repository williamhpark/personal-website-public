import React from "react";

import "./WelcomeDisplay.css";
import profilePic from "../../assets/img/profilePic.jpg";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import SocialFollow from "../SocialFollow/SocialFollow";
import ViewResume from "../ViewResume/ViewResume";

const WelcomeDisplay = (props) => {
  return (
    <div id="welcome-container">
      <WelcomeHero />
      <div id="image-container">
        <img id="image" src={profilePic} alt="William Park" />
        <SocialFollow />
        <ViewResume />
      </div>
    </div>
  );
};

export default WelcomeDisplay;
