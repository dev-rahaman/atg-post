import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import UserDetails from "./UserDetails";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        if (data.length > 0) {
          setSelectedUser(data[10]);
        }
      });
  }, []);

  return (
    <div className="m-5">
      <Container>
        <Row>
          <Col lg={6} className="user-list">
            <div>
              <h2
                style={{
                  backgroundColor: "#C5DFFF",
                  borderRadius: "10px 10px 0 0",
                }}
                className="p-2 text-center text-uppercase"
              >
                User List
              </h2>
            </div>
            {isLoading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              users &&
              users.map((user, idx) => (
                <div
                  key={idx}
                  className={`${selectedUser === user ? "active" : ""}`}
                  style={{
                    backgroundColor: "#ECECEC",
                    margin: "10px 0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="me-3">
                    <p>{idx + 1}</p>
                  </div>
                  <div className="me-3">
                    <img
                      src={user?.avatar}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                  <div>
                    <h5>{user?.profile?.username}</h5>
                  </div>
                </div>
              ))
            )}
          </Col>
          <Col lg={6}>
            <UserDetails user={selectedUser} className="mt-3 mt-lg-0" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserList;
