import React from "react";
import exploreItems from "./exploreItems.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      {exploreItems.map((post) => (
        <PostSummaryItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
