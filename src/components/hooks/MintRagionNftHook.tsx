import { useCallback } from "react";
// import { getSigner } from "../utils/connectors";
// import {Signer } from "ethers";
// import {GetNftTokenContract } from "../utils/contracts";
// import { NftToken} from "../typechain-types";

export const MinitRagionNftHook = () => {

    // const {nft,signature}=JSON.parse(localStorage.getItem('nft-signature') as string);
    return useCallback(
        async (): Promise<void> => {
            // const signer: Signer = await getSigner();
            // let token: NftToken = GetNftTokenContract(signer);
            try {
                // const tx = await token.mintRagoinNFT(nft,signature,{value:ethers.utils.parseEther("0.2")});
                // await tx.wait();
                // console.log(tx, 'data in tex')
            } catch (error) {
                console.log(error);
            }
        },
        []
    );
};
