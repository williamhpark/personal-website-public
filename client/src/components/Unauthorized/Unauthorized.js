import React from "react";
import { Link } from "react-router-dom";

import "./Unauthorized.css";

const Unauthorized = (props) => {
  return (
    <div id="unauthorized-container">
      <h1>403 - You Shall Not Pass</h1>
      <p>
        This may be because you didn't sign in as the site's owner, or because
        you made a typo in the URL.
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Unauthorized;
