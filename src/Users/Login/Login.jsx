import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("/");

  const token = "dsljfosithjaohgv";

  const handleLogin = (e) => {
    e.preventDefault();

    const emailPassword = {
      email,
      password,
    };

    fetch("https://atg-server-delta.vercel.app/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(emailPassword),
    });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("token", token);
    console.log("sign up successfully");
    navigate("/");
  };

  return (
    <Container>
      <h2 className="text-center text-primary  mt-5 ">Login Now!</h2>
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" className="mt-3" type="submit">
          Login Now
        </Button>
      </Form>
      <Link to={"/registration"}>Register</Link>
      <Link to={"/forget-password"}>Forget Password</Link>
    </Container>
  );
};

export default Login;
