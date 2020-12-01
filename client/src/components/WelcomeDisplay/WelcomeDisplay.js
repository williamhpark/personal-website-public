import React from "react";

import "./WelcomeDisplay.css";
import sampleProfile from "../../img/sampleProfile.png";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import SocialFollow from "../SocialFollow/SocialFollow";

const WelcomeDisplay = (props) => {
  return (
    <div className="welcome-container">
      <WelcomeHero />
      <div id="img-container">
        <img id="image" src={sampleProfile} alt="William Park" />
        <SocialFollow />
      </div>
    </div>
  );
};

export default WelcomeDisplay;
