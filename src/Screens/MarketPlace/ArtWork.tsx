import React from 'react'

const ArtWork = () => {
    return (
        <>
            <div className="section mt-100">
                <div className="section__head">
                    <h2 className="section__title mb-20"> Artworks</h2>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-auto">
                            <div className="d-flex space-x-10 align-items-center">
                                <span className="color_text txt_sm" style={{minWidth:
                                    "max-content"}}>
                                    FILTER BY:
                                </span>
                                <ul className="menu_categories space-x-20">
                                    <li className="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch1" /><label
                                            htmlFor="switch1">Toggle</label>
                                        <span> Has list price </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch2" checked /><label
                                            htmlFor="switch2">Toggle</label>
                                        <span> Has open offer </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch3" /><label
                                            htmlFor="switch3">Toggle</label>
                                        <span> Owned by creator </span>
                                    </li>
                                    <li className="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch4" /><label
                                            htmlFor="switch4">Toggle</label>
                                        <span> Has sold </span>
                                    </li>
                                </ul>                    </div>
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
                                        <a className="dropdown-item" href="/">Action</a>
                                        <a className="dropdown-item" href="/">Another action</a>
                                        <a className="dropdown-item" href="/">Something else
                                            here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade popup" id="popup_bid_success" tabIndex={-1} role="dialog"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Your Bidding
                                    Successfuly Added</h3>
                                <p className="text-center">your bid <span className="color_text txt
                                        _bold">(16ETH) </span> has been listing
                                    to our database</p>

                                <a href="" className="btn btn-dark w-full"> Watch the listings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid" tabIndex={-1} role="dialog"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3>Place a Bid</h3>
                                <p>You must bid at least <span className="color_black">15 ETH</span>
                                </p>
                                <input type="text" className="form-control"
                                    placeholder="00.00 ETH"/>

                                    <p>Enter quantity. <span className="color_green">5 available</span>
                                    </p>
                                    <input type="text" className="form-control"
                                        value="1"/>
                                        <div className="hr"></div>
                                        <div className="d-flex justify-content-between">
                                            <p> You must bid at least:</p>
                                            <p className="text-right color_black txt _bold"> 67,000 ETH </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> service free:</p>
                                            <p className="text-right color_black txt _bold"> 0,901 ETH </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Total bid amount:</p>
                                            <p className="text-right color_black txt _bold"> 56,031 ETH </p>
                                        </div>
                                        <a href="/" className="btn btn-primary w-full"
                                            data-toggle="modal"
                                            data-target="#popup_bid_success"
                                            data-dismiss="modal"
                                            aria-label="Close"> Place a bid</a>
                                    </div>
                            </div>
                        </div>
                    </div><div className="modal fade popup" id="popup_history" tabIndex={-1} role="dialog"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="modal-body space-y-20 p-40">
                                    <h4> History </h4>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <div className="media">
                                                <div className="badge">
                                                    <img src="assets/img/icons/Badge.svg"
                                                        alt=""/>
                                                </div>
                                                <a href="/">
                                                    <img
                                                        src="assets/img/avatars/avatar_1.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                            </div>
                                            <div>
                                                <p className="color_black">Bid accepted <span
                                                    className="color_brand">1
                                                    ETH</span> by <a className="color_black txt
                                                    _bold"
                                                        href="/">ayoub</a></p>
                                                <span className="date color_text">28/06/2021, 12:08</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <div className="media">
                                                <div className="badge">
                                                    <img src="assets/img/icons/Badge.svg"
                                                        alt=""/>
                                                </div>
                                                <a href="/">
                                                    <img
                                                        src="assets/img/avatars/avatar_2.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                            </div>
                                            <div>
                                                <p className="color_black">Bid accepted <span
                                                    className="color_brand">3
                                                    ETH</span> by <a className="color_black txt
                                                    _bold"
                                                        href="/">monir</a></p>
                                                <span className="date color_text">22/05/2021, 12:08</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className="row mb-30_reset">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_1.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mickel_fenn</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_2.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@danil_pannini</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_1.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">1.2k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Colorful Abstract Painting
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 4 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">2.45 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_3.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mazanov_sky</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_4.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mucky_fennouni</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_2.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">13.2k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        The girl with the firefly
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 12 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">2.55 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_5.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@jimmy_dom</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_6.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@kristian_sefroui</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_3.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">1.2k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Dodo hide the seek
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 6 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">2.45 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_1.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@Alvin_nov</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_7.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mucky_holiman</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_4.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">4.1k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Liquid Forest Princess
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 34 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">0.55 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_8.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@stivan_rominok</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_9.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@danil_pan</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_5.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">6.4k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Spider Eyes Modern Art
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 7 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">1.45 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                    style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_10.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mazanov_sky</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_11.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mucky_art</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_6.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">13.2k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Synthwave Painting
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 2 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">0.055 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_12.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@jimmy_dom</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_5.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@kristian_fel</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_7.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">1.6k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Contemporary Abstract
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 34 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">0.95 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card__item four">
                                <div className="card_body space-y-10">
                                    <div className="creators space-x-10">
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_13.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@Alvin_nov</p>
                                            </a>
                                        </div>
                                        <div className="avatars space-x-3">
                                            <a href="/">
                                                <img
                                                    src="assets/img/avatars/avatar_14.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                            <a href="/">
                                                <p className="avatars_name txt_xs">@mucky_art</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card_head">
                                        <a href="Item-details.html">
                                            <img src="assets/img/items/item_8.png"
                                                alt=""/>
                                        </a>

                                        <a href="/" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">11.5k</span>
                                        </a>
                                    </div>
                                    <h6 className="card_title">
                                        Valkyrie Abstract Art
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="card_footer justify-content-between">
                                            <div className="creators">
                                                <p className="txt_sm"> 9 in stock</p>
                                            </div>
                                            <a href="/" className="">
                                                <p className="txt_sm">Price: <span
                                                    className="color_green
                                                    txt_sm">3.55 ETH</span></p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex align-items-center space-x-10
                                        justify-content-between">
                                            <div className="d-flex align-items-center
                                            space-x-10">
                                                <i className="ri-history-line"></i>
                                                <a className="view_history" href="/" data-toggle="modal"
                                                    data-target="#popup_history">
                                                    <p className="color_text txt_sm"
                                                        style={{width:
                                                    "auto"}}>View
                                                        History</p>
                                                </a>
                                            </div>
                                            <a className="btn btn-sm btn-primary" href="/"
                                                data-toggle="modal" data-target="#popup_bid">Place
                                                Bid</a>
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

    export default ArtWork