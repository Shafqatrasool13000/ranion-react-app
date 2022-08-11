import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import CreateNft from "./CreateNft";
import FileUpload from "./FileUpload";
import Navbar from '../../components/Navbar/Index';
import { createContext} from "react";

export const UploadContext=createContext<any>('');
const Index = () => {


return (
    <>
    <Navbar/>
    <Container>
    <div className="mt-3">
    <FileUpload/>
    </div>
    <div className="mt-3">
    <CreateNft/>
    </div>
    </Container>
    <Footer/>
    </>
)
}

export default Index