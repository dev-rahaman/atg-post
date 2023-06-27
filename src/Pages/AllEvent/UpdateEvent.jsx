import React from "react";
import UpdateForm from "../../UpdateForm/UpdateForm";
import { useParams } from "react-router-dom";

const UpdateEvent = () => {
  const { id } = useParams();
  const event = "event";

  const handleEventSubmit = (formData) => {
    fetch(`https://atg-server-delta.vercel.app/${event}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  };

  const EventFormFields = [
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
      label: "Event Image URL",
      type: "text",
      placeholder: "Event image URL",
    },
    {
      id: "blogTitle",
      label: "Event Title",
      type: "text",
      placeholder: "Event title",
    },
    {
      id: "blogParagraph",
      label: "Event Description",
      type: "textarea",
      placeholder: "Event Description",
    },
  ];

  return (
    <UpdateForm
      formTitle="Update Events"
      formFields={EventFormFields}
      onSubmit={handleEventSubmit}
    />
  );
};

export default UpdateEvent;
