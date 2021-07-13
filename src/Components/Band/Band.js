import React from 'react';
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { render } from '@testing-library/react';
// import './Band.css';

const Band = (props) => {
    return (
        <div>
            <img src={props.band.photo} alt="band"/>
            <p>{props.band.band_name}</p>
            <p>{props.band.about}</p>
            <p>{props.band.genre}</p>
            <a href={props.band.music_url} />
            <button onClick={() => props.updateBand(props.band.id)}>Like</button>
        </div>
    )
}

export default Band


// Like Toggle
// state = { liked: false }

// toggle = () => {
//     let localLiked = this.state.liked;
//     localLiked = !localLiked;
//     this.setState({ liked: localLiked})
// };

// render() {
//     return (
//         <div className="container">
//             <center>
//                 <p>Click on the Like Button</p>

//                 <div 
//                     className ="container"
//                     styler={{ border: "1px solid black", width: "15%"}}
//                     onClick={() => this.toggle()}
//                 >
//                     {this.state.liked === false ? (
//                         <FontAwesomeIcon icon={faHeart} />
//                     ) : (
//                         <FontAwesomeIcon icon={faHeartBroken} />
//                     )}
//                 </div>
//             </center>
//         </div>
//     )
// }

// ref : https://www.geeksforgeeks.org/how-to-create-a-responsive-like-button-in-reactjs/
//  ref 2: https://fontawesome.com/v6.0/docs/web/setup/quick-start

// class Band(models.Model):
//     username = models.CharField(max_length=50)
//     password = models.CharField(max_length=50)
//     band_name = models.CharField(max_length=100)
//     photo = models.TextField()
//     about = models.CharField(max_length=200)
//     genre = models.CharField(max_length=100)
//     music_url = models.TextField()

//     def __str__(self):
//         return self.band_name