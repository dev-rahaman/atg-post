/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import "./modal.css";
import { Link } from "react-router-dom";

const LoginModal = ({ show, handleClose, handleOpenSignupModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", { email, password });

    setEmail("");
    setPassword("");

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

      <h2 style={{ padding: "0 20px" }}>Login</h2>

      <Modal.Body>
        <div className="d-flex align-items-center ">
          <div className="w-50">
            <Form>
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
              <Button
                variant="primary"
                className="mt-3 w-100 rounded-5 "
                onClick={handleLogin}
              >
                Login
              </Button>

              <div className="mt-2 ">
                <p className="w-100 btn bg-light border">
                  <BsGoogle /> Login With Google
                </p>
                <p className="w-100 btn bg-light border">
                  <BsFacebook /> Login With Facebook
                </p>
              </div>

              <div className="text-center mt-3 ">
                <Link to={"/"}>Forget Password</Link>
              </div>
            </Form>
          </div>

          <div className="w-50">
            <div style={{ marginLeft: "50px", marginBottom: "100px" }}>
              <span>Don`t have an account yet? </span>
              <span
                onClick={handleOpenSignupModal}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Sign Up
              </span>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXI-LRqOJfiGUlXZb8rNwX6FpsMfi0IRSYOpVJ5Ib-WOClv655hb8_MILMG4kFR-2ssA&usqp=CAU"
              className="img-fluid  m-5"
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

export default LoginModal;
