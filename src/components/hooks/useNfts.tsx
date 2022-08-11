import { gql, useQuery } from "@apollo/client";

const GET_NFTS = gql`
query {
nfts(first:10) {
id
tokenId
tokenIPFSPath
owner {
id
nfts(first:3){
id
}
} 
}
}
`;

export const UseNfts = () => {
const { data, error, loading } = useQuery(GET_NFTS);
return {
    data,
    error,
    loading,
};
};
