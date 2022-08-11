import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CreatorBox from './CreatorBox';
import { PopularCreatorsStyled } from './style';

const popularCreators = [
    {
        name: '@xander_hall...',
        amount: '20.58 ETH'
    },
    {
        name: '@xsal_hall...',
        amount: '23.58 ETH'
    },
    {
        name: '@asda_hall...',
        amount: '5.58 ETH'
    },
    {
        name: '@xkaleem_hall...',
        amount: '6.58 ETH'
    },
    {
        name: '@xaharry_hall...',
        amount: '7.58 ETH'
    },
    {
        name: '@xarslan_hall...',
        amount: '13.58 ETH'
    },
    {
        name: '@xander_hall...',
        amount: '16.58 ETH'
    },
    {
        name: '@xander_hall...',
        amount: '16.58 ETH'
    },
]

const items = [
    ...popularCreators.map(({ name, amount}, index) => (
        <CreatorBox  name={name} amount={amount} id={index} key={index}/>
    ))
]

type SlideButtonProps = {
    isDisabled: boolean
}

type IndexType = {
    item: number
}


const PopularCreators = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeIndex1, setActiveIndex1] = useState<number>(0);
    const [activeIndex2, setActiveIndex2] = useState<number>(0);

    const syncActiveIndex = ({ item }: IndexType) => setActiveIndex(item);
    const syncActiveIndex1 = ({ item }: IndexType) => setActiveIndex1(item);
    const syncActiveIndex2 = ({ item }: IndexType) => setActiveIndex2(item);

    // When the user scrolls down 20px from the top of the document, slide down the navbar
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (activeIndex !== items.length - 1) {
            document.getElementById('btn-next')?.click();
        } else {
            document.getElementById('btn-prev')?.click();
        }
        document.getElementById('btn-next1')?.click();
        if (activeIndex !== items.length - 2) {
            document.getElementById('btn-next2')?.click();
        } else {
            document.getElementById('btn-prev2')?.click();
        }
    }

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        991: { items: 4 },
        1024: { items: 6 },
        1200: { items: 7 }
    };

    // Prev Buttons
    const renderPrevButton = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-prev' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&lt;</span>;
    };
    const renderPrevButton1 = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-prev1' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&lt;</span>;
    };
    const renderPrevButton2 = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-prev2' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&lt;</span>;
    };

    // Next Buttons
    const renderNextButton = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-next' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&gt;</span>;
    };
    const renderNextButton1 = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-next1' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&gt;</span>;
    };
    const renderNextButton2 = ({ isDisabled }: SlideButtonProps) => {
        return <span id='btn-next2' style={{ display: 'none', opacity: isDisabled ? 0 : 0 }}>&gt;</span>;
    };

    return (
        <PopularCreatorsStyled>
            <div className="section__creators mt-100" id='section-creators'>
                <div className="">
                    <div className="space-y-30">
                        <div className="section_head">
                            <h2 className="section__title text-center">Popular Creators</h2>
                        </div>
                        <div className="section__body space-y-20">
                            <AliceCarousel
                                mouseTracking={false}
                                items={items}
                                disableSlideInfo={true}
                                responsive={responsive}
                                activeIndex={activeIndex}
                                disableDotsControls
                                paddingLeft={50}
                                paddingRight={50}
                                onSlideChanged={syncActiveIndex}
                                renderPrevButton={renderPrevButton}
                                renderNextButton={renderNextButton}
                                infinite
                            />

                            <div className="-ml-70 creators_anim2">
                                <AliceCarousel
                                    mouseTracking={false}
                                    items={items}
                                    disableSlideInfo={true}
                                    responsive={responsive}
                                    activeIndex={activeIndex1}
                                    disableDotsControls
                                    infinite
                                    paddingLeft={50}
                                    paddingRight={50}
                                    onSlideChanged={syncActiveIndex1}
                                    renderPrevButton={renderPrevButton1}
                                    renderNextButton={renderNextButton1}
                                />
                            </div>
                            <div className="d-flex space-x-10 justify-content-center
								creators_anim3">
                                <AliceCarousel
                                    mouseTracking={false}
                                    items={items}
                                    infinite
                                    paddingLeft={50}
                                    paddingRight={50}
                                    disableSlideInfo={true}
                                    responsive={responsive}
                                    activeIndex={activeIndex2}
                                    disableDotsControls
                                    onSlideChanged={syncActiveIndex2}
                                    renderPrevButton={renderPrevButton2}
                                    renderNextButton={renderNextButton2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade popup show" id="popup_bid_success" tabIndex={-1} role="dialog"
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
                            <a href="/" className="btn btn-dark w-full"> Watch the listings</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade popup show" id="popup_bid" tabIndex={-1} role="dialog"
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
                    </div>
                </div>
            </div>
            <div className="section mt-100">
            </div>
        </PopularCreatorsStyled>
    )
}

export default PopularCreators