import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
                <div class="row align-items-center">
                    <div class="col-11">
                        <div class="position-relative">
                            <input class="ps-5 form-control rounded-pill wd-search-bar"
                                placeholder="Search Tuiter" />
                            <span class="position-absolute wd-search-tuiter">
                                <i class="fa fa-search wd-magnifying-icon" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fa fa-cog wd-cog-icon" aria-hidden="true"></i>
                    </div>
                </div>
                <ul class="nav nav-pills mt-2 mb-2">
                    <li class="nav-item">
                        <a class="nav-link active text-white fw-bold" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-link text-white fw-bold" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-link text-white fw-bold" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-link text-white fw-bold" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link wd-nav-link text-white fw-bold" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
               <div class="position-relative mb-2">
                   <img src="starship.jpg" width="100%" />
                   <h2 class="position-absolute bottom-0 wd-text-dark fw-bold">SpaceX's Starship</h2>
               </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
