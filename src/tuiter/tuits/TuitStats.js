import React from "react";

function TuitStats({ replies, retuits, likes, liked }) {
  return (
    <div className="wd-icons-div">
      <a href="#" className="wd-icon-number">
        <i className="bi bi-chat"></i>
        <p className="wd-icon-number-spacing">{replies}</p>
      </a>
      <a href="#" className="wd-icon-number">
        <i className="bi bi-arrow-repeat" aria-hidden="true"></i>
        <p className="wd-icon-number-spacing">{retuits}</p>
      </a>
      <a href="#" className="wd-icon-number">
        <i
          className={liked ? "bi bi-heart-fill wd-red-icon" : "bi bi-heart"}
          aria-hidden={true}
        ></i>
        <p className="wd-icon-number-spacing">{likes}</p>
      </a>
      <a href="#" className="wd-icon-number">
        <i className="bi bi-upload" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default TuitStats;
