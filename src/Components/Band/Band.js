import React from 'react';
import './Band.css';

const Band = (props) => {
    return (
        <div className="band-wrapper">
            <img src={props.band.photo} alt="band"/>
            <h3>{props.band.band_name}</h3>
            <p>{props.band.about}</p>
            <p>Genre: {props.band.genre}</p>
            <a href={props.band.music_url} />
            <button onClick={() => props.updateBand(props.band.id)}>Like</button>
        </div>
    )
}

export default Band