import React from 'react';
import { Route, Link } from 'react-router-dom';
import Band from '../Band/Band';
import SignupBand from '../SignupBand/SignupBand';
// import './Bands.css';

const Bands = (props) => {
    return (
        <div>
            {props.bands.map(band =>
                <Band band={band} updateBand={props.updateBand}/>
            )}
            <Route path='/bandsignup' render ={() => 
            <SignupBand />
          } />
            <h1><Link to ='/bandsignup'>Create A Band</Link></h1>
        </div>
    )
}

export default Bands;