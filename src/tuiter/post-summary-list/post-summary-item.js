import React from "react";

const PostSummaryItem = ({ post }) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-10">
          {post.topic ? (
            <div className="text-secondary">{post.topic}</div>
          ) : null}
          <div>
            {post.username ? (
              <span className="fw-bold">{post.username}</span>
            ) : null}
            <i className="bi bi-check-circle ms-1" aria-hidden={true}></i>
            {post.date ? (
              <span className="text-secondary"> {"·" + post.date}</span>
            ) : null}
          </div>
          {post.title ? <div className="fw-bold">{post.title}</div> : null}
          {post.tweets ? (
            <div className="text-secondary">{post.tweets} Tweets</div>
          ) : null}
        </div>
        <div className="col-2 p-0">
          <img src={post.avatar} className="rounded" width="80%" height="80%" />
        </div>
      </div>
    </li>
  );
};

export default PostSummaryItem;
