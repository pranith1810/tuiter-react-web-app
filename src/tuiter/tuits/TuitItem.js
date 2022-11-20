import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

function TuitItem({ tuit, lastOne }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div
      className={`row flex-nowrap wd-bookmark-main wd-border-left-right wd-border-top ${
        lastOne ? "wd-border-bottom" : ""
      }`}
    >
      <img className="p-0 wd-avatar col-1" src={tuit.image} />
      <div className="wd-bookmark-content col-11">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="wd-user-bookmark-handle">{tuit.username}</div>
            <div className="wd-user-bookmark-id">@{tuit.handle} · </div>
            <div className="wd-bookmark-tuit-date">{tuit.time}</div>
          </div>
          <i
            className="bi bi-x-lg p-0"
            style={{ cursor: "pointer" }}
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
        </div>
        <div className="wd-user-tuit-content">{tuit.tuit}</div>
        {tuit.banner && (
          <div className="wd-content">
            <img
              className="wd-content-image wd-border-top wd-border-bottom wd-border-left-right"
              src={tuit.banner}
            />
            <div className="wd-content-image-text wd-border-bottom wd-border-left-right">
              <div className="wd-content-image-text-title">
                {tuit.bannerContentTitle}
              </div>
              <div className="wd-content-image-text-sub">
                {tuit.bannerContent}
              </div>
            </div>
          </div>
        )}
        <TuitStats
          likes={tuit.likes}
          replies={tuit.replies}
          retuits={tuit.retuits}
          liked={tuit.liked}
          dislikes={tuit.dislikes}
          disliked={tuit.disliked}
          tuit={tuit}
        />
      </div>
    </div>
  );
}

export default TuitItem;
