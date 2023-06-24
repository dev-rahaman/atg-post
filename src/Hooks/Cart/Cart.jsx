/* eslint-disable react/prop-types */
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
import useSeeMore from "../useSeemore/useSeeMore";
import useLike from "../useHandleLike/useHandleLike";
import { useState } from "react";

const Cart = ({
  _id,
  bloggerName,
  bloggerImage,
  blogImage,
  blogTitle,
  blogParagraph,
  category,
  like,
}) => {
  //   const [expandedCard, setExpandedCard] = useSeeMore();
  const { handleLike, liked, disabled } = useLike("articles");
  const [expandedCard, setExpandedCard] = useState(null);

  const handleSeeMore = (_Id) => {
    setExpandedCard(_Id);
  };
  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <Row>
          <Card.Img variant="top" src={blogImage} style={{ height: "250px" }} />

          <Card.Body>
            <h5 className="ms-2 mt-2">
              {category === "article" && (
                <>
                  <BsFillPenFill className="me-1" /> Article
                </>
              )}
              {category === "education" && (
                <>
                  <BsMortarboardFill className="me-1" /> Education
                </>
              )}
              {category === "event" && (
                <>
                  <BsFillCalendarEventFill className="me-1" /> Event
                </>
              )}
              {category === "job" && (
                <>
                  <BsFillHandbagFill className="me-1" /> Job
                </>
              )}
            </h5>
            <div className="d-flex justify-content-between mb-2">
              <Card.Title>{blogTitle}</Card.Title>
              <BsThreeDots style={{ cursor: "pointer" }} />

              <br />
            </div>
            <span>
              {expandedCard === _id
                ? blogParagraph
                : `${blogParagraph.slice(0, 110)}...`}
            </span>
            {expandedCard !== _id && (
              <span
                className="see-more-btn"
                style={{ cursor: "pointer", color: "gray" }}
                onClick={() => setExpandedCard(_id)}
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
              <CommentForm></CommentForm>
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
          </Card.Body>
        </Row>
      </Card>
    </div>
  );
};

export default Cart;