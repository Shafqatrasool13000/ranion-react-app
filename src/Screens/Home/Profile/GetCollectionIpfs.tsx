import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type CollectionProps={ ipfsData: any,name:string,id:string }

const GetCollectionIpfs = ({ ipfsData,name,id }:CollectionProps ) => {

  const navigate=useNavigate();
  const [data, setData] = useState<any>("");
    const getIpfsData = () => {
        axios
          .get("https://ipfs.io/ipfs/" + ipfsData.tokenIPFSPath)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err, "error in ipfs"));
      };
    console.log(data,'data of ipfs');
      useEffect(() => {
        getIpfsData();
      }, []);

      const navigateDetails=(id:string,image:string,description:string,name:string,ipfsLink:string)=>{
        navigate(`/assets-details/${id}`,{
          state:{
            image,description,name,ipfsLink
          }
        })
      }
  return (
    <>
<div className="collections space-y-10 mb-30">
			<div className="collections_item">
				<div className="images-box space-y-10">
					<div className="d-flex space-x-10">
						
						<img height={180} style={{width: "33.33%"}}
							src={
                data
                      ? "https://ipfs.io/ipfs/" + data?.image.split("//")[1]
                      :  "assets/img/items/item_1.png"
               }
							alt=""/>
							<img height={180} style={{width: "33.33%"}}
							src={
                data
                      ? "https://ipfs.io/ipfs/" + data?.image.split("//")[1]
                      :  "assets/img/items/item_1.png"
               }
							alt=""/>
							<img height={180} style={{width: "33.33%"}}
							src={
                data
                      ? "https://ipfs.io/ipfs/" + data?.image.split("//")[1]
                      :  "assets/img/items/item_1.png"
               }
						alt=""/>
					</div>
					<div>
						<img className="big-img" height={440} src={
        data
              ? "https://ipfs.io/ipfs/" + data?.image.split("//")[1]
              :  "assets/img/items/item_1.png"
       }
							alt=""/>
					</div>
				</div>
			</div>
			<div className="collections_footer justify-content-between">
				<h5 className="collection_title"><a href="/">{name}
					</a></h5>
				<a href="/" className="likes space-x-3">
					<i className="ri-heart-3-fill"></i>
					<span className="txt_md">2.1k</span>
				</a>
			</div>
			<div className="creators space-x-10">
				<span className="color_text txt_md"> 5 items · Created by</span>
				<div className="avatars space-x-5">
					<a href="/">
						<img
							src="assets/img/avatars/avatar_1.png"
							alt="Avatar" className="avatar avatar-sm"/>
					</a>
				</div>
				<div role="button" onClick={()=>navigateDetails(id,("https://ipfs.io/ipfs/" + data?.image.split("//")[1]),data.description,data.name,"https://ipfs.io/ipfs/" + ipfsData.tokenIPFSPath)}>
					<p className="avatars_name txt_sm"> {data&&id.slice(0,12)+'...'} </p>
				</div>
			</div>
		</div>
    </>
  )
}

export default GetCollectionIpfs