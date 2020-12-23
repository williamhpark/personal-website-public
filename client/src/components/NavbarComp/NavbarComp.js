import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavbarComp.css";

const NavbarComp = (props) => {
  const [expanded, setExpanded] = useState(false);

  const expandNav = () => {
    setExpanded(true);
  };
  const collapseNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      id="navbar"
      className="border-bottom"
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Navbar.Toggle
        className="border-0"
        aria-controls="navbar-toggle"
        onClick={() => (expanded ? collapseNav() : expandNav())}
      />
      <Navbar.Collapse>
        <Nav className="text-center mx-auto">
          <Link className="nav-link mx-5" to="/" onClick={collapseNav}>
            HOME
          </Link>
          <Link className="nav-link mx-5" to="/blog" onClick={collapseNav}>
            BLOG
          </Link>
          <Link className="nav-link mx-5" to="/contact" onClick={collapseNav}>
            CONTACT
          </Link>
          <Link className="nav-link mx-5" to="/auth" onClick={collapseNav}>
            AUTH
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
