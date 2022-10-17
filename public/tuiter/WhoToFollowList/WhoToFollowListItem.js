const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item">
    <div class="row w-100 align-items-center">
        <div class="col-7 col-xl-9">
            <div class="d-flex align-items-center">
                <img src=${who.avatarIcon} width="20%" height="20%" class="rounded-circle" />
                <div class="ms-2">
                    <div>
                        <span class="fw-bold text-white">${who.userName}</span>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div class="text-white">@${who.handle}</div>
                </div>
            </div>
        </div>
        <div class="col-5 col-xl-3"> <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
    </div>
</li>
    `;
};

export default WhoToFollowListItem;
