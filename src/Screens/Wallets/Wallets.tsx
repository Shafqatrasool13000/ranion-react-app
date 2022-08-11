import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAccount, useConnect, useEnsName } from 'wagmi';
// import { InjectedConnector } from 'wagmi/connectors/injected';
import WalletModal from "./WalletModal";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import { Bitski } from "bitski";



const walletDetailsUI = [
    {
    title: "Metamask",
    subtitle:
    "A browser extension with great flexibility.The web 's popular wallet",
    img: "assets/img/icons/metamask.svg",
    },
    {
    title: "Coinbase",
    subtitle:
    "Wallet that works on both mobile and through a browser extension",
    img: "assets/img/icons/coibase.svg",
    },
    {
    title: "Wallet Connect",
    subtitle:
    "Log in with Google,  Facebook, or other OAuth provider",
    img: "assets/img/icons/walletconnect.svg",
    },
    // {
    // title: "Injected",
    // subtitle:
    // "Wallet that works on both mobile and through a browser extension",
    // img: "assets/img/icons/metamask.svg",
    // },
];

const Wallets = () => {
    const { address, isConnected } = useAccount();
    const [walletInfo, setWalletInfo] = useState<string>('');
    const [fortmaticWallet, setFortmaticWallet] = useState<boolean>(false);
    const [formaticError, setFormaticError] = useState<any>(false);
    const [torusWallet, setTorusWallet] = useState<boolean>(false);
    const [torusError, setTorusError] = useState<boolean>(false);
    const [bitskiWallet, setBitskiWallet] = useState<boolean>(false);
    const [bitskiError, setBitskiError] = useState<boolean>(false);
    const [balance, setBalance] = useState<any>();


    const navigate=useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const { data: ensName } = useEnsName({ address })
    // const { connect } = useConnect({
    // connector: new InjectedConnector(),
    // });

    const formaticApi = "pk_test_7F2542F67C1085E9";
    const fm = new Fortmatic(formaticApi);

    
    const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
    console.log(error,'error')

    const handleWalletConnect=async ()=>{
    if(isConnected||torusWallet||fortmaticWallet||bitskiWallet){
        setShow(true);
        setWalletInfo('Connected Successfull');
        setTimeout(() => {
        setShow(false);
        navigate('/');
    }, 2500);
    }if(error||torusError||formaticError||bitskiError){
    setWalletInfo(' User denied account access');
        setShow(true);
        setTimeout(() => {
        setShow(false);
        navigate('/connect-wallet');
    }, 2500);  
    }
    }

    let setUserInfo = async () => {
    // Get user balance (includes ERC20 tokens as well)
    let balances = await fm.user.getBalances();
    console.log(balances);
    let ethBalance = balances.find((e: any) => {
    return e.crypto_currency == "ETH";
    });
    setBalance(ethBalance);
    };

    // Tours Wallet
        const onTorusLogin = async (e:any) => {
        e.preventDefault();
        try {     
        const torus = new Torus({});
        await torus.init({
        enableLogging: false,
        });
        await torus.login();
        setTorusWallet(true);
        } catch (error) {
        setTorusError(true);
        }
    };
        

    // Formatic Wallet 
    let handleLogin = async () => {
    // Authenticate user
    try {
    let accounts = await fm.user.login();
    if (accounts.length > 0) {
    setFortmaticWallet(true);
    setUserInfo();
    }
    }
    catch (error) {
    handleWalletConnect();
    setFormaticError(true);
    }
    };
    console.log(formaticError,'error of formatic',torusError,bitskiError,error);
    
    useEffect(() => {
    handleWalletConnect();
    }, [isConnected,error,fortmaticWallet,formaticError,torusWallet,torusError])
    
// Bitski Wallet

const BitskiSigninHandler=async()=>{
    try {
        const bitski = new Bitski('368d49f9-23e1-472b-99b3-977661276f7c', 'https://ranion-react-app.vercel.app/');
        await bitski.signIn();
    } 
        catch (error) {
        setTorusError(true)
    }
}
//   if (isConnected) return <div>Connected to {ensName ?? address}</div>
//   return <button onClick={() => connect()}>Connect Wallet</button>

console.log(walletInfo)
    return (
        <>
        <WalletModal show={show} setShow={setShow} info={walletInfo} />
        {/* <TorusWallet/>
        <BitskiWallet/> */}
        {/* <div>
        <div>
        {connectors.map((connector) => (
            <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
        </button>
        ))}

        {error && <div>{error.message}</div>}
        </div> 
        </div> */}
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
                                    
                                    {
                                    connectors.filter((connector,index)=>index<3).map((connector,index)=>(  
                                    <div className="col-lg-4" key={index} onClick={() =>{ connect({ connector })}}>
                                    <div className="box in__wallet space-y-10"
                                    data-toggle="modal"
                                    data-target="#popup_connected">
                                    <div className="logo">
                                    <img
                                    src={walletDetailsUI[index].img}
                                    alt="logo_community"/>
                                    </div>
                                    <h5 className="text-center">{walletDetailsUI[index].title}{!connector.ready && ' (unsupported)'}
                                    {isLoading &&
                                        connector.id === pendingConnector?.id &&
                                        ' (Connecting)'}</h5>
                                    <p className="text-center">{walletDetailsUI[index].subtitle}</p>
                                    </div>
                                    </div>))
                                    }
                                    <div className="col-lg-4" onClick={onTorusLogin}>
                                        <a href="/" className="box in__wallet space-y-10"
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
                                        <div onClick={handleLogin} className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_error">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/fortmatic.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">fortmatic</h5>
                                            <p className="text-center">wallet that allows you to  sign up with your phone number on any device</p>
                                        </div>
                                    </div>                                 
                                    <div className="col-lg-4">
                                        <div onClick={BitskiSigninHandler}  className="box in__wallet space-y-10"
                                            data-toggle="modal"
                                            data-target="#popup_connected">
                                            <div className="logo">
                                                <img
                                                    src="assets/img/icons/bitski.svg"
                                                    alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">bitski</h5>
                                            <p className="text-center">wallet that allows you to  sign in with an email and password</p>
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

export default Wallets