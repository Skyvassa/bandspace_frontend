import React from 'react';
import Band from '../Band/Band';
// import './Bands.css';

const Bands = (props) => {
    return (
        <div>
            {props.bands.map(band =>
                <Band band={band}/>
            )}
        </div>
    )
}

export default Bands;