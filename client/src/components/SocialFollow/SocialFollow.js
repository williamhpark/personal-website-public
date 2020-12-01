import React from "react";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./SocialFollow.css";
import SocialItem from "../SocialItem/SocialItem";

const SocialFollow = (props) => {
  const items = [
    {
      title: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/williamparkuw/",
    },
    {
      title: "Instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/william.h.park/",
    },
    {
      title: "Github",
      icon: faGithub,
      link: "https://github.com/williamhpark",
    },
  ];

  const renderItems = () => {
    return items.map((item, index) => {
      return <SocialItem key={index} icon={item.icon} link={item.link} />;
    });
  };

  return <div id="social-container">{renderItems()}</div>;
};

export default SocialFollow;
