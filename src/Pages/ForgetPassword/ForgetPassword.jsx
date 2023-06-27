import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const token = "forget-token";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("/set-new-password");

  const handleForgetPassword = (e) => {
    e.preventDefault();

    const formData = {
      email,
    };

    fetch("https://atg-server-delta.vercel.app/forgot-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    localStorage.setItem("forget-token", token);
    localStorage.setItem("email", email);
    navigate("/set-new-password");
  };

  return (
    <div>
      <Form onSubmit={handleForgetPassword} className="col-6 m-auto">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgetPassword;
