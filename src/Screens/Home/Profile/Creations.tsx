import { UseNfts } from "../../../components/hooks/useNfts";
import { IpfsDetails } from "./GetNftsIpfs";


const Creations = () => {
    const {data,loading,error}=UseNfts();
    
	if(loading) return <h2>Loading ...</h2>
	if(error)  return  <h2>Error ...</h2>

	
    return (
        <>
        <div className="row mb-30_reset">
        {
        data.nfts.map(({tokenIPFSPath,id}:any)=>{
        return(
            <div key={id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="card__item three">
                <div className="card_body space-y-10">
                    <IpfsDetails tokenIPFSPath={tokenIPFSPath}/>
                    <div className="card_footer d-block
                    space-y-10">
                        <div className="d-flex
                        justify-content-between
                        align-items-center">
                            <div className="creators
                            space-x-10">
                                <div className="avatars
                                -space-x-20">
                                    <a href="/">
                                        <img
                                            src="assets/img/avatars/avatar_3.png"
                                            alt="Avatar"
                                            className="avatar
                                            avatar-sm"
                                        />
                                    </a>
                                    <a href="/">
                                        <img
                                            src="assets/img/avatars/avatar_4.png"
                                            alt="Avatar"
                                            className="avatar
                                            avatar-sm"
                                        />
                                    </a>
                                </div>
                                <a href="/">
                                    <p
                                        className="avatars_name
                                        txt_sm">
                                        @noel_meon..
                                    </p>
                                </a>
                            </div>
                            <a href="/"
                                className="space-x-3">
                                <p
                                    className="color_green
                                    txt_sm">0.035
                                    ETH</p>
                            </a>
                        </div>
                        <div className="hr"></div>
                        <div

                            className="d-flex
                            align-items-center
                            space-x-10">
                            <i
                                className="ri-vip-crown-line"></i>
                            <p className="color_text
                            txt_sm"
                                style={{ width: "auto" }}>
                                Highest bid
                            </p>
                            <span className="color_black
                            txt_sm">0.075
                                ETH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
        } 
        )}
       </div>
        </>
    )
}

export default Creations