import React, {useState} from 'react';
import './Signup.css';

const Signup = (props) => {
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
            <h2>User Sign Up Field</h2>
            <form className="signup" onSubmit={(evt) => props.createUser(evt, content)}>
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
                Name:<input className='name'
                    type="textbox"
                    maxLength="100"
                    name="name"
                    value={content.name}
                    onChange={onChange}
                />
                Photo Url:<input className='photo'
                    type="textbox"
                    name="photo"
                    value={content.photo}
                    onChange={onChange}
                />
                Bio:<input className='bio'
                    type="textbox"
                    name="bio"
                    value={content.bio}
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


export default Signup;


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