import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllArticle from "../Pages/AllArticle/AllArticle";
import AllEducation from "../Pages/AllEducation/AllEducation";
import AllJob from "../Pages/AllJobs/AllJob";
import AllEvent from "../Pages/AllEvent/AllEvent";
import ArticleForm from "../Pages/AllArticle/ArticleForm";
import EducationForm from "../Pages/AllEducation/EducationForm";
import JobForm from "../Pages/AllJobs/JobForm";
import EventForm from "../Pages/AllEvent/EventForm";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post-article",
        element: <ArticleForm></ArticleForm>,
      },
      {
        path: "/post-education",
        element: <EducationForm></EducationForm>,
      },
      {
        path: "/post-event",
        element: <EventForm></EventForm>,
      },
      {
        path: "/post-job",
        element: <JobForm></JobForm>,
      },
      {
        path: "/all-post",
        element: <Home></Home>,
      },
      {
        path: "/all-article",
        element: <AllArticle></AllArticle>,
      },
      {
        path: "/all-event",
        element: <AllEvent></AllEvent>,
      },
      {
        path: "/all-education",
        element: <AllEducation></AllEducation>,
      },
      {
        path: "/all-jobs",
        element: <AllJob></AllJob>,
      },
    ],
  },
]);

export default Router;
