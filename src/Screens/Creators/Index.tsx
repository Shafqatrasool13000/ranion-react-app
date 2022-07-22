import Footer from '../../components/Footer/Footer';
import DiscoverCreators from './DiscoverCreators';
import HeroCards from './HeroCards';
import Herosection from './Herosection';
import Navbar from '../../components/Navbar/Index';
import PopularCreators from '../../components/PopularCreators/PopularCreators';

const Index = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <HeroCards/>
    <PopularCreators/>
    <DiscoverCreators/>
    <Footer/>
    </>
  )
}

export default Index