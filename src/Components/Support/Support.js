import React, {useState} from 'react';
import { init, send,  } from 'emailjs-com';
import './Support.css'

const Support = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        subject: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (evt) => {
        evt.preventDefault();
        send(
            'service_u4hpwea',
            'template_2z7cjif',
            toSend,
            'user_HH9N2SfSnKI8xlbcHlYWT'
        )
            .then((response) => {
                console.log('Success!', response.status, response.text);
                alert('Your mail has been sent!')
            })
            .catch((err) => {
                console.log('Failed.', err);
            });
    };

    const handleChange = (evt) => {
        setToSend({ ...toSend, [evt.target.name]: evt.target.value });
    };

    return (
        <div>
            <main>
                <h1> Are you having issues? Please enter a Support request below and
                    a customer service specialist respond shortly!
                </h1>
                <form className='support' onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='subject'
                        placeholder='Subject of Issue'
                        value={toSend.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        type='textarea'
                        name='message'
                        placeholder='Your Message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your Email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
        )
}

export default Support