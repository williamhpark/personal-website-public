import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavbarComp.css";

const NavbarComp = (props) => {
  return (
    <Navbar
      id="navbar"
      className="border-bottom"
      expand="lg"
      fixed="top"
      expanded={props.expanded}
    >
      <Navbar.Toggle
        className="border-0"
        aria-controls="navbar-toggle"
        onClick={() => props.setExpanded(!props.expanded)}
      />
      <Navbar.Collapse>
        <Nav className="text-center mx-auto">
          <Link
            className="nav-link mx-5"
            to="/"
            onClick={() => props.setExpanded(false)}
          >
            HOME
          </Link>
          <Link
            className="nav-link mx-5"
            to="/blog"
            onClick={() => props.setExpanded(false)}
          >
            BLOG
          </Link>
          <Link
            className="nav-link mx-5"
            to="/contact"
            onClick={() => props.setExpanded(false)}
          >
            CONTACT
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
