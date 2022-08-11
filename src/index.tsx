import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "./index.css";
import App from "./App";

import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain,
} from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
// const { chains, provider, webSocketProvider } = configureChains(
//   [chain.ropsten],
//   [publicProvider()],
// );

const infuraId = "4fcaca0b380a490c8a5760bfce713b99";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  infuraProvider({ infuraId }),
  publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
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
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const APIURL =
  "https://gateway.thegraph.com/api/bcc355f0c4ff8abeb0858eb931ffc8ef/subgraphs/id/33mhqfVG26N2V8pGNoEpnF5pSr2LbLg8VQRy7PL5EydY";

const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={client}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
