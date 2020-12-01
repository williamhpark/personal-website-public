import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";
import mern from "../../img/mern.jpg";
import arduino from "../../img/arduino.jpg";
import reactNative from "../../img/reactNative.jpg";
import Slide from "../Slide/Slide";
import ModalComp from "../ModalComp/ModalComp";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Web development",
          text:
            "I'm familiar with web development using plain HTML/CSS, but my main tool for developing applications and site UIs is React. I used React to develop the UI of the site you're seeing right now, NodeJS and Express for the backend, and MongoDB for the database, also known as the MERN stack.",
          src: mern,
          alt: "First slide showing the MERN stack software logos",
          link: "https://github.com/williamhpark/personal-website",
          modalShow: false,
        },
        {
          id: 1,
          title: "Arduino",
          text: "Test text",
          src: arduino,
          alt: "Second slide showing an Arduino UNO",
          link: "https://github.com/williamhpark/ping_pong_launcher",
          modalShow: false,
        },
        {
          id: 2,
          title: "React Native",
          text: "Test text",
          src: reactNative,
          alt: "Third slide showing the React Native logo",
          link: "https://github.com/williamhpark/FamBell",
          modalShow: false,
        },
      ],
      x: 0,
    };
  }

  showModal = (id) => {
    let items = [...this.state.items];
    items[id].modalShow = true;
    this.setState({
      items,
    });
  };

  hideModal = (id) => {
    let items = [...this.state.items];
    items[id].modalShow = false;
    this.setState({
      items,
    });
  };

  makeSlides = (items) => {
    return items.map((item, index) => {
      return (
        <div
          className="slide"
          key={index}
          style={{ transform: `translateX(${this.state.x}%)` }}
        >
          <Slide src={item.src} alt={item.alt} link={item.link} />
          <Button
            className="details-btn"
            variant="info"
            size="lg"
            onClick={() => this.showModal(item.id)}
          >
            Click for details
          </Button>
          <ModalComp
            title={item.title}
            text={item.text}
            link={item.link}
            show={item.modalShow}
            onHide={() => this.hideModal(item.id)}
          />
        </div>
      );
    });
  };

  goLeft = () => {
    this.state.x === 0
      ? this.setState((state) => ({
          x: -100 * (state.items.length - 1),
        }))
      : this.setState((state) => ({
          x: state.x + 100,
        }));
  };

  goRight = () => {
    this.state.x === -100 * (this.state.items.length - 1)
      ? this.setState({ x: 0 })
      : this.setState((state) => ({
          x: state.x - 100,
        }));
  };

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel shadow-lg">
          {this.makeSlides(this.state.items)}
          <button id="arrow-left" onClick={this.goLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button id="arrow-right" onClick={this.goRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
