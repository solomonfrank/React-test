import React from "react";

const Comments = ({ comments }) => {
return (
  comments.map((comment, idx) =><div key={idx}>comment</div>)
)
};
export default Comments;
