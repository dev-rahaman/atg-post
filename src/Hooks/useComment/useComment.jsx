import { useEffect } from "react";

const useComment = ({ _id }) => {
  useEffect(() => {
    fetch(`https://atg-server-delta.vercel.app/article/${_id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [_id]);
};

export default useComment;
