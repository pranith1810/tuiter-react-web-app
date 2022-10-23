// import Nav from "../nav";
import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import Home from "./home";
import { Routes, Route } from "react-router";

function Tuiter() {
  return (
    <>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-md-10 col-lg-11 col-xl-10">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<ExploreComponent />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Tuiter;
