import React from 'react';
import Targeting from './targeting';
import { useState } from 'react';
import Box from '@material-ui/core/Box';



const File = (props) => {

    // style
    const toggleHoverUp = () => {
        setCssStyle({ ...cssStyle, backgroundColor: '#9D7EA0'});
    };

    const toggleHoverDown = () => {
        setCssStyle({...cssStyle, backgroundColor: 'white'});
    };

    const [property, setProperty] = useState({});
    const [keyword, setKeyword] = useState("");
    const [cssStyle, setCssStyle] = useState({ 
        backgroundColor: 'white', 
        fontFamily: "monospace",
        margin:"auto",
        width: "50%",
        height: "40%",
        boxShadow: '5px 10px'
    });

    // event handler

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
      <Box border={1} style={cssStyle} onMouseEnter={toggleHoverUp} onMouseLeave={toggleHoverDown}>
     <h2><span role="img" aria-label="file">🗃</span>File number:{props.file.id}</h2>
     <h3><span role="img" aria-label="text">📋</span>Text:{props.file.text}</h3>
     <h4><span role="img" aria-label="eyes">👀</span>Impressions:{props.file.impressions}</h4>
     <h4><span role="img" aria-label="mouse">🖲</span>Clicks:{props.file.clicks}</h4>
     <h4><span role="img" aria-label="dollar">💵</span>Amount spend:{props.file.spend.amount}</h4>
     <h4><span role="img" aria-label="symbol">💱</span>Currency:{props.file.spend.currency}</h4>
     <br />
          <label htmlFor="search" style={{ fontSize: '20px' }}><span role="img" aria-label="bullsEye">🎯</span>Targeting property:</label>
     <input id="search" type="text" onChange={handleSearch} value={keyword}></input>
     {keyword.length > 0 ? <Targeting property={property} keyword={keyword}></Targeting> : <h2>No record of this property</h2>}
     </Box>
    );
};


export default File;