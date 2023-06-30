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
import UpdateJob from "../Pages/AllJobs/UpdateJob";
import UpdateArticle from "../Pages/AllArticle/UpdateArticle";
import UpdateEducation from "../Pages/AllEducation/UpdateEducation";
import UpdateEvent from "../Pages/AllEvent/UpdateEvent";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import SetNewPassword from "../Pages/ForgetPassword/SetNewPassword";
import PostCart from "../PostCart/PostCart";
import PostModal from "../Component/PostModal/PostModal";
import UserList from "../Pages/UserList/UserList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://atg-server-delta.vercel.app/all-data"),
      },
      // posting routers here
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

      // updating routers here`s
      {
        path: "/update-article/:id",
        element: <UpdateArticle></UpdateArticle>,
      },
      {
        path: "/update-education/:id",
        element: <UpdateEducation></UpdateEducation>,
      },
      {
        path: "/update-event/:id",
        element: <UpdateEvent></UpdateEvent>,
      },
      {
        path: "/update-job/:id",
        element: <UpdateJob></UpdateJob>,
      },

      // getting routers here`s
      {
        path: "/all-post",
        element: <Home></Home>,
        loader: () => fetch("https://atg-server-delta.vercel.app/all-data"),
      },
      {
        path: "/articles",
        element: <AllArticle></AllArticle>,
        loader: () => fetch("https://atg-server-delta.vercel.app/articles"),
      },
      {
        path: "/educations",
        element: <AllEducation></AllEducation>,
        loader: () => fetch("https://atg-server-delta.vercel.app/educations"),
      },
      {
        path: "/events",
        element: <AllEvent></AllEvent>,
        loader: () => fetch("https://atg-server-delta.vercel.app/events"),
      },
      {
        path: "/jobs",
        element: <AllJob></AllJob>,
        loader: () => fetch("https://atg-server-delta.vercel.app/jobs"),
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
  {
    path: "/form",
    element: <PostModal></PostModal>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword></SetNewPassword>,
  },
  {
    path: "/user-list",
    element: <UserList></UserList>,
  },
]);

export default Router;
