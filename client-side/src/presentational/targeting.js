import React from 'react';

const Targeting = (props) => {

    // Not going second layer
    const showObj = (obj) => {
        for (let key in obj) {
            return (
            <div>
            <h2>{props.keyword}</h2>
            <h3>{key}</h3>
            </div>
            );
        }
    };

    if (props.property.length > 0) {
        return (
            <div>
                <h1>This are the targeting properties</h1>
                {props.property.length > 0 ? props.property.map(prop => {
                    return (
                        <div key={props.keyword}>
                            <h3>{props.keyword}:</h3>
                            <h2>{prop}</h2>
                        </div>
                    );
                }
                ) : <></>}
            </div>
        );
    } else {
        return (
        <div>
            {showObj(props.property)}
        </div>
        );
    }
    
}

export default Targeting;
