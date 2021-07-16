import React from 'react';

const UserProfile = (props) => {
    if (props.user) {

        console.log(props)
        return (
            <div>
                <div>
                    <h1>Welcome {props.user.name}</h1>
                    <img src={props.user.photo} alt="user"/>
                    <p>{props.user.bio}</p>
                </div>
            </div>

        )
            
    } else {
        return(<div>This is not correct</div>)
    }
}

export default UserProfile;