import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const Hero = (props) => {
  const { title, subtitle, text } = props;
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid mt-5 mb-0">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="text-center" md={8} sm={12}>
            {title && <h1 className="display-1 font-weight-bolder">{title}</h1>}
            {subtitle && (
              <h3 className="display-4 font-weight-light ">{subtitle}</h3>
            )}
            {text && <h3 className="font-weight-light">{text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
