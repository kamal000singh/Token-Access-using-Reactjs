import React, { useState } from 'react';
import Token from '../../Token.json';

const TotalSupply = ({ web3 }) => {
    const [totalSupply, setTotalSupply] = useState('');
    const handleClick = async () => {
        const networkId = await web3.eth.net.getId();
        const tokenData = Token.networks[networkId];
        const token = new web3.eth.Contract(Token.abi, tokenData.address);
        if (token) {
            let ethName = await token.methods.totalSupply().call();
            setTotalSupply(ethName.toString());

        } else {
            window.alert('Token contract is not deployed to detected network')
        }
    }
    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-secondary fs-5 m-1" onClick={handleClick}>Total Supply</button>{totalSupply !== '' && <span className="fs-5 mx-3">{web3.utils.fromWei(totalSupply, 'ether')}</span>}
        </div>
    )
}

export default TotalSupply