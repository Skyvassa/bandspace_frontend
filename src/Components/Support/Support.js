import React, {useState} from 'react';
import { init, send,  } from 'emailjs-com';
import './Support.css'

const Support = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
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
            <h1>Are you having issues? Please enter a Support request below and
                a customer service specialist will be there to assist!
            </h1>
            <form className='support' onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
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
        </div>
        )
}

export default Support