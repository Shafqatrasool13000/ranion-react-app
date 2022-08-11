
export default function History() {
  return (
    <div className='tab-pane space-y-20 active' id="tabs-3"
    role="tabpanel">
    <div className="creator_item creator_card
        space-x-10">
        <div className="avatars space-x-10">
            <div className="media">
                <div className="badge">
                    <img
                        src="assets/img/icons/Badge.svg"
                        alt="" />
                </div>
                <a href="/">
                    <img
                        src="assets/img/avatars/avatar_1.png"
                        alt="Avatar"
                        className="avatar
                        avatar-md"/>
                </a>
            </div>
            <div>
                <p className="color_black">Bid
                    accepted <span
                        className="color_brand">1
                        ETH</span> by <a
                            className="color_black txt
                        _bold"
                            href="/">ayoub</a></p>
                <span className="date color_text">28/06/2021,
                    12:08</span>
            </div>
        </div>
    </div>
    <div className="creator_item creator_card
        space-x-10">
        <div className="avatars space-x-10">
            <div className="media">
                <div className="badge">
                    <img
                        src="assets/img/icons/Badge.svg"
                        alt="" />
                </div>
                <a href="/">
                    <img
                        src="assets/img/avatars/avatar_2.png"
                        alt="Avatar"
                        className="avatar
                        avatar-md"/>
                </a>
            </div>
            <div>
                <p className="color_black">Bid
                    accepted <span
                        className="color_brand">3
                        ETH</span> by <a
                            className="color_black txt
                        _bold"
                            href="/">monir</a></p>
                <span className="date color_text">22/05/2021,
                    12:08</span>
            </div>
        </div>
    </div>
</div>
  )
}
