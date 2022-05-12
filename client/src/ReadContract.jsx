import React, { useEffect, useState } from 'react';
import getWeb3 from "./getWeb3";
import TotalSupply from "./contracts/components/ReadContracts/TotalSupply";
import TokenName from "./contracts/components/ReadContracts/TokenName";
import TokenBalanceOf from "./contracts/components/ReadContracts/TokenBalanceOf";
import TokenAllowance from "./contracts/components/ReadContracts/TokenAllowance";
let web3;

const ReadContract = () => {
    const [account, setAccount] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const initialFunc = async () => {
            await setLoading(true);
            web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            await setLoading(false);
        }
        initialFunc();
    }, [])

    return (<>
        {loading === true && <div className="text-center">Loading...</div>}
        {loading === false && <div className="container">
            <h1 className="text-center m-3">Read Contract</h1>
            <h3 className="text-center my-3">Your Ethereum account is {account}</h3>
            <TotalSupply web3={web3} /><br />
            <TokenName web3={web3} /><br />
            <TokenBalanceOf web3={web3} /><br />
            <TokenAllowance web3={web3} />
        </div>}
    </>
    )
}

export default ReadContract