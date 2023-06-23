import React, { useState } from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../../../Component/ActiveLink/ActiveLink";

const NavTwo = () => {
  const [group, setGroup] = useState("Join Group");

  const handleGroup = () => {
    setGroup("Live Group");
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ borderBottom: "2px solid gray", margin: "0 40px" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-lg-flex justify-content-around "
          id="basic-navbar-nav"
        >
          <Nav className="mr-auto">
            <Nav.Item>
              <ActiveLink to="/">AllPost</ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/all-article">Article</ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/all-event">Event</ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/all-education">Education</ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/all-jobs">Jobs</ActiveLink>
            </Nav.Item>
          </Nav>
          <Nav>
            <NavDropdown title="Create a Post" id="basic-nav-dropdown">
              <Link to="/post-article">Write an Article</Link>
              <Link to="/post-education">Write Education</Link>
              <Link to="/post-event">Post Event</Link>
              <Link to="/post-job">Post a Job</Link>
            </NavDropdown>
            <Button variant="primary" onClick={handleGroup}>
              {group}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavTwo;
