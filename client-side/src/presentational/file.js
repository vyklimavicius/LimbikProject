import React from 'react';
import Targeting from './targeting';
import { useState } from 'react';


const File = (props) => {

    const [property, setProperty] = useState({});
    const [keyword, setKeyword] = useState("");

    const handleSearch = (e) => {
          let value = e.target.value.toLowerCase();
          setKeyword(value);
          if (value.length === 0) {
            setProperty({});
          } else if (value.length > 0) {
              let obj = props.file.targeting;
              for (let key in obj){
                if (obj[key] === obj[value]){
                    setProperty(obj[key])
                }
              }
          };
    };
        
    

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
     <input id="search" type="text" onChange={handleSearch} value={keyword}></input>
     {keyword.length > 0 ? <Targeting property={property} keyword={keyword}></Targeting> : <h2>No record of this property</h2>}
     </div>
    );
};


export default File;