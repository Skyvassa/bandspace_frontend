import React, {useState} from 'react';
import './SignupBand.css'

const SignupBand = (props) => {
    const [content, updateContent] = useState({
        band_name: '',
        photo: '',
        about: '',
        genre: '',
        music_url: '',
    });

    const onChange = evt => {
        updateContent({ ...content, [evt.target.name]: evt.target.value })
    }
    return (
        <div>
            <h2>Band Registration Field</h2>
            <form className="signupband" onSubmit={(evt) => props.createBand(evt, content)}>
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
                    value={content.photo}
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