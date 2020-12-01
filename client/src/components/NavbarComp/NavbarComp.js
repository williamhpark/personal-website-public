import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavbarComp.css";

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  expandNav = () => {
    this.setState({ expanded: true });
  };
  collapseNav = () => {
    this.setState({ expanded: false });
  };

  render() {
    const { expanded } = this.state;
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
          onClick={() => (expanded ? this.collapseNav() : this.expandNav())}
        />
        <Navbar.Collapse>
          <Nav className="text-center mx-auto">
            <Link className="nav-link mx-5" to="/" onClick={this.collapseNav}>
              HOME
            </Link>
            <Link
              className="nav-link mx-5"
              to="/blog"
              onClick={this.collapseNav}
            >
              BLOG
            </Link>
            <Link
              className="nav-link mx-5"
              to="/contact"
              onClick={this.collapseNav}
            >
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComp;
