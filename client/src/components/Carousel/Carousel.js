import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";
import mern from "../../assets/img/mern.jpg";
import netflix from "../../assets/img/netflix.png";
import arduino from "../../assets/img/arduino.jpg";
import reactNative from "../../assets/img/reactNative.jpg";
import Slide from "../Slide/Slide";
import ModalComp from "../ModalComp/ModalComp";

const Carousel = (props) => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Flicker",
      shortDescription:
        "Tinder-esque web app designed to make the process of choosing a movie/show to watch on Netflix with a group of people more efficient",
      longDescription:
        "I collaborated with a friend to develop a Tinder-esque web app designed to make the process of choosing something to watch on Netflix with a group of people easier. After the group selects the media types and genres they want to see, all relevant results currently on Netflix are displayed in the form of cards that each user can either swipe right on (accept) or swipe left (reject). After all users are finished making their selections, results are recommended based off their popularity within the group. We are in the process of implementing a machine learning recommendation system to make the initial results displayed to each user even more relevant to their personal taste.",
      src: netflix,
      alt: "Second slide showing the Netflix logo",
      link: "https://github.com/williamhpark/movie-tinder",
      modalShow: false,
    },
    {
      id: 1,
      title: "Ping-Pong Ball Launcher",
      shortDescription:
        "An automatic ping-pong ball launcher made of cardboard driven by an Arduino",
      longDescription:
        "This was one of the more fun projects of mine! While quarantining at home due to the COVID pandemic, I noticed that my family was accumulating a lot of cardboard boxes from online orders. Since we had recently gotten a ping-pong table, I challenged myself to create an automatic ping-pong ball launcher using only cardboard, an Arduino UNO board and some electrical supplies. Check out my blog post for more details.",
      src: arduino,
      alt: "Third slide showing an Arduino UNO",
      link: "https://github.com/williamhpark/ping_pong_launcher",
      modalShow: false,
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      shortDescription:
        "A website to display my projects and passions, and to host my blog, developed using the MERN stack",
      longDescription:
        "I'm familiar with web development using plain HTML/CSS, but my main tool for developing application and site UIs is React. I used React to develop the UI of the site you're seeing right now, Node.js and Express to create the backend server, and MongoDB as the database. This software stack is known as the MERN stack.",
      src: mern,
      alt: "First slide showing the MERN stack software logos",
      link: "https://github.com/williamhpark/personal-website",
      modalShow: false,
    },
  ]);
  const [x, setX] = useState(0);

  const showModal = (id) => {
    let updatedItems = [...items];
    updatedItems[id].modalShow = true;
    setItems(updatedItems);
  };

  const hideModal = (id) => {
    let updatedItems = [...items];
    updatedItems[id].modalShow = false;
    setItems(updatedItems);
  };

  const makeSlides = (items) => {
    return items.map((item, index) => {
      return (
        <div
          className="slide"
          key={index}
          style={{ transform: `translateX(${x}%)` }}
        >
          <Slide
            src={item.src}
            alt={item.alt}
            title={item.title}
            shortDescription={item.shortDescription}
          />
          <Button
            className="details-btn"
            variant="info"
            onClick={() => showModal(item.id)}
          >
            Click for details
          </Button>
          <ModalComp
            title={item.title}
            longDescription={item.longDescription}
            link={item.link}
            show={item.modalShow}
            onHide={() => hideModal(item.id)}
          />
        </div>
      );
    });
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (items.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (items.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carousel-container">
      <div className="carousel shadow-lg">
        {makeSlides(items)}
        <button id="arrow-left" onClick={goLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="arrow-right" onClick={goRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
