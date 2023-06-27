/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = ({ formTitle, formFields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate("/");

  const handleFieldChange = (fieldId, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Update is Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <Container>
      <h2 className="text-center text-primary mt-5">{formTitle}</h2>
      <Form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <Form.Group controlId={field.id} key={field.id}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id] || ""}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateForm;
