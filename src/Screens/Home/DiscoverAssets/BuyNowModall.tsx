import React from 'react';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props: any) {
    return (
        <Modal
            {...props}
            centered
            contentClassName='bid-modal'
        >
            <button onClick={() => props.setModalShow(false)} type="button" className="close" data-dismiss="modal"
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

        </Modal>
    );
}

function BuyNowModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button className="btn btn-primary btn-lg" data-toggle="modal"
                data-target="#popup_buy" onClick={() => setModalShow(true)}> Buy Now</button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default BuyNowModal;