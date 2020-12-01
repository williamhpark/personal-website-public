import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const ActivityCaption = (props) => {
  const { title, text, captionLink, captionLinkText } = props;
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid text-left mx-5">
      <Container fluid={true}>
        <h1 className="display-4 font-weight-bolder">{title}</h1>
        <h3 className="display-5 font-weight-light">
          {text}
          {captionLink !== "" ? (
            <a href={captionLink} target="_blank" rel="noopener noreferrer">
              {captionLinkText}
            </a>
          ) : null}
          .
        </h3>
      </Container>
    </Jumbotron>
  );
};

export default ActivityCaption;
