import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Screens/Home";
import AssetDetails from "./Screens/Home/DiscoverAssets/AssetDetails";
import ProfileCollections from "./Screens/Home/Profile/Collections";
import Creations from "./Screens/Home/Profile/Creations";
import Profile from "./Screens/Home/Profile/Profile";
import Page404 from './Screens/Page404/Index';
import Marketplace from './Screens/MarketPlace/Index';
import Collections from './Screens/Collections/Index';
import Creators from './Screens/Creators/Index';
import Wallets from "./Screens/Wallets/Index";
import {Buffer} from 'buffer';
import NftsCreate from './Screens/CreateNft/Index';
import GetSignature from "./components/GetSignature";
import { useEffect } from "react";
import useMoveToTop from "./components/MoveToTop/useMoveToTop";
import Details from "./Screens/Home/DiscoverAssets/Details";
import Bids from "./Screens/Home/DiscoverAssets/Bids";
import History from "./Screens/Home/DiscoverAssets/History";
Buffer.from('anything','base64');

// Window.ethereum type
declare var window: any
export const ethereum = window.ethereum;

function App() {
  
  useMoveToTop();
  const location=useLocation();

  useEffect(() => {
   
  }, [location.key])
  
  return (
    <>
    <GetSignature/>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route path="assets-details/:id" element={<AssetDetails />} >
    {/* <Route index element={<Details />} />
    <Route path="details" element={<Details />} />
    <Route path="bids" element={<Bids />} />
    <Route path="history" element={<History />} /> */}

    </Route>
    <Route path="marketplace" element={<Marketplace />} >
    </Route>
    <Route path="collections" element={<Collections />} >
    </Route>
    <Route path="profile" element={<Profile />} >
    </Route>
    <Route path="creators" element={<Creators />} >
    </Route>
    <Route path="profile" element={<Profile />} >
    <Route index element={<Creations />} />
    <Route path="creations" element={<Creations />} />
    <Route path="collections" element={<ProfileCollections />} />
    </Route>
    <Route path="profile/:id" element={<Profile />} >
    <Route index element={<Creations />} />
    <Route path="creations" element={<Creations />} />
    <Route path="collections" element={<ProfileCollections />} />
    </Route>
    <Route path="connect-wallet" element={<Wallets />} >
    </Route>
    <Route path="create-nft" element={<NftsCreate />} >
    </Route>
    <Route path='*' element={<Page404/>}/>
  </Routes>
    </>
  )
}

export default App
