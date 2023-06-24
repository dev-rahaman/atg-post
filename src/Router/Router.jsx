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
import Login from "../Users/Login/Login";
import Registration from "../Users/Registration/Registration";

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
        loader: () => fetch("https://atg-server-delta.vercel.app/articles"),
      },
      {
        path: "/all-event",
        element: <AllEvent></AllEvent>,
        loader: () => fetch("https://atg-server-delta.vercel.app/event"),
      },
      {
        path: "/all-education",
        element: <AllEducation></AllEducation>,
        loader: () => fetch("https://atg-server-delta.vercel.app/education"),
      },
      {
        path: "/all-jobs",
        element: <AllJob></AllJob>,
        loader: () => fetch("https://atg-server-delta.vercel.app/job"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default Router;
