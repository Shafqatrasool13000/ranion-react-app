import { BigNumber, Signer, utils } from 'ethers'
import { TypedDataUtils } from 'ethers-eip712'

export class PowerFanMinter {

    SIGNING_DOMAIN_NAME: string
    SIGNING_DOMAIN_VERSION = '1'
    contractAddress: string
    signer: Signer
    types: any
    domain: any

    constructor(domainName: string, contractAddress: string, signer: Signer) {
        this.signer = signer
        this.SIGNING_DOMAIN_NAME = domainName
        this.contractAddress = contractAddress

        this.types = {
            EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
            ],
            RAROIN_NFT: [
                { name: 'tokenId', type: 'uint256' },
                { name: 'minPrice', type: 'uint256' },
                { name: 'uri', type: 'string' },
            ],
        }
    }

    async _signingDomain() {
        if (this.domain != null) {
            return this.domain
        }
        const chainId = await this.signer.getChainId()
        this.domain = {
            name: this.SIGNING_DOMAIN_NAME,
            version: this.SIGNING_DOMAIN_VERSION,
            verifyingContract: this.contractAddress,
            chainId,
        }
        return this.domain
    }

    async _formatNFT(nft: Object) {
        const domain = await this._signingDomain()
        return {
            domain,
            types: this.types,
            primaryType: 'RAROIN_NFT',
            message: nft,
        }
    }

    async createNFT(
        tokenId: number,
        uri: string,
        minPrice: BigNumber,
    ) {
        const nft = { tokenId, uri, minPrice }
        const typedData = await this._formatNFT(nft)
        const digest = utils.hexlify(TypedDataUtils.encodeDigest(typedData))
        
        const signature = await this.signer.signMessage(utils.arrayify(digest))
        return {    
            nft,
            signature,
            digest,
        }
    }
}
