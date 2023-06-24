import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import {
  BsFillShareFill,
  BsFillEyeFill,
  BsThreeDots,
  BsFillPenFill,
  BsFillHandbagFill,
  BsFillCalendarEventFill,
  BsMortarboardFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";
import CommentForm from "../../Component/CommentForm/CommentForm";

const Home = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch("https://atg-server-delta.vercel.app/all-data")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setArticle(data);
      });
  }, []);

  const [expandedCard, setExpandedCard] = useState(null);

  const handleSeeMore = (idx) => {
    setExpandedCard(idx);
  };

  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLike = (_id) => {
    fetch(`http://localhost:5000/like/${"education"}/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDisabled(true);
        setLiked(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div>
          <Col lg={12} md={12} sm={12}>
            {article.map((item, idx) => (
              <Card key={idx} style={{ marginBottom: "20px" }}>
                <Row>
                  <Card.Img
                    variant="top"
                    src={item.blogImage}
                    style={{ height: "250px" }}
                  />

                  <Card.Body>
                    <h5 className="ms-2 mt-2">
                      {item.category === "article" && (
                        <>
                          <BsFillPenFill className="me-1" /> Article
                        </>
                      )}
                      {item.category === "education" && (
                        <>
                          <BsMortarboardFill className="me-1" /> Education
                        </>
                      )}
                      {item.category === "event" && (
                        <>
                          <BsFillCalendarEventFill className="me-1" /> Event
                        </>
                      )}
                      {item.category === "job" && (
                        <>
                          <BsFillHandbagFill className="me-1" /> Job
                        </>
                      )}
                    </h5>
                    <div className="d-flex justify-content-between mb-2">
                      <Card.Title>{item.blogTitle}</Card.Title>
                      <BsThreeDots style={{ cursor: "pointer" }} />
                    </div>
                    <span>
                      {expandedCard === idx
                        ? item.blogParagraph
                        : `${item.blogParagraph.slice(0, 110)}...`}
                    </span>
                    {expandedCard !== idx && (
                      <span
                        className="see-more-btn"
                        style={{ cursor: "pointer", color: "gray" }}
                        onClick={() => handleSeeMore(idx)}
                      >
                        See More
                      </span>
                    )}
                    {expandedCard === idx && (
                      <>
                        <span>{item.blogParagraph} </span>
                        <span
                          style={{ cursor: "pointer", color: "gray" }}
                          className="see-less-btn"
                          onClick={() => setExpandedCard(null)}
                        >
                          See Less
                        </span>
                      </>
                    )}

                    <div className="poster-info d-flex align-items-center justify-content-between  mt-3 ">
                      <div className="left d-flex align-items-center">
                        <img
                          src={item.bloggerImage}
                          alt="Poster"
                          className="poster-image"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        <h5 className="poster-name ms-2 ">
                          {item.bloggerName}
                        </h5>
                      </div>
                      <CommentForm></CommentForm>
                      <div className="d-flex align-content-center mt-2   ">
                        <button
                          onClick={() => handleLike(item?._id)}
                          disabled={disabled}
                          style={{
                            fontSize: "20px",
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <BsFillSuitHeartFill
                            color={liked ? "red" : "black"}
                            style={{
                              marginRight: "10px",
                            }}
                          />
                          {item.like}
                        </button>

                        <p className="mx-5">
                          <BsFillEyeFill /> 124k views
                        </p>
                        <p>
                          <BsFillShareFill style={{ cursor: "pointer" }} />
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Row>
              </Card>
            ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Home;
