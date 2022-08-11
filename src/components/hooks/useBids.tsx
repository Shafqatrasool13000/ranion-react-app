import { gql, useQuery } from "@apollo/client";

const COLLECTIONS_DATA = gql`
  query {
    collectionContracts(skip: 10) {
      id
      nftContract {
        name
        id
        nfts(first: 1) {
          bids {
            id
            status
            datePlaced
            amountInETH
            seller {
              id
            }
          }
        }
      }
    }
  }
`;

export const useBids = () => {
  const { data, error, loading } = useQuery(COLLECTIONS_DATA);
  return {
    data,
    error,
    loading,
  };
};
