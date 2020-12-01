import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const WelcomeHero = (props) => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid text-left">
      <Container fluid={true}>
        <h1 className="font-weight-light">Hey, I'm</h1>
        <h3 className="display-2 font-weight-bolder">William Park</h3>
        <h1 className="font-weight-light">Welcome to my site!</h1>
      </Container>
    </Jumbotron>
  );
};

export default WelcomeHero;
