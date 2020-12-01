import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="bg-light fixed-bottom">
      <Container fluid={true}>
        <Row className="border-top text-center">
          <Col className="py-3">
            Copyright &#169; 2020 William Park. All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
