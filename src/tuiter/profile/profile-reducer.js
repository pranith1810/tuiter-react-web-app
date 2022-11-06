import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Pranith",
  lastName: "Rao",
  handle: "@prao",
  profilePicture: "/images/nasa.png",
  bannerPicture: "/images/naruto-big2.png",
  bio: "Student at Northeastern University. Full Stack software engineer. Animeverse. Tech enthusiast.",
  location: "Boston, MA",
  dateOfBirth: "1998-10-18",
  dateJoined: "April 2009",
  followingCount: 340,
  followersCount: 223,
  tuits: 874,
  website: "youtube.com/prao",
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    editProfile(state, action) {
      const obj = {
        ...state,
        ...action.payload,
      };
      return obj;
    },
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
