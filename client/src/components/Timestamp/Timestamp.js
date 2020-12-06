import React from "react";

import "./Timestamp.css";

const Timestamp = (props) => {
  return (
    <p id="timestamp">
      <b>Created on:</b> {props.createdAt}
    </p>
  );
};

export default Timestamp;
