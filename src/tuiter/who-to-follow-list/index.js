import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const whoToData = useSelector((state) => state.who);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="fw-bold">Who to follow</div>
      </li>
      {whoToData.map((who) => (
        <WhoToFollowListItem who={who} key={who.id} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
