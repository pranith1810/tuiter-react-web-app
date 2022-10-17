const NavigationSidebar = (active) => {
  return `
  <div class="list-group">
  <div class="list-group-item">
      <i class="fa-solid fa-t"></i>
  </div>
  <a href="../HomeScreen/index.html"
      class="list-group-item list-group-item-action ${
        active === "home" ? "active" : ""
      }">
      <div class="d-flex align-items-center">
          <i class="fa fa-home"></i>
          <div class="d-none d-xl-block ms-2">Home</div>
      </div>
  </a>
  <a href="../explore/index.html" class="list-group-item list-group-item-action ${
    active === "explore" ? "active" : ""
  }">
      <div class="d-flex align-items-center">
          <i class="fa fa-hashtag"></i>
          <div class="d-none d-xl-block ms-2">Explore</div>
      </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action ${
    active === "notifications" ? "active" : ""
  }">
      <div class="d-flex align-items-center">
          <i class="fa fa-bell"></i>
          <div class="d-none d-xl-block ms-2">Notifications</div>
      </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action ${
    active === "messages" ? "active" : ""
  }">
      <div class="d-flex align-items-center">
          <i class="fa fa-envelope"></i>
          <div class="d-none d-xl-block ms-2">Messages</div>
      </div>
  </a>
  <a href="../bookmarks/index.html"
      class="list-group-item  list-group-item-action ${
        active === "bookmarks" ? "active" : ""
      }">
      <div class="d-flex align-items-center">
          <i class="fa fa-bookmark"></i>
          <div class="d-none d-xl-block ms-2">Bookmarks</div>
      </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action ${
    active === "lists" ? "active" : ""
  }">
      <div class="d-flex align-items-center">
          <i class="fa fa-list"></i>
          <div class="d-none d-xl-block ms-2">Lists</div>
      </div>
  </a>
  <a href="../profile.html"
      class="list-group-item list-group-item-action ${
        active === "profile" ? "active" : ""
      }">
      <div class="d-flex align-items-center">
          <i class="fa fa-user"></i>
          <div class="d-none d-xl-block ms-2">Profile</div>
      </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action ${
    active === "more" ? "active" : ""
  }">
      <div class="d-flex align-items-center">
          <i class="fa fa-minus-circle"></i>
          <div class="d-none d-xl-block ms-2">More</div>
      </div>
  </a>
</div>
<a href="../tuit.html" class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</a>
        `;
};

export default NavigationSidebar;
