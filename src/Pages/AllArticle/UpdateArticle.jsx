import React from "react";
import UpdateForm from "../../UpdateForm/UpdateForm";
import { useParams } from "react-router-dom";

const UpdateArticle = () => {
  const { id } = useParams();
  const article = "article";
  const url = `https://atg-server-delta.vercel.app/${article}/${id}`;

  const handleArticleSubmit = (formData) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  };

  const ArticleFormFields = [
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
      label: "Article Image URL",
      type: "text",
      placeholder: "Article image URL",
    },
    {
      id: "blogTitle",
      label: "Article Title",
      type: "text",
      placeholder: "Article title",
    },
    {
      id: "blogParagraph",
      label: "Article Description",
      type: "textarea",
      placeholder: "Article Description",
    },
  ];

  return (
    <UpdateForm
      formTitle="Update Article"
      formFields={ArticleFormFields}
      onSubmit={handleArticleSubmit}
    />
  );
};

export default UpdateArticle;
