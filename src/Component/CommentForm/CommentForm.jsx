/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const CommentForm = ({ _id }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = {
      comment,
      postId: _id,
    };

    fetch(`https://atg-server-delta.vercel.app/article/${_id}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComment("");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="content">
        <Form.Control
          type="text"
          placeholder="Write you comment here and press Enter"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
