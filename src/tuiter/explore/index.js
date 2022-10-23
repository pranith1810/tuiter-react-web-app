import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import { Link } from "react-router-dom";
import WhoToFollowList from "../who-to-follow-list";

const Explore = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7 col-xl-7">
        <div className="row align-items-center">
          <div className="col-11">
            <div className="position-relative">
              <input
                className="ps-5 form-control rounded-pill wd-search-bar"
                placeholder="Search Tuiter"
              />
              <span className="position-absolute wd-search-tuiter">
                <i
                  className="bi bi-search wd-magnifying-icon"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          <div className="col-1">
            <i className="bi bi-gear-fill wd-cog-icon" aria-hidden="true"></i>
          </div>
        </div>
        <ul className="nav nav-pills mt-2 mb-2">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="#">
              For You
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link wd-nav-link" to="#">
              Trending
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link wd-nav-link" to="#">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link wd-nav-link" to="#">
              Sports
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link wd-nav-link" href="entertainment.html">
              Entertainment
            </Link>
          </li>
        </ul>
        <div className="position-relative mb-2">
          <img src="/images/starship.jpg" width="100%" />
          <h2 className="position-absolute bottom-0 ms-2 text-white fw-bold">
            SpaceX's Starship
          </h2>
        </div>
        <PostSummaryList />
      </div>
      <div className="d-none d-lg-block col-lg-5 col-xl-5">
        <WhoToFollowList />
      </div>
    </div>
  );
};

export default Explore;
