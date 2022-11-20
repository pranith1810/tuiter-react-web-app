import React, { useEffect } from "react";
import TuitItem from "./TuitItem";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit, index) => (
        <TuitItem
          key={tuit._id}
          tuit={tuit}
          lastOne={index === tuits.length - 1}
        />
      ))}
    </ul>
  );
};

export default TuitList;
