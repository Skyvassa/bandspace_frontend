import React from 'react';
import { Route, Link } from 'react-router-dom';
import Band from '../Band/Band';
import SignupBand from '../SignupBand/SignupBand';
import './Bands.css';

const Bands = (props) => {
    return (
        <div className="bands-wrapper">
            {props.bands.map(band =>
                <Band band={band} updateBand={props.updateBand}/>
            )}
            <button><Link to ='/bandsignup'>Create A Band</Link></button>
            <Route path="/bandsignup" render={() => 
            <SignupBand />
            } />
        </div>
    )
}

export default Bands;