import React from 'react';
import PropTypes from 'prop-types';
import './Youtube.css'

const YoutubePlayer = ({ embedId }) => (
    <div className='video-responsive'>
        <iframe 
            width='853'
            height='480'
            src={`http://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded Youtube'
        />
    </div>
)

YoutubePlayer.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubePlayer;