import React from 'react'

const Collections = () => {
return (
    <>
        <div className="section mt-100">
                <div className="section__head">
                    <h2 className="section__title mb-20"> Collections</h2>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-auto">
                            <div className="d-flex align-items-center space-x-10">
                                <span className="color_text txt_sm" style={{minWidth:
                                    "max-content"}}>
                                    FILTER BY:
                                </span>
                                <ul className="menu_categories space-x-20">
                                    <li className="d-flex space-x-10 switch_item">
                                        <input
                                            type="checkbox"
                                            id="switch7"
                                            
                                            /><label htmlFor="switch7">Toggle</label>
                                        <span> Has list price </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">
                                        <input
                                            type="checkbox"
                                            id="switch8"
                                            checked
                                            /><label htmlFor="switch8">Toggle</label>
                                        <span> Has open offer </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">
                                        <input
                                            type="checkbox"
                                            id="switch9"
                                            
                                            /><label htmlFor="switch9">Toggle</label>
                                        <span> Owned by creator </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">
                                        <input
                                            type="checkbox"
                                            id="switch10"
                                            
                                            /><label htmlFor="switch10">Toggle</label>
                                        <span> Has sold </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="d-flex space-x-10 align-items-center sm:mt-20">
                                <span className="color_text txt_sm"> SORT BY: </span>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-dark btn-sm dropdown-toggle"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Recent Active
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else
                                            here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                    <div className="row justify-content-center mb-30_reset">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="collections space-y-10 mb-30">
                            <a href="collections.html">
                                <div className="collections_item">
                                    <div className="images-box space-y-10">
                                        <div className="top_imgs">
                                            <img
                                                src="assets/img/items/item_9.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_10.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_11.png"
                                                alt=""/>
                                        </div>
                                        <img src="assets/img/items/item_12.png"
                                            alt=""/>
                                    </div>
                                </div>
                            </a>
                            <div className="collections_footer justify-content-between">
                                <h5 className="collection_title"><a href="Collections.html">Creative Art collection</a></h5>
                                <a href="#" className="likes space-x-3">
                                    <i className="ri-heart-3-fill"></i>
                                    <span className="txt_md">2.1k</span>
                                </a>
                            </div>
                            <div className="creators space-x-10">
                                <span className="color_text txt_md"> 5 items · Created by</span>
                                <div className="avatars space-x-5">
                                    <a href="Profile.html">
                                        <img
                                            src="assets/img/avatars/avatar_2.png"
                                            alt="Avatar" className="avatar avatar-sm"/>
                                    </a>
                                </div>
                                <a href="Profile.html">
                                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="collections space-y-10 mb-30">
                            <a href="collections.html">
                                <div className="collections_item">
                                    <div className="images-box space-y-10">
                                        <div className="top_imgs">
                                            <img
                                                src="assets/img/items/item_13.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_14.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_15.png"
                                                alt=""/>
                                        </div>
                                        <img src="assets/img/items/item_16.png"
                                            alt=""/>
                                    </div>
                                </div>
                            </a>
                            <div className="collections_footer justify-content-between">
                                <h5 className="collection_title"><a href="Collections.html">Colorful Abstract Painting</a></h5>
                                <a href="#" className="likes space-x-3">
                                    <i className="ri-heart-3-fill"></i>
                                    <span className="txt_md">3.5k</span>
                                </a>
                            </div>
                            <div className="creators space-x-10">
                                <span className="color_text txt_md"> 7 items · Created by</span>
                                <div className="avatars space-x-5">
                                    <a href="Profile.html">
                                        <img
                                            src="assets/img/avatars/avatar_3.png"
                                            alt="Avatar" className="avatar avatar-sm"/>
                                    </a>
                                </div>
                                <a href="Profile.html">
                                    <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="collections space-y-10 mb-30">
                            <a href="collections.html">
                                <div className="collections_item">
                                    <div className="images-box space-y-10">
                                        <div className="top_imgs">
                                            <img
                                                src="assets/img/items/item_17.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_18.png"
                                                alt=""/>
                                            <img
                                                src="assets/img/items/item_19.png"
                                                alt=""/>
                                        </div>
                                        <img src="assets/img/items/item_20.png"
                                            alt=""/>
                                    </div>
                                </div>
                            </a>
                            <div className="collections_footer justify-content-between">
                                <h5 className="collection_title"><a href="Collections.html">Modern Art collection</a></h5>
                                <a href="#" className="likes space-x-3">
                                    <i className="ri-heart-3-fill"></i>
                                    <span className="txt_md">7.2k</span>
                                </a>
                            </div>
                            <div className="creators space-x-10">
                                <span className="color_text txt_md"> 2 items · Created by</span>
                                <div className="avatars space-x-5">
                                    <a href="Profile.html">
                                        <img
                                            src="assets/img/avatars/avatar_1.png"
                                            alt="Avatar" className="avatar avatar-sm"/>
                                    </a>
                                </div>
                                <a href="Profile.html">
                                    <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default Collections