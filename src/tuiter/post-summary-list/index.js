import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  const tuits = useSelector((state) => state.tuits);

  return (
    <ul className="list-group">
      {tuits.map((post) => (
        <PostSummaryItem post={post} key={post._id} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
