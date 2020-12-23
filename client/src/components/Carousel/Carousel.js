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
      title: "Web development",
      text:
        "I'm familiar with web development using plain HTML/CSS, but my main tool for developing application and site UIs is React. I used React to develop the UI of the site you're seeing right now, NodeJS and Express for the backend, and MongoDB for the database. This software stack is known as the MERN stack.",
      src: mern,
      alt: "First slide showing the MERN stack software logos",
      link: "https://github.com/williamhpark/personal-website",
      modalShow: false,
    },
    {
      id: 1,
      title: "Tinder for Netflix",
      text:
        "I'm currently in the process of developing a Tinder-style web app to make choosing something to watch on Netflix with a group of people easier. Based on a selection criteria determined by the group, each user selects what they personally want to watch and the group is notified when there is a common match. We also implemented an AI recommendation system to display the most relevant results to the user.",
      src: netflix,
      alt: "Second slide showing the Netflix logo",
      link: "https://github.com/williamhpark/movie-tinder",
      modalShow: false,
    },
    {
      id: 2,
      title: "Arduino",
      text:
        "While quarantining because of COVID, I noticed that my family was accumulating a lot of cardboard boxes from Amazon orders. Since we had recently gotten a ping-pong table, I challenged myself to create an automatic ping-pong ball launcher using only cardboard, an Arduino UNO board and some electrical supplies. Check out my blog post for more details.",
      src: arduino,
      alt: "Third slide showing an Arduino UNO",
      link: "https://github.com/williamhpark/ping_pong_launcher",
      modalShow: false,
    },
    {
      id: 3,
      title: "React Native",
      text: "This is a small app using React native that I'm developing.",
      src: reactNative,
      alt: "Fourth slide showing the React Native logo",
      link: "https://github.com/williamhpark/FamBell",
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
          <Slide src={item.src} alt={item.alt} link={item.link} />
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
