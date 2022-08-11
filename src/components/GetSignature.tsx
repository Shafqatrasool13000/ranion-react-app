import { BigNumber,Signer } from 'ethers';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PowerFanMinter } from './collection'
import { MinitRagionNftHook } from './hooks/MintRagionNftHook';
import { getSigner } from './utils/connectors';
import { factoryContract } from './utils/constants';

const GetSignature = () => {

    const navigate=useNavigate();
    // Get Signature Handler

    const getSignatureHandler=async()=>{
        const signer: Signer = await getSigner();
        const powerMinter=new PowerFanMinter('http://localhost:3000/',factoryContract.contractAddress,signer);
        const signature=await powerMinter.createNFT(1,localStorage.getItem('hash') as string,BigNumber.from("1"));
        localStorage.setItem('nft-signature',JSON.stringify(signature))
        return signature;
    }

    // Mint Nft 
    const minitRagionNftHook = MinitRagionNftHook();

    const navigateCreateNft=()=>{
        navigate('/create-nft')
    }
    
    return (
        <div className='d-flex justify-content-center my-3'>
            <Button  className='mx-3'onClick={navigateCreateNft}>Create Nft</Button>
            <Button className='mx-3' onClick={getSignatureHandler}>Signature</Button>
            <Button className='mx-3' onClick={async () => await minitRagionNftHook()}>Mint Nft</Button>
        </div>
    )
}

export default GetSignature