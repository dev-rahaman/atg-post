import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EducationForm = () => {
  const [bloggerName, setBloggerName] = useState("");
  const [bloggerImage, setBloggerImage] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogParagraph, setBlogParagraph] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const navigate = useNavigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    const education = {
      bloggerName,
      bloggerImage,
      blogImage,
      blogTitle,
      blogParagraph,
      category: "education",
      like: "0",
    };

    fetch("https://atg-server-delta.vercel.app/education", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(education),
    });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Education is posted",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <Container>
      <h2 className="text-center text-primary  mt-5 ">Write A Education</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="bloggerName">
          <Form.Label>Writers Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Writers name"
            value={bloggerName}
            onChange={(e) => setBloggerName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="bloggerImage">
          <Form.Label>writers Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Writers image URL"
            value={bloggerImage}
            onChange={(e) => setBloggerImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogImage">
          <Form.Label>Education Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Education image URL"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogTitle">
          <Form.Label>Education Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Education Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogParagraph">
          <Form.Label>education Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Education Description"
            value={blogParagraph}
            onChange={(e) => setBlogParagraph(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EducationForm;
