import React, { useState } from "react";
import WhoToFollowList from "../who-to-follow-list";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useNavigate } from "react-router";
import { editProfile } from "../profile/profile-reducer";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const [current, setCurrent] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    bio: profile.bio,
    location: profile.location,
    website: profile.website,
    dateOfBirth: profile.dateOfBirth,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    setCurrent({
      ...current,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    dispatch(editProfile(current));
    navigate("/tuiter/profile");
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-7 col-xl-7 wd-border-left-right wd-border-top wd-border-bottom p-0 wd-mid-profile-div">
        <div className="d-flex align-items-center justify-content-between ms-2 p-2">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-x wd-icon-size-big"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/tuiter/profile");
              }}
            ></i>
            <h3 className="fw-bold mb-0 ms-4">Edit Profile</h3>
          </div>
          <button
            type="button"
            className="btn btn-dark rounded-pill"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
        <div className="position-relative d-flex flex-column">
          <img className="w-100 wd-black-tint" src={profile.bannerPicture} />
          <img
            className="wd-avatar-edit-profile wd-black-tint"
            src={profile.profilePicture}
          />
          <div className="wd-icon-div wd-icon-cross-div">
            <i className="bi bi-x wd-icon-overlay"></i>
          </div>
          <div className="wd-icon-div wd-icon-camera-cover-div">
            <i className="bi bi-camera wd-icon-overlay"></i>
          </div>
          <div className="wd-icon-div wd-icon-camera-avatar-div">
            <i className="bi bi-camera wd-icon-overlay"></i>
          </div>
        </div>
        <div className="wd-edit-part ms-2 me-2">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder=" "
              value={current.firstName}
              onChange={handleFormChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder=" "
              value={current.lastName}
              onChange={handleFormChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Bio"
              id="bio"
              name="bio"
              style={{ height: "100px" }}
              value={current.bio}
              onChange={handleFormChange}
            ></textarea>
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              placeholder=" "
              value={current.location}
              onChange={handleFormChange}
            />
            <label htmlFor="location">Location</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="website"
              name="website"
              placeholder=" "
              value={current.website}
              onChange={handleFormChange}
            />
            <label htmlFor="website">Website</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder=" "
              value={current.dateOfBirth}
              onChange={handleFormChange}
            />
            <label htmlFor="dateOfBirth">Birth Date</label>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block col-lg-5 col-xl-5">
        <WhoToFollowList />
      </div>
    </div>
  );
};

export default EditProfile;
