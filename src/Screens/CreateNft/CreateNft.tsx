import {useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CreateNftHook } from "../../components/hooks/CreateNftHook";

const CreateNft = () => {

    const [name, setName] = useState<string>('');
    const [symbol, setSymbol] = useState('');
    const [fee, setFee] = useState('');
    const createNftHandler = CreateNftHook();

return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="form-label mt-4">Name</div>
        <Form.Control value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Nft 's Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="form-label mt-4">Symbol</div>
        <Form.Control value={symbol} onChange={(event)=>setSymbol(event.target.value)} type="text" placeholder="Symbol" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="form-label mt-4">Royality Fee</div>
        <Form.Control value={fee} onChange={(event)=>setFee(event.target.value)} type="number" placeholder="Fee" />
        </Form.Group>
        
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <div className="form-label">Description</div>
        <Form.Control value={description} placeholder='Enter description' onChange={(event)=>setDescription(event.target.value)} as="textarea" rows={3} />
        </Form.Group> */}
        <Button onClick={async () => await createNftHandler(name, symbol,localStorage.getItem('hash') as string,fee)}>Create</Button>
    </Form>

    </>
    );    
    };

export default CreateNft;
