import React from "react";
import UpdateForm from "../../UpdateForm/UpdateForm";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const job = "job";
  const url = `https://atg-server-delta.vercel.app/${job}/${id}`;

  const handleJobSubmit = (formData) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  };

  const jobFormFields = [
    {
      id: "bloggerName",
      label: "Poster Name",
      type: "text",
      placeholder: "Poster name",
    },
    {
      id: "bloggerImage",
      label: "Poster Image URL",
      type: "text",
      placeholder: "Poster image URL",
    },
    {
      id: "blogImage",
      label: "Job Image URL",
      type: "text",
      placeholder: "Job image URL",
    },
    {
      id: "blogTitle",
      label: "Job Title",
      type: "text",
      placeholder: "Job title",
    },
    {
      id: "blogParagraph",
      label: "Job Description",
      type: "textarea",
      placeholder: "Job Description",
    },
  ];

  return (
    <UpdateForm
      formTitle="Update Job"
      formFields={jobFormFields}
      onSubmit={handleJobSubmit}
    />
  );
};

export default UpdateJob;
