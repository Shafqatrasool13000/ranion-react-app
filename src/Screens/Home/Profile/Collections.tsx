import { useCollections } from "../../../components/hooks/useCollection"
import GetCollectionIpfs from "./GetCollectionIpfs"

type CollectionsType={
	id:string,
	nftContract:{
	name:string,nfts:[
		tokenIPFSPath:string
	]
	}
}
const Collections = () => {

	
	const {data,loading,error}=useCollections();
	console.log(data,'data of collections')

	if(loading) return <h2>Loading ...</h2>
	if(error)  return  <h2>Error ...</h2>
    return (
	<>
	<div className="row justify-content-center mb-30_reset">
		{
			data.collectionContracts.map(({id,nftContract:{name,nfts}}:CollectionsType)=>(
		<div key={id} className="col-lg-6 col-md-6 col-sm-8">
		<GetCollectionIpfs ipfsData={nfts[0]} name={name} id={id}/>
	</div>
		))
		}
	</div>
	</>
)
}

export default Collections