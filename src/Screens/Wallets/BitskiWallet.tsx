import React from 'react'
import { Bitski } from 'bitski';
import { Button } from 'react-bootstrap';

const BitskiWallet = () => {

// Host https://github.com/BitskiCo/bitski-js/blob/main/packages/browser/callback.html on https://myapp.com/callback.html


// const provider = bitski.getProvider();


// public calls are always available
// const network = await web3.eth.getBlockNumber();
const authHandler=async()=>{
    const bitski = new Bitski('C368d49f9-23e1-472b-99b3-977661276f7c', 'http://localhost:3000/');
    await bitski.signIn();
}
// connect via oauth to use the wallet (call this from a click handler)

// now you can get accounts
// const accounts = await web3.eth.getAccounts();
  return (
    <div>
        <Button className='btn-success' onClick={authHandler}>LoginHandler</Button>
    </div>
  )
}

export default BitskiWallet