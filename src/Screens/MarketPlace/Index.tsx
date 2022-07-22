import Footer from '../../components/Footer/Footer';
import HeroSection from './HeroSection';
import Navbar from '../../components/Navbar/Index';
import ArtWork from './ArtWork';
import Collections from './Collections';

const Index = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <div className="container">
        <ArtWork/>
        <Collections/>
        </div>
        <Footer/>
        </>
    )
}

export default Index