import React from 'react';
// import './Band.css';

const Band = (props) => {
    return (
        <div>
            <img src={props.band.photo} alt="band"/>
            <p>{props.band.band_name}</p>
            <p>{props.band.about}</p>
            <p>{props.band.genre}</p>
            <a href={props.band.music_url} />
        </div>
    )
}

export default Band

// class User(models.Model):
//     username = models.CharField(max_length=50)
//     password = models.CharField(max_length=50)
//     name = models.CharField(max_length=100)
//     photo = models.TextField()
//     bio = models.TextField()

//     def __str__(self):
//         return self.name

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