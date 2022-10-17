const PostItem = (post) => {
  return `
    <div class="row flex-nowrap wd-bookmark-main wd-border-left-right wd-border-top">
    <img class="wd-avatar col-1" src=${post.avatar} />
    <div class="wd-bookmark-content col-11">
        <div class="wd-user-bookmark-id-name">
            <div class="wd-user-bookmark-handle">${post.handle}</div>
            <div class="wd-user-bookmark-id">@${post.id} · </div>
            <div class="wd-bookmark-tuit-date">${post.date}</div>
        </div>
        <div class="wd-user-tuit-content">${post.content}</div>
        <div class="wd-content">
            <img class="wd-content-image wd-border-top wd-border-bottom wd-border-left-right"
                src=${post.banner} />
            <div class="wd-content-image-text wd-border-bottom wd-border-left-right">
                <div class="wd-content-image-text-title">${post.bannerContentTitle}</div>
                <div class="wd-content-image-text-sub">${post.bannerContent}</div>
            </div>
        </div>
        <div class="wd-icons-div">
            <a href="#" class="wd-icon-number"><i class="far fa-comment wd-gray-icon"></i>
                <p class="wd-icon-number-spacing">${post.comments}</p>
            </a>
            <a href="#" class="wd-icon-number"><i class="fa fa-retweet wd-gray-icon" aria-hidden="true"></i>
                <p class="wd-icon-number-spacing">${post.retweets}</p>
            </a>
            <a href="#" class="wd-icon-number"><i class="far fa-heart wd-gray-icon"
                    aria-hidden="true"></i>
                <p class="wd-icon-number-spacing">${post.hearts}</p>
            </a>
            <a href="#" class="wd-icon-number"><i class="fas fa-share wd-gray-icon"
                    aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
    `;
};

export default PostItem;
