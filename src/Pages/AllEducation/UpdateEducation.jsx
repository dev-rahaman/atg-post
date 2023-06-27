import React from "react";
import UpdateForm from "../../UpdateForm/UpdateForm";
import { useParams } from "react-router-dom";

const UpdateEducation = () => {
  const { id } = useParams();
  const education = "education";
  const url = `https://atg-server-delta.vercel.app/${education}/${id}`;
  const handleEducationSubmit = (formData) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  };

  const EducationFormFields = [
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
      label: "Education Image URL",
      type: "text",
      placeholder: "Education image URL",
    },
    {
      id: "blogTitle",
      label: "Education Title",
      type: "text",
      placeholder: "Education title",
    },
    {
      id: "blogParagraph",
      label: "Education Description",
      type: "textarea",
      placeholder: "Education Description",
    },
  ];

  return (
    <UpdateForm
      formTitle="Update Education"
      formFields={EducationFormFields}
      onSubmit={handleEducationSubmit}
    />
  );
};

export default UpdateEducation;
