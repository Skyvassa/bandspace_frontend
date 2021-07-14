import React, {useState} from 'react';
import './SignupBand.css'

const SignupBand = (props) => {
    const [content, updateContent] = useState({
        username: '',
        password: '',
        name: '',
        photo: '',
        bio: ''
    });

    const onChange = evt => {
        updateContent({ ...content, [evt.target.name]: evt.target.value })
    }
    return (
        <div>
            <h2>Sign Up Field</h2>
            <form className="signupband" onSubmit={(evt) => props.createBand(evt, content)}>
                Username:<input className='username'
                    type="textbox"
                    maxLength="50"
                    name="username"
                    value={content.username}
                    onChange={onChange}
                />
                Password:<input className='password'
                    type="password"
                    maxLength="50"
                    name="password"
                    value={content.password}
                    onChange={onChange}
                />
                Band Name:<input className='band_name'
                    type="textbox"
                    maxLength="100"
                    name="band_name"
                    value={content.band_name}
                    onChange={onChange}
                />
                Photo Url:<input className='photo'
                    type="textbox"
                    name="photo"
                    value={content.phot}
                    onChange={onChange}
                />
                About:<input className='about'
                    type="textbox"
                    name="about"
                    value={content.about}
                    onChange={onChange}
                />
                Genre:<input className='genre'
                    type="textbox"
                    name="genre"
                    value={content.genre}
                    onChange={onChange}
                />
                Music Url:<input className='music_url'
                    type="textbox"
                    name="music_url"
                    value={content.music_url}
                    onChange={onChange}
                />
                <br></br>
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default SignupBand;

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