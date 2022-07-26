import Modal from "react-bootstrap/Modal";
import {useNavigate } from "react-router-dom";
import { useAccount, useConnect } from "wagmi";

type WalletProps={
    show:boolean,
    setShow:(value:boolean)=>void,
    info:string
}


function WalletModal({setShow,show,info}:WalletProps) {
        const {isConnected } = useAccount();
        const {error } = useConnect();
        const navigate=useNavigate();
        const handleClose = () => {
        if(isConnected) navigate('/');
        else navigate('/connect-wallet');
        setShow(false)
    };

    console.log(error,'error in wallet connect');
    return (
        <>
        <Modal contentClassName="wallet-connect-modal" show={show} onHide={handleClose}>
            <Modal.Header  closeButton>
            <Modal.Title><h6>{info}</h6></Modal.Title>
            </Modal.Header>

        </Modal>
        </>
    );
    }

    export default WalletModal;
