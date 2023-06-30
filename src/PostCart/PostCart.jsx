import React, { useState } from "react";
import {
  BsFillPersonFill,
  BsFillBookFill,
  BsFillCalendarFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import PostModal from "../Component/PostModal/PostModal";

const PostCart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (textareaValue, selectedFile) => {
    console.log("Textarea value:", textareaValue);
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="post-cart-container">
      <div className="d-flex align-items-center gap-1  ">
        <img
          src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
        />
        <div>
          <span className="form-button" onClick={() => setShowModal(true)}>
            What`s your mind?
          </span>
        </div>
      </div>
      <div className="mt-4 d-flex ">
        <div className="text-center form-button-tow d-flex align-items-center justify-content-center">
          <p>
            <BsFillBookFill size={25} />
          </p>
          <p className="mx-1">Article</p>
        </div>
        <div className="text-center form-button-tow d-flex align-items-center justify-content-center">
          <p>
            <BsFillPersonFill size={25} />
          </p>
          <p className="mx-1 mt-1">Article</p>
        </div>
        <div className="text-center form-button-tow d-flex align-items-center justify-content-center">
          <p>
            <BsFillCalendarFill size={25} />
          </p>
          <p className="mx-1">Article</p>
        </div>{" "}
        <div className="text-center form-button-tow d-flex align-items-center justify-content-center  ">
          <p>
            <BsFillBriefcaseFill size={25} />
          </p>
          <p className="mx-1">Article</p>
        </div>
      </div>
      <PostModal showModal={showModal} setShowModal={setShowModal}></PostModal>
    </div>
  );
};

export default PostCart;
