/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
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
import AllComment from "../../Component/AllComment/AllComment";
import { FaRegCommentDots } from "react-icons/fa";
import CrudDropDown from "../../Component/CRUD/CrudDropDown";

const EducationCart = ({ item }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const {
    _id,
    bloggerName,
    bloggerImage,
    blogImage,
    blogTitle,
    blogParagraph,
    category,
    like,
  } = item;

  const handleSeeMore = (_Id) => {
    setExpandedCard(_Id);
  };

  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLike = (_id) => {
    fetch(`https://atg-server-delta.vercel.app/education-like/${_id}`, {
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

  const [showComment, setShowComment] = useState(false);
  const handleCommentIcon = () => {
    setShowComment(true);
  };

  const education = "education";
  const url = `https://atg-server-delta.vercel.app/${education}/${_id}`;
  const handleDelete = () => {
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <Row>
          <Card.Img variant="top" src={blogImage} style={{ height: "250px" }} />

          <Card.Body>
            <h5 className="ms-2 mt-2">
              {category === "education" && (
                <>
                  <BsMortarboardFill className="me-1" /> Education
                </>
              )}
            </h5>
            <div className="d-flex justify-content-between mb-2">
              <Card.Title>{blogTitle}</Card.Title>
              <CrudDropDown
                deleteHandler={() => handleDelete(_id)}
                updateLink={`/update-education/${_id}`}
              />
            </div>
            <span>
              {expandedCard === _id
                ? blogParagraph
                : `${blogParagraph?.slice(0, 110)}...`}
            </span>
            {expandedCard !== _id && (
              <span
                className="see-more-btn"
                style={{ cursor: "pointer", color: "gray" }}
                onClick={() => handleSeeMore(_id)}
              >
                See More
              </span>
            )}
            {expandedCard === _id && (
              <>
                <span>{blogParagraph} </span>
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
                  src={bloggerImage}
                  alt="Poster"
                  className="poster-image"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <h5 className="poster-name ms-2 ">{bloggerName}</h5>
              </div>

              <FaRegCommentDots
                onClick={handleCommentIcon}
                size={24}
                style={{ cursor: "pointer" }}
              />
              {showComment ? <CommentForm _id={_id}></CommentForm> : " "}

              <div className="d-flex align-content-center mt-2">
                <button
                  onClick={() => handleLike(_id)}
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
                  {like}
                </button>

                <p className="mx-5 " style={{ fontSize: "20px" }}>
                  <BsFillEyeFill style={{ fontSize: "20px" }} /> 124k views
                </p>
                <p>
                  <BsFillShareFill
                    style={{ cursor: "pointer", fontSize: "20px" }}
                  />
                </p>
              </div>
            </div>
            {showComment ? <AllComment _id={_id}></AllComment> : " "}
          </Card.Body>
        </Row>
      </Card>
    </div>
  );
};

export default EducationCart;
