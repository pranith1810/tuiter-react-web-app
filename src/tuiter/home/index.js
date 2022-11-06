import React from "react";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
import TuitList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-7 col-xl-7">
          <WhatsHappening />
          <TuitList />
        </div>
        <div className="d-none d-lg-block col-lg-5 col-xl-5">
          <WhoToFollowList />
        </div>
      </div>
    </>
  );
};

export default Home;
