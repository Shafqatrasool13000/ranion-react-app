import {useNavigate} from 'react-router-dom';
const DiscoverAssets = () => {

    const navigate=useNavigate();


return (
<>
<div className="hero__2">
<div className="container">
    <div className="space-y-20">
        <h1 className="hero__title text-center">
            Discover digital assets
        </h1>
        <p className="hero__text text-center">raroin is a shared liquidity NFT
            market smart contract
            which
            is used by multiple websites to provide the users the
            best
            possible experience.</p>
        <div className="space-x-20 d-flex justify-content-center">
            <a className="btn btn-grad btn-md"
                href="Marketplace.html">View
                market</a>
        </div>
    </div>
    <div className="wrapper">
        <div className="row">
            {
                [1,2,3].map((title,index)=>(
                    <div className="col-lg-4" key={index}>
                    <div className="card__item one is__hero">
                        <div className="card_body">
                            <div className="card_head">
                                <div onClick={()=>navigate(`/assets-details/${index}`)} className='cursor-pointer'>
                                    <img style={{cursor:'pointer'}}
                                        src="assets/img/items/item_4.png"
                                        alt="..."/>
                                </div>
                                <div className="details space-x-0 d-flex
                                    justify-content-between">
                                    <div className="bid space-x-10">
                                        <div className="icon">
                                            <svg width="43" height="43"
                                                viewBox="0 0 43 43" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M28.3425
                                                    0H14.4716C6.81083 0 0.600586
                                                    6.21024 0.600586
                                                    13.871V29.129C0.600586
                                                    36.7898 6.81083 43 14.4716
                                                    43H28.3425C36.0032 43
                                                    42.2135 36.7898 42.2135
                                                    29.129V13.871C42.2135
                                                    6.21024 36.0032 0 28.3425
                                                    0Z"
                                                    fill="url(#paint0_radial)"
                                                />
                                                <path d="M21.4044
                                                        8.32251L21.2241
                                                        8.92312V26.3451L21.4044
                                                        26.5212L29.7243
                                                        21.7413L21.4044
                                                        8.32251Z" fill="white"
                                                />
                                                <path d="M21.4043
                                                    8.32251L13.0845
                                                    21.7413L21.4043
                                                    26.5212V8.32251V8.32251Z"
                                                    fill="#C9D6E7" />
                                                <path d="M21.4044
                                                    28.0526L21.3018
                                                    28.1746V34.3805L21.4044
                                                    34.6718L29.7298
                                                    23.2754L21.4044
                                                    28.0526V28.0526Z"
                                                    fill="#9FB2C1"
                                                    fillOpacity="0.8"
                                                />
                                                <path
                                                    d="M21.4043
                                                    34.6718V28.0526L13.0845
                                                    23.2754L21.4043
                                                    34.6718V34.6718Z"
                                                    fill="#C9D6E7"
                                                />
                                                <path
                                                    d="M21.4043
                                                    26.5212L29.7241
                                                    21.7412L21.4043
                                                    18.0654V26.5212V26.5212Z"
                                                    fill="#BAC3DA"
                                                />
                                                <path
                                                    d="M13.0845
                                                    21.7412L21.4043
                                                    26.5212V18.0654L13.0845
                                                    21.7412V21.7412Z"
                                                    fill="white"
                                                />
                                                <defs>
                                                    <radialGradient
                                                        id="paint0_radial"
                                                        cx="0"
                                                        cy="0"
                                                        r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(22.7076)
                                                        rotate(91.7322)
                                                        scale(43.02
                                                        41.6349)">
                                                        <stop
                                                            stopColor="#31E7FA"
                                                        />
                                                        <stop
                                                            offset="0.526042"
                                                            stopColor="#4477FF"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stopColor="#DB74FF"
                                                        />
                                                    </radialGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>
                                            <p
                                                className="color_text
                                                txt">CURRENT
                                                BID</p>
                                            <span
                                                className="txt_lg
                                                _bold">4.77
                                                ETH</span>
                                        </div>
                                    </div>
                                    <div
                                        className="auction_end">
                                        <p
                                            className="color_text
                                            txt">
                                            AUCTION
                                            END</p>
                                        <div
                                            className="d-flex
                                            justify-content-center
                                            align-items-center
                                            space-x-10
                                            txt_lg
                                            _bold">
                                            <div
                                                className="item">
                                                <div
                                                    className="number
                                                    hours">16<span></span></div>
                                            </div>
                                            <div
                                                className="dots">:</div>
                                            <div
                                                className="item">
                                                <div
                                                    className="number
                                                    minutes">29<span></span></div>
                                            </div>
                                            <div
                                                className="dots">:</div>
                                            <div
                                                className="item">
                                                <div
                                                    className="number
                                                    seconds">26<span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="fire-icon">
                                        <i
                                            className="ri-fire-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
            </div>
        </div>
    </div>
</>
)
}

export default DiscoverAssets