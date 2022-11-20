import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

function TuitStats({
  replies,
  retuits,
  likes,
  liked,
  tuit,
  disliked,
  dislikes,
}) {
  const dispatch = useDispatch();

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
        <div
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: liked ? tuit.likes - 1 : tuit.likes + 1,
                liked: !tuit.liked,
              })
            )
          }
          className="d-flex align-items-center"
        >
          <i
            className={liked ? "bi bi-heart-fill wd-red-icon" : "bi bi-heart"}
            aria-hidden={true}
          ></i>
          <p className="wd-icon-number-spacing">{likes}</p>
        </div>
      </a>
      <a href="#" className="wd-icon-number">
        <div
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                disliked: !tuit.disliked,
              })
            )
          }
          className="d-flex align-items-center"
        >
          <i
            className={
              disliked
                ? "bi bi-hand-thumbs-down-fill"
                : "bi bi-hand-thumbs-down"
            }
            aria-hidden={true}
          ></i>
          <p className="wd-icon-number-spacing">{dislikes}</p>
        </div>
      </a>
      <a href="#" className="wd-icon-number">
        <i className="bi bi-upload" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default TuitStats;
