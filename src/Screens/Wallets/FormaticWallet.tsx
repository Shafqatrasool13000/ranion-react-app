import { ethers } from "ethers";
import Fortmatic from "fortmatic";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";



const FormaticWallet = () => {

const [balance, setBalance] = useState<any>();
const [loginSection, setLoginSection] = useState<boolean>(false);
const [sectionAccount, setSectionAccount] = useState<boolean>(false);

const formaticApi = "pk_test_7F2542F67C1085E9";
const fm = new Fortmatic(formaticApi);
console.log(fm, "formatic result");

let setUserInfo = async () => {
    // web3.eth.getAccounts((err, accounts) => {
    //   if (err) throw err;
    //   let address = accounts[0];
    //   console.log(address);
    //   $('#user-address').text(address);
    // });
    // Get user balance (includes ERC20 tokens as well)
    let balances = await fm.user.getBalances();
    console.log(balances);
    let ethBalance = balances.find((e: any) => {
    return e.crypto_currency == "ETH";
    });
    setBalance(ethBalance);
    // $('#user-balance').text(ethBalance.crypto_amount_display + ' ETH');
};

let handleSendTransaction = () => {
fm.transactions.send(
{ to: "string", amount: "string" },
(err: any, txnHash: any) => {
if (err) throw err;
setUserInfo();
}
);
};

let handleLogin = async () => {
// Authenticate user
let accounts = await fm.user.login();
if (accounts.length > 0) {
setLoginSection(true);
setSectionAccount(false);
// let loginSection=document.getElementById("section-login");
// document.getElementById("section-account").show();
setUserInfo();
}
};

const handleLogout = () => {
fm.user.logout();
setLoginSection(false);
setSectionAccount(true);
};

// console.log(data!.eth!.getAccounts,'data in result')

return (
    <>
    <div className="container">
    <img alt="logo" src="logo.svg" />
    <h1>Your Favorite Ethereum Wallet 💎</h1>
    <div className="divider"></div>
    <div id="section-login" className={`${loginSection?'d-none':'d-block'}`}>
    <button id="btn-login" className="btn" onClick={handleLogin}>Login with SMS</button>
    </div>
    <div id="section-account" className={`${sectionAccount?'d-none':'d-block'}`}>
    <div id="user-address"></div>
    <div id="user-balance"></div>
    <button id="btn-send" className="btn" onClick={handleSendTransaction}>Send Transaction</button>
    <button id="btn-logout" className="btn" onClick={handleLogout}>Logout</button>
    </div>
	</div>
    </>
);
};

export default FormaticWallet;
