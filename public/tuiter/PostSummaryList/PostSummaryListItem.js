const PostSummaryListItem = (post) => {
  return `
    <li class="list-group-item">
                        <div class="row align-items-center">
                            <div class="col-10">
                            ${
                              post.topic
                                ? `<div class="text-secondary">${post.topic}</div>`
                                : ""
                            }
                            <div>
                            ${
                              post.userName
                                ? `
                                  <span class="fw-bold text-white">
                                    ${post.userName}
                                  </span>
                                `
                                : ""
                            }
                            <i
                            class="fa fa-check-circle text-white"
                            aria-hidden="true"
                          ></i>
                            ${
                              post.time
                                ? `<span class="text-secondary">
                                  &nbsp-&nbsp${post.time}
                                </span>`
                                : ""
                            }
                                </div>
                            ${
                              post.title
                                ? ` <div class="fw-bold text-white">
                                  ${post.title}
                                </div>`
                                : ""
                            }
                            ${
                              post.tweets
                                ? `<div class="text-secondary">${post.tweets} Tweets</div>`
                                : ""
                            }
                            </div>
                            <div class="col-2 p-0">
                                <img src=${
                                  post.image
                                } class="rounded" width="80%" height="80%" />
                            </div>
                        </div>
                    </li>
    `;
};

export default PostSummaryListItem;
