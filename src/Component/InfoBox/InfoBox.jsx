import React from "react";
import {
  BsBoxArrowRight,
  BsFillMoonFill,
  BsFillPatchQuestionFill,
  BsPersonCircle,
} from "react-icons/bs";
import { FaCog } from "react-icons/fa";

const InfoBox = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      style={{
        width: "350px",
        height: "300px",
        border: "1px solid black",
        padding: "10px",
        position: "absolute",
        top: "75px",
        right: "50",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        zIndex: "",
      }}
    >
      <div className="d-flex align-items-center custom-hover-bg">
        <p>
          <BsPersonCircle style={{ marginRight: "10px" }} size={24} />
        </p>
        <p className="text-lg-center fs-5">Rs Abdur Rahaman Sultany</p>
      </div>
      <div className="d-flex align-items-center custom-hover-bg">
        <p>
          <FaCog eUpFill style={{ marginRight: "10px" }} size={24} />
        </p>
        <p className="text-lg-center fs-5">Setting and Privacy</p>
      </div>
      <div className="d-flex align-items-center custom-hover-bg">
        <p>
          <BsFillMoonFill style={{ marginRight: "10px" }} size={24} />
        </p>
        <p className="text-lg-center fs-5">Dark Theme</p>
      </div>
      <div className="d-flex align-items-center custom-hover-bg">
        <p>
          <BsFillPatchQuestionFill style={{ marginRight: "10px" }} size={24} />
        </p>
        <p className="text-lg-center fs-5">Help Center</p>
      </div>
      <div className="d-flex align-items-center custom-hover-bg">
        <p>
          <BsBoxArrowRight style={{ marginRight: "10px" }} size={24} />
        </p>
        <button className="text-lg-center fs-5" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
