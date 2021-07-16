import React from 'react';
import { Route } from 'react-router-dom';
import Messages from '../Messages/Messages'
import Bands from '../Bands/Bands';
// import './UserProfile.css';

const UserProfile = (props) => {
    if (props.user) {
        // const userFavBands = props.bands.filter(band => 
        //     props.user.likedbands.includes(band.id) && band)
        console.log(props)
        return (
            <div>
                <div>
                    <h1>Welcome {props.user.name}</h1>
                    <img src={props.user.photo} alt="user"/>
                    <p>{props.user.bio}</p>
                </div>
                {/* <Bands bands={userFavBands} updateBand={props.updateBand} /> */}
            </div>

        )
            
    } else {
        return(<div>This is not correct</div>)
    }
}

export default UserProfile;

// class User(models.Model):
//     username = models.CharField(max_length=50)
//     password = models.CharField(max_length=50)
//     name = models.CharField(max_length=100)
//     photo = models.TextField()
//     bio = models.TextField()

//     def __str__(self):
//         return self.name