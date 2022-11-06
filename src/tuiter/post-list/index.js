import React from "react";
import PostItem from "./post-list-item";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.tuits);

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
