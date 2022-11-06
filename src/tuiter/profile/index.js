import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const editButtonClick = () => {
    navigate("/tuiter/edit-profile");
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-7 col-xl-7 wd-border-left-right wd-border-top wd-border-bottom p-0 wd-mid-profile-div">
        <div className="d-flex align-items-center ms-4 ps-2">
          <i className="bi bi-arrow-left"></i>
          <div className="ms-5">
            <h3 className="fw-bold mb-0">
              {profile.firstName + " " + profile.lastName}
            </h3>
            <div className="text-secondary">{profile.tuits} Tweets</div>
          </div>
        </div>
        <div className="position-relative d-flex flex-column">
          <img className="w-100" src={profile.bannerPicture} />
          <button
            type="button"
            className="btn btn-light m-2 border rounded-pill align-self-end"
            onClick={editButtonClick}
          >
            Edit Profile
          </button>
          <img className="wd-avatar-profile" src={profile.profilePicture} />
        </div>
        <div className="mt-4 ms-4">
          <div>
            <h3 className="fw-bold mb-0">
              {profile.firstName + " " + profile.lastName}
            </h3>
            <div className="text-secondary">{profile.handle}</div>
          </div>
          <p className="mt-2 mb-0">{profile.bio}</p>
          <div className="d-flex text-secondary mt-2 mb-2">
            <span className="me-3">
              <i className="bi bi-geo-alt me-1"></i>
              {profile.location}
            </span>
            <span className="me-3">
              <i className="bi bi-balloon me-1"></i>
              {"Born " +
                new Date(profile.dateOfBirth.replace("-", "/"))
                  .toDateString()
                  .slice(3)}
            </span>
            <span className="me-3">
              <i className="bi bi-calendar me-1"></i>
              {"Joined " + profile.dateJoined}
            </span>
          </div>
          <div className="d-flex mb-2">
            <span className="me-4">
              <span className="fw-bold">{profile.followingCount}</span>{" "}
              <span className="text-secondary">Following</span>
            </span>
            <span>
              <span className="fw-bold">{profile.followersCount}</span>{" "}
              <span className="text-secondary">Followers</span>
            </span>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block col-lg-5 col-xl-5">
        <WhoToFollowList />
      </div>
    </div>
  );
};

export default Profile;
