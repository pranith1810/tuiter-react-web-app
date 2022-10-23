import React from "react";
import "./index.css";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";

const Home = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7 col-xl-7">
        <PostList />
      </div>
      <div className="d-none d-lg-block col-lg-5 col-xl-5">
        <PostSummaryList />
      </div>
    </div>
  );
};

export default Home;
