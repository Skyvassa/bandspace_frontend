import react from 'react';

const Support = () => {
    <div>
        <h1>Enter Support Ticket Below</h1>
        <form onSubmit={onSubmit}>
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
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default Support