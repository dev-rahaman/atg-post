import React from "react";
import { Outlet } from "react-router-dom";
import NavTwo from "../Pages/Home/NaveTwo/NavTwo";
import RightSideBar from "../Component/RightSideBar/RightSideBar";

const Main = () => {
  return (
    <>
      <NavTwo></NavTwo>
      <div className="d-lg-flex" style={{ margin: "30px" }}>
        <Outlet></Outlet>
        <RightSideBar style={{ margin: "0 50px" }} />
      </div>
    </>
  );
};

export default Main;
