import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits",
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (tuitId) => {
    await service.deleteTuit(tuitId);
    return tuitId;
  }
);

export const createTuitThunk = createAsyncThunk(
  "tuits/createTuit",
  async (tuit) => {
    const currentUser = {
      username: "NASA",
      handle: "nasa",
      image: "/images/nasa.png",
    };

    const newTuit = {
      ...currentUser,
      time: "Now",
      liked: false,
      replies: 0,
      retuits: 0,
      likes: 0,
      topic: "anime",
      dislikes: 0,
      disliked: false,
      ...tuit,
    };
    const serverTuit = await service.createTuit(newTuit);
    return { ...serverTuit };
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuit) => await service.updateTuit(tuit)
);
