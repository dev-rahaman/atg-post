/* eslint-disable react/prop-types */
// import React from "react";
// import { NavDropdown } from "react-bootstrap";
// import { BsThreeDots } from "react-icons/bs";

// const CrudDropDown = ({ deleteLink, updateLink }) => {
//   return (
//     <div>
//       <NavDropdown
//         title={<BsThreeDots style={{ cursor: "pointer", fontSize: "25px" }} />}
//         id="basic-nav-dropdown"
//       >
//         <NavDropdown.Item href={deleteLink} className="custom-hover-bg">
//           Delete
//         </NavDropdown.Item>
//         <NavDropdown.Item href={updateLink} className="custom-hover-bg">
//           Update
//         </NavDropdown.Item>
//       </NavDropdown>
//     </div>
//   );
// };

import React from "react";
import { NavDropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

const CrudDropDown = ({ deleteHandler, updateLink }) => {
  return (
    <div>
      <NavDropdown
        title={<BsThreeDots style={{ cursor: "pointer", fontSize: "25px" }} />}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item className="custom-hover-bg" onClick={deleteHandler}>
          Delete
        </NavDropdown.Item>
        <NavDropdown.Item href={updateLink} className="custom-hover-bg">
          Update
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default CrudDropDown;
