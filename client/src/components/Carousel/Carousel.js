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
import Slide from "../Slide/Slide";
import ModalComp from "../ModalComp/ModalComp";

const Carousel = (props) => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Flicker",
      text:
        "A Tinder-esque web app designed to make the process of choosing something to watch on Netflix with a group of people easier. Check it out at <a href='http://flickerapp.herokuapp.com/' target='_blank'>flickerapp.herokuapp.com</a>.",
      src: netflix,
      alt: "First slide showing the Netflix logo",
      link: "https://github.com/williamhpark/movie-tinder.git",
      modalShow: false,
    },
    {
      id: 1,
      title: "Ping-pong ball launcher",
      text:
        "An automatic ping-pong ball launcher that I use when I want to practice on my own, created using cardboard, an Arduino UNO board and some electrical supplies. Check out my blog post for more details.",
      src: arduino,
      alt: "Second slide showing an Arduino UNO",
      link: "https://github.com/williamhpark/ping_pong_launcher.git",
      modalShow: false,
    },
    {
      id: 2,
      title: "Personal portfolio website",
      text:
        "My primary tool for developing application and site UIs is React. I used React to develop the UI of the site you're seeing right now, Node.js and Express to create the backend server, and MongoDB as the database. This software stack is known as the MERN stack.",
      src: mern,
      alt: "Third slide showing the MERN stack software logos",
      link: "https://github.com/williamhpark/personal-website-public.git",
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
          <Slide src={item.src} alt={item.alt} title={item.title} />
          <Button
            className="details-btn"
            variant="info"
            onClick={() => showModal(item.id)}
          >
            Click for details
          </Button>
          <ModalComp
            title={item.title}
            text={item.text}
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
