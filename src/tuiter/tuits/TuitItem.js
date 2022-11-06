import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

function TuitItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="row flex-nowrap wd-bookmark-main wd-border-left-right wd-border-top">
      <img className="p-0 wd-avatar col-1" src={tuit.avatar} />
      <div className="wd-bookmark-content col-11">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="wd-user-bookmark-handle">{tuit.name}</div>
            <div className="wd-user-bookmark-id">@{tuit.handle} · </div>
            <div className="wd-bookmark-tuit-date">{tuit.date}</div>
          </div>
          <i
            className="bi bi-x-lg p-0"
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
        />
      </div>
    </div>
  );
}

export default TuitItem;
