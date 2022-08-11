import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className="hero_marketplace bg_white">
                <div className="container">
                    <h1 className="text-center">NFT Marketplace</h1>
                </div>
                <div className="bg_white border-b py-20">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <ul className="menu_categories space-x-20">
                                <li>
                                    <a href="/" className="color_brand">

                                        <span> All </span>
                                    </a>
                                </li>
                                <li> <a href="/">
                                    <i className="ri-gamepad-line"></i> <span> Games </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-brush-line"></i> <span> Art </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-stock-line"></i> <span> Trading Cards </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-music-line"></i> <span> Music </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-global-line"></i> <span> Domain Names </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-emotion-laugh-line"></i> <span> Memes </span>
                                </a>

                                </li>
                                <li> <a href="/">
                                    <i className="ri-layout-4-line"></i> <span> Collectibles </span>
                                </a>

                                </li>
                            </ul>        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection