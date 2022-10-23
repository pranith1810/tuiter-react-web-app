import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import whoToData from "./who.json";

const WhoToFollowList = () => {
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
