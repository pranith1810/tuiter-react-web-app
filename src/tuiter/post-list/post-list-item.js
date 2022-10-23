import React from "react";

const PostListItem = ({ post }) => {
  return (
    <div className="row flex-nowrap wd-bookmark-main wd-border-left-right wd-border-top">
      <img className="p-0 wd-avatar col-1" src={post.avatar} />
      <div className="wd-bookmark-content col-11">
        <div className="wd-user-bookmark-id-name">
          <div className="wd-user-bookmark-handle">{post.handle}</div>
          <div className="wd-user-bookmark-id">@{post.id} · </div>
          <div className="wd-bookmark-tuit-date">{post.date}</div>
        </div>
        <div className="wd-user-tuit-content">{post.content}</div>
        <div className="wd-content">
          <img
            className="wd-content-image wd-border-top wd-border-bottom wd-border-left-right"
            src={post.banner}
          />
          <div className="wd-content-image-text wd-border-bottom wd-border-left-right">
            <div className="wd-content-image-text-title">
              {post.bannerContentTitle}
            </div>
            <div className="wd-content-image-text-sub">
              {post.bannerContent}
            </div>
          </div>
        </div>
        <div className="wd-icons-div">
          <a href="#" className="wd-icon-number">
            <i className="bi bi-chat"></i>
            <p className="wd-icon-number-spacing">{post.comments}</p>
          </a>
          <a href="#" className="wd-icon-number">
            <i className="bi bi-arrow-repeat" aria-hidden="true"></i>
            <p className="wd-icon-number-spacing">{post.retweets}</p>
          </a>
          <a href="#" className="wd-icon-number">
            <i className="bi bi-heart" aria-hidden={true}></i>
            <p className="wd-icon-number-spacing">{post.hearts}</p>
          </a>
          <a href="#" className="wd-icon-number">
            <i className="bi bi-upload" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
