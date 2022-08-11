import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props: any) {

    
    return (
        <Modal
            {...props}
            centered
            contentClassName='bid-modal'
        >
            <button type="button" onClick={() => props.setModalShow(false)} className="close ml-auto" data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body space-y-20 p-40">
                <h3>Place a Bid</h3>
                <p>You must bid at least <span className="color_black">15 ETH</span>
                </p>
                <input type="text" className="form-control"
                    placeholder="00.00 ETH" />

                <p>Enter quantity. <span className="color_green">5 available</span>
                </p>
                <input type="text" className="form-control"
                    value="1" />
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
        </Modal>
    );
}

type PlaceBidProps={
    children:JSX.Element,
}
function PlaceBidModal({children}:PlaceBidProps) {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
        {React.cloneElement(children, {setShowModal})}
        {/* {React.cloneElement(children, {setShowModal:'hello'})} */}
            <MyVerticallyCenteredModal
                show={showModal}
                onHide={() => setShowModal(false)}
                setModalShow={setShowModal}
            />
        </>
    );
}

export default PlaceBidModal;