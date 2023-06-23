import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";
import NavTwo from "../Pages/Home/NaveTwo/NavTwo";
import RightSideBar from "../Component/RightSideBar/RightSideBar";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <NavTwo></NavTwo>
      <div className="d-lg-flex" style={{ margin: "30px" }}>
        <Outlet></Outlet>
        <RightSideBar style={{ margin: "0 50px" }} />
      </div>
    </>
  );
};

export default Main;
