/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modal.css";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignupModal = ({ show, handleClose, handleOpenLoginModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("Signup:", { email, password });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      className="custom-modal"
    >
      <p
        style={{
          padding: "10px 20px",
          backgroundColor: "#d7ff988e",
          color: "#00a71c",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        nobis nesciunt laboriosam!
      </p>

      <h2 style={{ padding: "0 20px" }}>Sign Up</h2>

      <Modal.Body>
        <div className="d-flex align-items-center ">
          <div className="w-50">
            <Form>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" className="mt-3 w-100 rounded-5 ">
                Create an Account
              </Button>

              <div className="mt-2 ">
                <p className="w-100 btn bg-light border">
                  <BsGoogle /> Login With Google
                </p>
                <p className="w-100 btn bg-light border">
                  <BsFacebook /> Login With Facebook
                </p>
              </div>
            </Form>
          </div>

          <div className="w-50">
            <div style={{ marginLeft: "50px", marginBottom: "100px" }}>
              <span>Already Have an Account? </span>
              <span
                onClick={handleClose}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Login
              </span>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXI-LRqOJfiGUlXZb8rNwX6FpsMfi0IRSYOpVJ5Ib-WOClv655hb8_MILMG4kFR-2ssA&usqp=CAU"
              alt="Your Image"
              className="img-fluid rounded m-2"
            />
            <p className="m-5">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
