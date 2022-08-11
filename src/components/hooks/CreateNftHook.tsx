import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { Signer } from "ethers";
import { GetFactoryContract } from "../utils/contracts";
import { TokenFactory } from "../typechain-types";

export const CreateNftHook = () => {

    return useCallback(
        async (name: string, symbol: string, uri: string, fee: string): Promise<void> => {
            const signer: Signer = await getSigner();
            let token: TokenFactory = GetFactoryContract(signer);
            try {
                const tx = await token.createNFT(name, symbol,uri,fee);
                await tx.wait();
                console.log(tx, 'create nft response')
            } catch (error) {
                console.log(error);

            }
        },
        []
    );
};
