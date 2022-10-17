import PostSummaryListItem from "./PostSummaryListItem.js";
import exploreItems from "./exploreItems.js";

const PostSummaryList = () => {
  return `
  <ul class="list-group">
  ${exploreItems.map((post) => PostSummaryListItem(post)).join("")}
  </ul>
  `;
};

export default PostSummaryList;
