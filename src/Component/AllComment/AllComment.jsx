/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const AllComment = ({ _id }) => {
  const [allComment, setAllComment] = useState();
  const [displayedComments, setDisplayedComments] = useState(1);

  useEffect(() => {
    fetch(`https://atg-server-delta.vercel.app/article/${_id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllComment(data);
      });
  }, [_id]);

  const handleSeeMore = () => {
    setDisplayedComments((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {allComment &&
        allComment
          .slice(0, displayedComments && displayedComments)
          .map((item) => (
            <>
              <div key={item._id} className="m-auto w-75 ">
                <p className="comment-bg"> {item?.comment}</p>
                <div
                  style={{ marginTop: "-17px", display: "flex", gap: "15px" }}
                >
                  <p className="" style={{ cursor: "pointer" }}>
                    Delete
                  </p>
                  <p style={{ cursor: "pointer" }}>Reply</p>
                  <span>{item.createdAt}</span>
                </div>
              </div>
            </>
          ))}
      {displayedComments < allComment?.length && (
        <a
          onClick={handleSeeMore}
          className="text-decoration-underline text-dark"
        >
          View More Comments{" "}
        </a>
      )}
    </div>
  );
};

export default AllComment;
