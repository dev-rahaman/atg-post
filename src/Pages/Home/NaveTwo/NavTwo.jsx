import React, { useEffect, useRef, useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../../../Component/ActiveLink/ActiveLink";
import {
  BsFillCalendarEventFill,
  BsFillHandbagFill,
  BsFillPenFill,
  BsMortarboardFill,
} from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import InfoBox from "../../../Component/InfoBox/InfoBox";

const NavTwo = () => {
  const [showBox, setShowBox] = useState(false);
  const [user, setUser] = useState();

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowBox("");
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef]);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem("token");
    if (loggedUser) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-lg-flex justify-content-around "
          id="basic-navbar-nav"
        >
          <Nav className="mr-auto">
            <Nav.Item>
              <ActiveLink to="/">
                <FaHome className="me-3" size={24} />
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/articles">
                <BsFillPenFill className="me-3" size={24} />
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/events">
                <BsFillCalendarEventFill className="me-3" size={24} />
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/educations">
                <BsMortarboardFill className="me-3" size={24} />
              </ActiveLink>
            </Nav.Item>
            <Nav.Item>
              <ActiveLink to="/jobs">
                <BsFillHandbagFill className="me-3" size={24} />
              </ActiveLink>
            </Nav.Item>
          </Nav>
          {user ? (
            <Nav>
              <div ref={containerRef}>
                <div>
                  <img
                    src="https://rs-rahaman.github.io/Brittany-LG/img/rs%20abdur%20rhaman%20sultnay.jpg"
                    alt="item"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                  />
                </div>
                {showBox && <InfoBox />}
              </div>
              <NavDropdown
                title="Create a Post"
                id="basic-nav-dropdown"
                className="mt-2"
              >
                <Link to="/post-article" className=" custom-hover-bg">
                  Write an Article
                </Link>
                <Link to="/post-education" className=" custom-hover-bg">
                  Write Education
                </Link>
                <Link to="/post-event" className=" custom-hover-bg">
                  Post Event
                </Link>
                <Link to="/post-job" className=" custom-hover-bg">
                  Post a Job
                </Link>
              </NavDropdown>
            </Nav>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-primary ">Login</button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavTwo;
