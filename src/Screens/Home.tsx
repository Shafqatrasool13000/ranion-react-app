import Navbar from '../components/Navbar/Index'
import ConnectWallet from './Home/ConnectWallet/ConnectWallet'
import DiscoverAssests from './Home/DiscoverAssets/DiscoverAssets'
import Footer from '../components/Footer/Footer'
import GlobalCommunity from './Home/GlobalCommunity/GlobalCommunity'
import PopularCreators from '../components/PopularCreators/PopularCreators'
import RecentNfts from './Home/RecentNfts/RecentNfts'
import TopGallery from './Home/TopGallery/TopGallery'

const Home = () => {
    return (
        <>
            <Navbar />
            <DiscoverAssests/>
            <PopularCreators/>
            <RecentNfts/>
            <TopGallery/>
            <GlobalCommunity/>
            <ConnectWallet/>
            <Footer/>
        </>
    )
}

export default Home