import React from "react";

const WhoToFollowListItem = ({ who }) => {
  return (
    <li className="list-group-item">
      <div className="row w-100 align-items-center">
        <div className="col-7 col-xl-9">
          <div className="d-flex align-items-center">
            <img
              src={who.avatarIcon}
              width="20%"
              height="20%"
              className="rounded-circle"
            />
            <div className="ms-2">
              <div>
                <span className="fw-bold">{who.userName}</span>
                <i className="bi bi-check-circle ms-1" aria-hidden={true}></i>
              </div>
              <div>@{who.handle}</div>
            </div>
          </div>
        </div>
        <div className="col-5 col-xl-3">
          <button className="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
