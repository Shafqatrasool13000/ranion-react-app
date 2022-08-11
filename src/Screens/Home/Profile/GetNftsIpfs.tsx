import axios from "axios";
import { useEffect, useState } from "react";
import PlaceBidModal from "../DiscoverAssets/PlaceBidModal";

export const IpfsDetails = ({ tokenIPFSPath }: { tokenIPFSPath: any }) => {
  const [data, setData] = useState<any>("");

  const getIpfsData = () => {
    axios
      .get("https://ipfs.io/ipfs/" + tokenIPFSPath)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error in ipfs"));
  };

  useEffect(() => {
    getIpfsData();
  }, []);

  const BidModalFunction = ({ setShowModal }: any) => {
    return (
      <div onClick={() => setShowModal(true)} className="action">
        <div
          className="btn
                btn-primary btn-sm
                btn_auction"
          data-toggle="modal"
          data-target="#popup_bid"
        >
          <i
            className="ri-auction-line
                    color_white"
          ></i>
          Place Your Bid
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card_head">
        <img
          id="img"
          src={
            data
              ? "https://ipfs.io/ipfs/" + data?.image.split("//")[1]
              : "assets/img/avatars/avatar_3.png"
          }
          alt=""
        />
        <a
          href="/"
          className="likes
    space-x-3"
        >
          <i className="ri-heart-3-fill"></i>
          <span className="txt_sm">3.5k</span>
        </a>
        <PlaceBidModal>
          <BidModalFunction />
        </PlaceBidModal>
      </div>
      <h6 className="card_title">
        <a className="color_black" href="Item-details.html">
          {data.name}
        </a>
      </h6>
    </>
  );
};
