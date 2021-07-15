import React from 'react';
import YoutubePlayer from '../Youtube/Youtube';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to BandSpace, we hope you have a 'Happy' day!</h1>
            <YoutubePlayer embedId="ZbZSe6N_BXs" />
        </div>
    )
}

export default Home;