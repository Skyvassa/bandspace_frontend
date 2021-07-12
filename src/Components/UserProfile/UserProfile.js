import React from 'react';
import Bands from '../Bands/Bands';
// import './UserProfile.css';

const UserProfile = (props) => {
    if (props.user) {
        // const userFavBands = props.bands.filter(band => 
        //     props.user.favBands.includes(band.id) && band)
        return (
            <div>
                <div>
                    <p>Welcome to a user profile page</p>
                    <h1>{props.user.username}</h1>
                    <p>This is test text</p>
                </div>
                {/* <Bands bands={userFavBands} updateBand={props.updateBand} /> */}
            </div>
        )
            
    } else {
        return(<div>This is not correct</div>)
    }
}

export default UserProfile;