import React from 'react';
import Band from '../Band/Band';
// import './Bands.css';

const Bands = (props) => {
    return (
        <div>
            {props.bands.map(bands =>
                <Band />
            )}
        </div>
    )
}