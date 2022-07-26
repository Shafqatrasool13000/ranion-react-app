import { useState } from "react";
import { Link, Outlet } from "react-router-dom";




const About = () => {
    const [profileTab, setProfileTab] = useState<string>('creations');
    const [recentActive, setRecentActive] = useState<boolean>(false);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-7 order-md-0 order-1">
                        <div className="profile__sidebar">
                            <div className="space-y-40">
                                <div className="space-y-10">
                                    <h5>About me</h5>
                                    <div className="box space-y-20">
                                        <p>
                                            I make art with the simple goal of giving you
                                            something
                                            pleasing to look at for a few seconds.
                                        </p>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="txt_sm color_text">Collections</span>
                                                <h4>105</h4>
                                            </div>
                                            <div className="col-6">
                                                <span className="txt_sm color_text">Creations</span>
                                                <h4>406</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-10">
                                    <h5>Follow me</h5>
                                    <div className="box">
                                        <ul className="social_profile space-y-10 overflow-hidden">
                                            <li>
                                                <a href="#">
                                                    <i className="ri-facebook-line"></i>
                                                    <span className="color_text">facebook/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-messenger-line"></i>
                                                    <span className="color_text"> messenger/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-whatsapp-line"></i>
                                                    <span className="color_text"> whatsapp/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-youtube-line"></i>
                                                    <span className="color_text">youtube/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 order-md-1 order-0">
                        <div className="profile__content">
                            <div className="d-flex justify-content-between">
                                <div className="space-x-10">
                                    <div className="d-flex justify-content-between">
                                        <ul className="nav nav-tabs d-flex space-x-10 mb-30"
                                            role="tablist">
                                            <li className="nav-item">
                                                <Link 
                                                    className={`btn btn-white btn-sm ${profileTab==='creations'&&"active"}`}
                                                    data-toggle="tab"
                                                    onClick={()=>setProfileTab('creations')}
                                                    to='creations'
                                                    aria-selected="true"
                                                    role="tab">
                                                    Creations</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className={`btn btn-white btn-sm ${profileTab==='collections'&&"active"}`}
                                                    data-toggle="tab"
                                                    onClick={()=>setProfileTab('collections')}
                                                    to='collections'
                                                    role="tab">
                                                    Collections</Link>
                                            </li>
                                        </ul>
                                        {/* <!-- Tab panes --> */}
                                        <div className="dropdown d-none d-sm-block">
                                            <button
                                                className={`btn btn-white btn-sm dropdown-toggle ${recentActive?'show':''}`}
                                                type="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                onClick={()=>setRecentActive(!recentActive)}
                                                aria-expanded="false">
                                                Recent Active
                                            </button>
                                            <div
                                                className={`dropdown-menu ${recentActive?'show':''}`}>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another
                                                    action</a>
                                                <a className="dropdown-item" href="#">Something
                                                    else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                    <Outlet/>
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

export default About