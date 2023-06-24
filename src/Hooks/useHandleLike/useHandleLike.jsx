import { useState } from "react";

const useLike = () => {
  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLike = (_id) => {
    fetch(`http://localhost:5000/like/${_id}`, {
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

  return { liked, disabled, handleLike };
};

export default useLike;
