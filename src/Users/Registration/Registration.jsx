import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate("/");

  const token = "dsljfosithjaohgv";
  const handleSignUp = (e) => {
    e.preventDefault();

    const users = {
      email,
      password,
      userName,
    };

    fetch("https://atg-server-delta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    });
    localStorage.setItem("token", token);
    console.log("sign up successfully");
    navigate("/");
  };

  return (
    <Container>
      <h2 className="text-center text-primary  mt-5 ">Registration Now!</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-3" type="submit">
          Register Now
        </Button>
      </Form>
      <Link to={"/login"}>Login</Link>
    </Container>
  );
};

export default Registration;
