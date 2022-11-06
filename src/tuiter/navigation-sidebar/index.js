import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = ({}) => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];

  return (
    <div className="list-group">
      <div className="list-group-item">
        <i className="bi bi-align-top"></i>
      </div>
      <Link
        to="/tuiter"
        className={`list-group-item ${!active ? "active" : ""}`}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-house-door-fill"></i>
          <div className="d-none d-xl-block ms-2">Home</div>
        </div>
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item ${active === "explore" ? "active" : ""}`}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-hash"></i>
          <div className="d-none d-xl-block ms-2">Explore</div>
        </div>
      </Link>
      <Link to="/" className="list-group-item">
        <div className="d-flex align-items-center">
          <i className="bi bi-hourglass"></i>
          <div className="d-none d-xl-block ms-2">Labs</div>
        </div>
      </Link>
      <a
        className={`list-group-item ${
          active === "notifications" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-bell-fill"></i>
          <div className="d-none d-xl-block ms-2">Notifications</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <div className="d-flex align-items-center">
          <i className="bi bi-envelope-fill"></i>
          <div className="d-none d-xl-block ms-2">Messages</div>
        </div>
      </a>
      <a
        className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-bookmark-fill"></i>
          <div className="d-none d-xl-block ms-2">Bookmarks</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <div className="d-flex align-items-center">
          <i className="bi bi-list-ul"></i>
          <div className="d-none d-xl-block ms-2">Lists</div>
        </div>
      </a>
      <Link
        to="/tuiter/profile"
        className={`list-group-item ${
          active === "profile" || active === "edit-profile" ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-person-fill"></i>
          <div className="d-none d-xl-block ms-2">Profile</div>
        </div>
      </Link>
      <a className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <div className="d-flex align-items-center">
          <i className="bi bi-dash-circle-fill"></i>
          <div className="d-none d-xl-block ms-2">More</div>
        </div>
      </a>
    </div>
  );
};
export default NavigationSidebar;
