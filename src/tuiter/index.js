// import Nav from "../nav";
import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import Home from "./home";
import Profile from "./profile";
import EditProfile from "./edit-profile";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
    profile: profileReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-md-10 col-lg-11 col-xl-10">
          <Routes>
            <Route index element={<Home />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
