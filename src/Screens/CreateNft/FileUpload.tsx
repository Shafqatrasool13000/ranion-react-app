import axios from "axios";
import {useEffect,useState } from "react";
import { FileUploadStyled } from "./style";

const FileUpload = () => {

const [fileImg, setFileImg] = useState<any>(null);
const [uploadedImg, setUploadedImg] = useState<any>();


const sendFileToIPFS = async () => {

    try {
    const formData = new FormData();
    formData.append("file", fileImg);
    const resFile = await axios({
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: formData,
    headers: {
    pinata_api_key: `b1f5e83224ed9d107c8a`,
    pinata_secret_api_key: `7198b47cb38dfaec36b1393d4fb5553691de5488028074fe9158202c7ad7885f`,
    "Content-Type": "multipart/form-data",
    },
    });

    const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
    window.localStorage.setItem('hash',`${resFile.data.IpfsHash}`);
    console.log(ImgHash);
    //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
    console.log("Error sending File to IPFS: ");
    console.log(error);
    }
};
useEffect(() => {
    if(fileImg){
    sendFileToIPFS();
    }
}, [fileImg])

const onChange = (event: React.FormEvent) => {
const files = (event.target as HTMLInputElement).files;
if (files && files.length > 0) {
    setFileImg(files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    setUploadedImg(uploaded_image);
    });
    reader.readAsDataURL(files[0]);
}
};
return (
    
<FileUploadStyled>
    <input type="file" accept="image/jpeg, image/png, image/jpg" name="" onChange={(e) => onChange(e)} id="" />
    <div className="mt-3">
    <div id="img-box" style={{
    backgroundImage:`url(${uploadedImg})`
    }}>
    </div>
    </div>
</FileUploadStyled>
);
};

export default FileUpload;
