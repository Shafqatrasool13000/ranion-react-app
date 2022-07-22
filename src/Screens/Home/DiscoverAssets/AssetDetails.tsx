import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Index";
import BuyNowModal from "./BuyNowModall";
import PlaceBidModal from "./PlaceBidModal";


type TabTypes = {
    name: string,
    active: boolean
}
const detailTabs = [{ name: 'Details', active: true }, { name: 'Bids', active: false }, { name: 'History', active: false }]

const AssetDetails = () => {
    const [isSelectShow, setIsSelectShow] = useState<boolean>(false);
    const [tabs, setTabs] = useState<TabTypes[]>(detailTabs);
    const [buyNow, setBuyNow] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false)


    const tabsHandler = (selectedId: number) => {
        const initalSelectIndex = tabs.findIndex(({ active }) => active === true);
        tabs[initalSelectIndex].active = !tabs[initalSelectIndex].active;
        detailTabs[selectedId].active = !detailTabs[selectedId].active;
        setTabs([...tabs]);
    }

    const BidModalFunction = ({setShowModal}:any) => {

        return (
            <button onClick={()=>setShowModal(true)} className="btn btn-grad btn-lg" data-toggle="modal"
            data-target="#popup_bid"> Place bid</button>
        )
    }

    return (
        <>
            <Navbar />
            
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
            <div className={`modal fade popup ${buyNow ? 'show' : ''}`} style={{
                display: buyNow ? 'block' : 'none'
            }} id="popup_buy" tabIndex={-1} role="dialog"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button onClick={() => setBuyNow(false)} type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 p-40">
                            <h3>Checkout
                            </h3>
                            <p>You are about to purchase a <span className="color_black">SHADOW
                                #7</span> from
                                <span className="color_black">Lona</span>
                            </p>
                            <div className="space-y-10">
                                <p>You pay
                                </p>
                                <input type="text" className="form-control"
                                    placeholder="00.00 ETH" />
                            </div>
                            <div className="space-y-10">
                                <p>Enter quantity. <span className="color_green">5 available</span>
                                </p>
                                <input type="text" className="form-control"
                                    value="1" />
                            </div>

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
                            <a href="https://pay.sendwyre.com/" className="btn btn-primary
                            w-full" aria-label="Close">
                                Add funds</a>
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
            <div className="modal fade popup" id="popup_report" tabIndex={-1} role="dialog"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 p-40">

                            <h3>Report this item</h3>
                            <div className="hr"></div>
                            <div className="form-group space-y-10">
                                <span className="variationInput">reason:</span>
                                <select className="form-select custom-select"
                                    aria-label="Default select example">
                                    <option> Select a reason</option>
                                    <option>Purchase</option>
                                    <option>Support</option>
                                    <option>Technique</option>
                                    <option>Service Request</option>
                                </select>
                            </div>
                            <div className="form-group space-y-10">
                                <span className="variationInput">Additional comments:</span>
                                <textarea name="..." cols={30} rows={10}
                                    placeholder="Explain why you are concerned about it."></textarea>
                            </div>
                            <a href="" className="btn btn-dark"> Report</a>
                        </div>
                    </div>
                </div>
            </div>













            <div className="container">
                <Link to="/" className="btn btn-white btn-sm my-40">
                    Back to home
                </Link>
                <div className="item_details">
                    <div className="row sm:space-y-20">
                        <div className="col-lg-6">
                            <img className="item_img" src="assets/img/items/item_2.png"
                                alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="space-y-20">
                                <h3>Creative girl illustration</h3>
                                <div className="d-flex justify-content-between">
                                    <div className="space-x-10 d-flex align-items-center">
                                        <p>1 of 1</p>
                                        <a href="#" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">2.1k</span>
                                        </a>
                                    </div>
                                    <div className="space-x-10 d-flex align-items-center">
                                        <div className="share">
                                            <div className="icon">
                                                <a href="#"> <i className="ri-share-line"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown__popup">
                                                <ul className="space-y-10">
                                                    <li> <a href=""> <i
                                                        className="ri-facebook-line"></i>
                                                    </a>
                                                    </li>
                                                    <li> <a href=""> <i
                                                        className="ri-messenger-line"></i>
                                                    </a>
                                                    </li>
                                                    <li> <a href=""> <i
                                                        className="ri-whatsapp-line"></i>
                                                    </a>
                                                    </li>
                                                    <li> <a href=""> <i
                                                        className="ri-youtube-line"></i>
                                                    </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <div className="icon">
                                                <a href="#"> <i className="ri-more-fill"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown__popup">
                                                <ul className="space-y-10">
                                                    <li>
                                                        <a href="#" className="space-x-10
															d-flex"
                                                            data-toggle="modal"
                                                            data-target="#popup_report">
                                                            <i className="ri-flag-line"></i>
                                                            <span> Report
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button onClick={() => setIsSelectShow(!isSelectShow)} className={`btn btn-white btn-sm dropdown-toggle ${isSelectShow ? 'show' : ''}`} type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        View proof of authenticity
                                    </button>
                                    <div className={`dropdown-menu ${isSelectShow ? 'show' : ''}`} >
                                        <a className="dropdown-item" href="https://ipfs.io/" target="_blank">
                                            <span>
                                                <img src="assets/img/icons/ipfs.svg" width="20"
                                                    alt="" />
                                                View on IPFS
                                            </span>
                                            <i className="ri-external-link-line color_brand"></i>


                                        </a>
                                        <a className="dropdown-item" href="https://etherscan.io/" target="_blank">
                                            <span>
                                                <img src="assets/img/icons/ether.png" width="20" alt="" />
                                                View on Etherscan
                                            </span>
                                            <i className="ri-external-link-line color_brand"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="space-y-20">
                                        <div className="d-flex justify-content-between
											mb-30_reset">
                                            <ul className="nav nav-tabs d-flex space-x-10 mb-30"
                                                role="tablist">
                                                {
                                                    detailTabs.map(({ name, active }, index) => (
                                                        <li className="nav-item" key={index} onClick={() => tabsHandler(index)}>
                                                            <a
                                                                className={`btn btn-white btn-sm ${active ? 'active' : ''}`}
                                                                data-toggle="tab"
                                                                // href="#tabs-1"
                                                                role="tab">
                                                                {name}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            {/* <!-- Tab panes --> */}
                                            <div className="dropdown d-none d-sm-block">
                                                <button
                                                    className="btn btn-white btn-sm
													dropdown-toggle"
                                                    type="button"

                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Recent Active
                                                </button>
                                                <div
                                                    className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another
                                                        action</a>
                                                    <a className="dropdown-item" href="#">Something
                                                        else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="tab-content">
                                            <div className={`tab-pane ${tabs[0].active ? 'active' : ''}`} id="tabs-1"
                                                role="tabpanel">
                                                <p>Hey guys! New exploration about NFT
                                                    Marketplace Web Design, this time I'm
                                                    inspired by one of my favorite NFT
                                                    website called Rarible (with crypto
                                                    payment)! What do you think?</p>
                                            </div>
                                            <div className={`tab-pane ${tabs[1].active ? 'active' : ''}`} id="tabs-2"
                                                role="tabpanel">
                                                <p>No active bids yet. Be the first to make
                                                    a bid!</p>
                                            </div>
                                            <div className={`tab-pane space-y-20 ${tabs[2].active ? 'active' : ''}`} id="tabs-3"
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
                                                            <a href="Profile.html">
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
                                                                        href="Profile.html">ayoub</a></p>
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
                                                            <a href="Profile.html">
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
                                                                        href="Profile.html">monir</a></p>
                                                            <span className="date color_text">22/05/2021,
                                                                12:08</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="numbers">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="space-y-5">
                                                <p className="color_text">Minimum bid</p>
                                                <h4>2.4000 <span className="txt_sm color_text">
                                                    ETH/ $4769.88</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="space-y-5">
                                                <p className="color_text">countdown</p>
                                                <div className="d-flex countdown_item
													align-items-center">
                                                    <div className="item">
                                                        <div className="number hours">22<span></span></div>
                                                    </div>
                                                    <div className="dots">:</div>
                                                    <div className="item">
                                                        <div className="number minutes">04<span></span></div>
                                                    </div>
                                                    <div className="dots">:</div>
                                                    <div className="item">
                                                        <div className="number seconds">35<span></span></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hr2"></div>
                                <div className="creators">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="avatars space-x-5">
                                                <div className="media">
                                                    <a href="Profile.html">
                                                        <img
                                                            src="assets/img/avatars/avatar_3.png"
                                                            alt="Avatar" className="avatar
															avatar-sm"/>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="Profile.html">
                                                        <p className="avatars_name color_black">@ayoub_fennouni
                                                            / fouzi...</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="avatars space-x-5">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img className="badge"
                                                            src="assets/img/icons/Badge.svg"
                                                            alt="" />
                                                    </div>
                                                    <a href="Profile.html">
                                                        <img
                                                            src="assets/img/avatars/avatar_2.png"
                                                            alt="Avatar" className="avatar
															avatar-sm"/>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="Profile.html">
                                                        <p className="avatars_name color_black">@makinzi_jamy...</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex space-x-20">
                                    <BuyNowModal />
                                    <PlaceBidModal>                     
                                                                        <BidModalFunction/>
                                    </PlaceBidModal>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AssetDetails;