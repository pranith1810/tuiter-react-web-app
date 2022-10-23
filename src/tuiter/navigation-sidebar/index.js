import React from "react";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <div class="list-group-item">
        <i class="bi bi-align-top"></i>
      </div>
      <a className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-house-door-fill"></i>
          <div class="d-none d-xl-block ms-2">Home</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-hash"></i>
          <div class="d-none d-xl-block ms-2">Explore</div>
        </div>
      </a>
      <a
        className={`list-group-item ${
          active === "notifications" ? "active" : ""
        }`}
      >
        <div class="d-flex align-items-center">
          <i class="bi bi-bell-fill"></i>
          <div class="d-none d-xl-block ms-2">Notifications</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-envelope-fill"></i>
          <div class="d-none d-xl-block ms-2">Messages</div>
        </div>
      </a>
      <a
        className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}
      >
        <div class="d-flex align-items-center">
          <i class="bi bi-bookmark-fill"></i>
          <div class="d-none d-xl-block ms-2">Bookmarks</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-list-ul"></i>
          <div class="d-none d-xl-block ms-2">Lists</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "profile" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-person-fill"></i>
          <div class="d-none d-xl-block ms-2">Profile</div>
        </div>
      </a>
      <a className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <div class="d-flex align-items-center">
          <i class="bi bi-dash-circle-fill"></i>
          <div class="d-none d-xl-block ms-2">More</div>
        </div>
      </a>
    </div>
  );
};
export default NavigationSidebar;
