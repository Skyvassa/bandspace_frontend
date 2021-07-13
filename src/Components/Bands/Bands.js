import React from 'react';
import { Route, Link } from 'react-router-dom';
import Band from '../Band/Band';
import SignupBand from '../SignupBand/SignupBand';
// import './Bands.css';

const Bands = (props) => {
    return (
        <div>
            <h1><Link to ='/bandsignup'>Create A Band</Link></h1>
            {props.bands.map(band =>
                <Band band={band} updateBand={props.updateBand}/>
            )}
            <Route path='/bandsignup' render ={() => 
            <SignupBand />
          } />
        </div>
    )
}

export default Bands;