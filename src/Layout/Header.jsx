import React, { useState } from "react";
import { Form } from "react-router-dom";
import logo from "../../public/logo.png";
import {
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import SignupModal from "../Component/Modal/SignUpModal";
import LoginModal from "../Component/Modal/LoginModal";

const Header = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="ms-auto d-lg-flex w-50 text-center">
            <FormControl
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="me-2"
              style={{
                borderRadius: "21px",
                fontSize: "16px",
                textAlign: "center",
                paddingLeft: "40px",
              }}
            />
          </Form>

          <Nav className="ms-auto">
            <NavDropdown
              title="Create an Account it is free"
              id="basic-nav-dropdown"
            >
              <p
                style={{ cursor: "pointer", marginLeft: "20px" }}
                onClick={handleOpenSignupModal}
              >
                Sign Up
              </p>
              <SignupModal
                show={showSignupModal}
                handleClose={handleCloseSignupModal}
              />

              <p
                style={{ cursor: "pointer", marginLeft: "20px" }}
                onClick={handleOpenLoginModal}
              >
                Login
              </p>
              <LoginModal
                show={showLoginModal}
                handleClose={handleCloseLoginModal}
              />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
