import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';

const Index = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showHomes, setShowHomes] = useState<boolean>(false);
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();  
    
    return (
        <div>
            <header className="header__1 js-header" id="header">
                <div className="container">
                    <div className="wrapper js-header-wrapper">
                        <div className="header__logo">
                            <NavLink to="/">
                                <img
                                    className="header__logo"
                                    id="logo_js"
                                    src="assets/img/logos/Logo.svg"
                                    alt="logo"
                                />
                            </NavLink>
                        </div>
                        <div className="header__menu">
                            <ul className="d-flex space-x-20">
                                <li className="has_popup" onClick={() => setShowHomes(!showHomes)}>
                                <NavLink className="color_black" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="color_black" to="/marketplace"> Marketplace</NavLink>
                                </li>
                                <li>
                                    <NavLink className="color_black" to="/collections"> Collections</NavLink>
                                </li>
                                <li>
                                    <NavLink className="color_black" to="/profile"> Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink className="color_black" to="/creators"> Creators</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="header__search">
                            <input type="text" placeholder="Search" />
                            <button className="header__result">
                                <i className="ri-search-line"></i>
                            </button>
                        </div>
                        <div className="header__btns">
                            {
                                isConnected?(
                                    <div className='d-flex align-items-center'>
                                    <div className="btn btn-grad btn-sm" onClick={()=>disconnect()}>
                                    <i className="ri-wallet-3-line"></i>
                                    Disconnect wallet</div>  
                                    <div  id="connectbtn" >
                                    <img width="45" src="assets/img/icons/metamask.svg" alt="" />
                                </div>
                                    </div>
                                ):(
                                <div className='d-flex align-items-center'>
                                <NavLink className="btn btn-grad btn-sm" to="/connect-wallet">
                                <i className="ri-wallet-3-line"></i>
                                Connect wallet</NavLink>
                                <div  id="connectbtn" >
                                <img width="45" src="assets/img/icons/metamask.svg" alt="" />
                                </div>
                                </div>
                                )
                            }
                            
                        </div>
                        <div onClick={() => setShow(!show)} className={`header__burger js-header-burger ${show ? 'active' : ''}`}></div>
                        <div className={`header__mobile js-header-mobile ${show ? 'visible' : ''}`}>
                            <div className="header__mobile__menu space-y-40">
                                <ul className="d-flex space-y-20">
                                    <li> <NavLink className="color_black" to="/marketplace"> Marketplace</NavLink> </li>
                                    <li> <NavLink className="color_black" to="/collections"> Collections</NavLink> </li>
                                    <li> <NavLink className="color_black" to="/profile"> Profile</NavLink> </li>
                                    <li> <NavLink className="color_black" to="/creators"> Creators</NavLink> </li>
                                </ul>
                                <div className="space-y-20">
                                    <div className="header__search in_mobile w-full">
                                        <input type="text" placeholder="Search" />
                                        <button className="header__result">
                                            <i className="ri-search-line"></i>
                                        </button>
                                    </div>
                                    <NavLink to='/connect-wallet' className="btn btn-grad btn-sm">Connect
                                        wallet</NavLink>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Index