import React from "react";

import "./Footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      Copyright &#169; {year} William Park. All Rights Reserved
    </footer>
  );
};

export default Footer;
