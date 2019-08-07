import React from 'react';
import Targeting from './targeting';


const File = (props) => {

    // console.log(props.file.spend.amount);
    

        return (
            <div>
                <h2>{props.file.id}</h2>
                <h3>{props.file.text}</h3>
                <h4><span role="img" aria-label="eyes">👀</span>Impressions:{props.file.impressions}</h4>
                <h4><span role="img" aria-label="mouse">🖲</span>Clicks:{props.file.clicks}</h4>
                <h4><span role="img" aria-label="dollar">💵</span>Amount spend:{props.file.spend.amount}</h4>
                <h4><span role="img" aria-label="symbol">💱</span>Currency:{props.file.spend.currency}</h4>
                <br />
                <label htmlFor="search">Targeting property</label>
                <input id="search" type="text"></input>
                {/* <Targeting></Targeting> */}
            </div>
        );
};


export default File;