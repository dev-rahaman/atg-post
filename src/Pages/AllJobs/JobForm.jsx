import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const JobForm = () => {
  const [bloggerName, setBloggerName] = useState("");
  const [bloggerImage, setBloggerImage] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogParagraph, setBlogParagraph] = useState("");
  const [blogImage, setBlogImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      bloggerName,
      bloggerImage,
      blogTitle,
      blogParagraph,
      blogImage,
      category: "job",
    };

    fetch("https://atg-server-delta.vercel.app/job", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };

  return (
    <Container>
      <h2 className="text-center text-primary  mt-5 ">Post A Article</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="bloggerName">
          <Form.Label>Poster Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Poster name"
            value={bloggerName}
            onChange={(e) => setBloggerName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="bloggerImage">
          <Form.Label>Poster Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Poster image URL"
            value={bloggerImage}
            onChange={(e) => setBloggerImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogImage">
          <Form.Label>JOb Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jobs image URL"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Job title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogParagraph">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Job Description"
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

export default JobForm;
