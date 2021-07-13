import React, {useState} from 'react';

const SignupBand = (props) => {
    const [content, updateContent] = useState({
        username: '',
        password: '',
        name: '',
        photo: '',
        bio: ''
    });

    const onChange = evt => {
        updateContent(evt.target.value)
    }
    return (
        <div>
            <h2>Signup Field</h2>
            <form onSubmit={(evt) => props.createUser(evt, content)}>
                <input className='username'
                    type="textbox"
                    maxLength="50"
                    name="username"
                    value={content}
                    onChange={onChange}
                />
                    <input className='password'
                    type="password"
                    maxLength="50"
                    name="password"
                    value={content}
                    onChange={onChange}
                />
                    <input className='band_name'
                    type="textbox"
                    maxLength="100"
                    name="band_name"
                    value={content}
                    onChange={onChange}
                />
                    <input className='photo'
                    type="textbox"
                    name="photo"
                    value={content}
                    onChange={onChange}
                />
                    <input className='about'
                    type="textbox"
                    name="about"
                    value={content}
                    onChange={onChange}
                />
                <input className='genre'
                    type="textbox"
                    name="genre"
                    value={content}
                    onChange={onChange}
                />
                <input className='music_url'
                    type="textbox"
                    name="music_url"
                    value={content}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="submit"
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