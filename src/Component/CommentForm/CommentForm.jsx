import React, { useState } from "react";
import { Form } from "react-bootstrap";
const CommentForm = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <Form>
      <Form.Group controlId="formComment">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "300px" }}
        />
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
