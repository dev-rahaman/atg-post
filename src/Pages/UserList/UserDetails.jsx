/* eslint-disable react/prop-types */
import React from "react";

const UserDetails = ({ user }) => {
  if (!user) {
    return <p className="text-center">not user is selected!</p>;
  }

  return (
    <>
      <div className="user-list">
        <h2
          style={{ backgroundColor: "#C5DFFF", borderRadius: "10px 10px 0 0" }}
          className="p-2 text-center text-uppercase"
        >
          User details
        </h2>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <img
            src={user?.avatar}
            style={{ width: "131px", height: "131px", borderRadius: "100px" }}
            alt=""
          />
          <h4 className="m-2">@{user?.profile?.username}</h4>
          <p
            className="rounded p-2"
            style={{
              width: "350px",
              backgroundColor: "#6C6C6C",
              color: "#DBDBDB",
            }}
          >
            {user?.Bio}
          </p>

          <div className="mb-3">
            <p className="m-0">Full Name</p>
            <h6
              className="email  rounded p-2 "
              style={{
                width: "350px",
                backgroundColor: "#6C6C6C",
                color: "#DBDBDB",
              }}
            >
              {user?.profile?.firstName && user?.profile?.lastName
                ? user?.profile?.firstName + " " + user?.profile?.lastName
                : ""}
            </h6>
          </div>

          <div className="mb-3">
            <p className="m-0">Job Title</p>
            <h6
              className="email  rounded p-2 "
              style={{
                width: "350px",
                backgroundColor: "#6C6C6C",
                color: "#DBDBDB",
              }}
            >
              {user?.jobTitle}
            </h6>
          </div>

          <div className="mb-3">
            <p className="m-0">Email</p>
            <h6
              className="email  rounded p-2 "
              style={{
                width: "350px",
                backgroundColor: "#6C6C6C",
                color: "#DBDBDB",
              }}
            >
              {user?.profile?.email}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
