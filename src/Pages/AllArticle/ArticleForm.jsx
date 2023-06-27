import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ArticleForm = () => {
  const [bloggerName, setBloggerName] = useState("");
  const [bloggerImage, setBloggerImage] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogParagraph, setBlogParagraph] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const navigate = useNavigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      bloggerName,
      bloggerImage,
      blogImage,
      blogTitle,
      blogParagraph,
      category: "article",
      like: "0",
    };

    fetch("https://atg-server-delta.vercel.app/article", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(article),
    });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Article is posted",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <Container>
      <h2 className="text-center text-primary  mt-5 ">Write A Article</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="bloggerName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name"
            value={bloggerName}
            onChange={(e) => setBloggerName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="bloggerImage">
          <Form.Label>Writer Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="your image URL"
            value={bloggerImage}
            onChange={(e) => setBloggerImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogImage">
          <Form.Label>Article Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="article image URL"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogTitle">
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="article title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="blogParagraph">
          <Form.Label>Article Paragraph</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="article paragraph"
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

export default ArticleForm;
