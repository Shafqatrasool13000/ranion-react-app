import { gql, useQuery } from "@apollo/client";

const COLLECTIONS_DATA=gql`
    query {
    collectionContracts(first:4){
    id
   nftContract{
    name
    id
    nfts(first:1){
      tokenIPFSPath
    }
  }
}
    }
`

export const useCollections=()=>{
    const {data,error,loading}=useQuery(COLLECTIONS_DATA);
    return{
        data,error,loading
    }
}