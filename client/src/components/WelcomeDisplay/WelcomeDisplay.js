import React from "react";

import "./WelcomeDisplay.css";
import resume from "../../assets/documents/resume_WilliamPark.pdf";
import profilePic from "../../assets/images/profilePic.jpg";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import SocialFollow from "../SocialFollow/SocialFollow";

const WelcomeDisplay = (props) => {
  return (
    <div id="welcome-container">
      <WelcomeHero />
      <div id="image-container">
        <img id="image" src={profilePic} alt="William Park" />
        <SocialFollow />
        <a id="resume" href={resume} download="WilliamPark_resume">
          Download my resumé
        </a>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
