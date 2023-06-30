/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const ActiveTab = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveTab;
