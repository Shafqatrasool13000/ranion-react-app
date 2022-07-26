
const HeroSection = () => {
return (
<>
<div className="mb-100">
<div className="hero__profile">
<div className="cover">
<img src="assets/img/bg/prrofile.png" alt=""/>
</div>
<div className="infos">
<div className="container">
<div className="row flex-wrap align-items-center
    justify-content-between">
    <div className="col-md-auto mr-20">
        <div className="avatars d-flex space-x-20
            align-items-center">
            <div className="avatar_wrap">
                <img className="avatar avatar-lg"
                    src="assets/img/avatars/avatar_4.png"
                    alt="avatar"/>
            </div>
            <h5>@ayoub fennouni</h5>
        </div>
    </div>
    <div className="col-md-auto">
        <div className="d-flex flex-wrap align-items-center
            space-x-20 mb-20_reset">
            <div className="mb-20">
                <div className="copy">
                    <span className="color_text"> 13b9ebda0178...
                    </span>
                    <a href="/">
                        <i className="ri-file-copy-line color_text"></i>
                    </a>
                </div>
            </div>
            <div className="d-flex flex-wrap align-items-center
                space-x-20">
                <div className="mb-20">
                    <a href="btn" className="btn btn-dark btn-sm">
                        Follow
                    </a>

                </div>
                <div className="mb-20">
                    <div className="share">
                        <div className="icon">
                            <a href="/"> <i
                                    className="ri-share-line"></i>
                            </a>
                        </div>
                        <div className="dropdown__popup">
                            <ul className="space-y-10">
                                <li> <a href="/"> <i
                                            className="ri-facebook-line"></i>
                                    </a>
                                </li>
                                <li> <a href="/"> <i
                                            className="ri-messenger-line"></i>
                                    </a>
                                </li>
                                <li> <a href="/"> <i
                                            className="ri-whatsapp-line"></i>
                                    </a>
                                </li>
                                <li> <a href="/"> <i
                                            className="ri-youtube-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <div className="more">
                        <div className="icon">
                            <a href="/"> <i
                                    className="ri-more-fill"></i>
                            </a>
                        </div>
                        <div className="dropdown__popup">
                            <ul className="space-y-10">
                                <li>
                                    <a href="/"
                                        className="space-x-10
                                        d-flex">
                                        <i className="ri-flag-line"></i>
                                        <span> Report </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div> 
</>
)
}

export default HeroSection