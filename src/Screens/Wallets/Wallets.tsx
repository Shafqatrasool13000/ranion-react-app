import { NavLink } from "react-router-dom"

const Wallets = () => {
    return (
        <>
            <div className="effect">
                <div className="container">
                    <NavLink to="/" className="btn btn-white btn-sm mt-20">
                        Back to home</NavLink>
                    <div className="hero__wallets pt-100 pb-50">
                        <div className="space-y-20 d-flex flex-column align-items-center">
                            <div className="logo">
                                <img src="assets/img/icons/logo.svg" alt=""/>
                            </div>
                            <h2 className="text-center">Connect your wallet</h2>
                            <p className="text-center">Connect with one of available wallet
                                providers or create a new wallet.
                            </p>
                        </div>
                    </div>		<div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="wallets">
                                <div className="row mb-20_reset">
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_connected">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/coibase.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">coibase</h5>
                                            <p className="text-center">wallet that works on both mobile and through a browser extension</p>
                                        </a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_error">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/metamask.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">metamask</h5>
                                            <p className="text-center">A browser extension with great flexibility. The web&#x27;s popular wallet</p>
                                        </a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_connected">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/torus.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">torus</h5>
                                            <p className="text-center">Log in with Google,  Facebook, or other OAuth providers</p>
                                        </a>
                                    </div>                              
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_error">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/fortmatic.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">fortmatic</h5>
                                            <p className="text-center">wallet that allows you to  sign up with your phone number on any device</p>
                                        </a>
                                    </div>                                 
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_connected">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/bitski.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">bitski</h5>
                                            <p className="text-center">wallet that allows you to  sign in with an email and password</p>
                                        </a>
                                    </div>                                
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_error">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/walletconnect.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">walletconnect</h5>
                                            <p className="text-center">Log in with Google,  Facebook, or other OAuth provider</p>
                                        </a>
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

export default Wallets