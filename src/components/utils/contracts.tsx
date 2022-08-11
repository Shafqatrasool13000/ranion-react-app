import { Signer } from "ethers";
import { NftToken, NftToken__factory, TokenFactory, TokenFactory__factory } from "../typechain-types";
import { factoryContract } from "./constants";

// Factory Contract

export const GetFactoryContract = (singer: Signer): TokenFactory => {
    return TokenFactory__factory.connect(factoryContract.contractAddress,singer);
};

// Nft Contract

export const GetNftTokenContract = (singer: Signer): NftToken => {
    return NftToken__factory.connect('0xe8551f42FF4e40A20898B9EeeE510FBb02897e55',singer);
};




