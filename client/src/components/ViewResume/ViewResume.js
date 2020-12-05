import React from "react";
import resume_WilliamPark from "../../assets/doc/resume_WilliamPark.pdf";

import "./ViewResume.css";

const ViewResume = (props) => {
  return (
    <a id="resume" href={resume_WilliamPark} download="resume_WilliamPark">
      Download my resumé
    </a>
  );
};

export default ViewResume;
