import whoToData from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
  <ul class="list-group">
                    <li class="list-group-item">
                        <div class="fw-bold text-white">Who to follow</div>
                    </li>
    ${whoToData.map((who) => WhoToFollowListItem(who)).join("")}
    </ul>`;
};

export default WhoToFollowList;
