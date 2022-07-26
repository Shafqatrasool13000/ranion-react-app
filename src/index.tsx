import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import App from './App';

import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain,
} from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'
// const { chains, provider, webSocketProvider } = configureChains(
//   [chain.ropsten],
//   [publicProvider()],
// );

const infuraId = 'https://mainnet.infura.io/v3/4fcaca0b380a490c8a5760bfce713b99';

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  infuraProvider({ infuraId }),
  publicProvider(),
])


const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
ReactDOM.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
