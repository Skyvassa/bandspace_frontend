import React, {useState} from 'react';

const MessagePost = (props) => {
    const [content, updateContent] = useState("");

    const onChange = evt => {
        updateContent(evt.target.value)
    }
    return (
        <div>
            <h2>Type Your Post Here:</h2>
            <form className="messagepost" onSubmit={(evt) => props.createMesssage(evt, content)}>
                <textarea 
                    className='content'
                    type="textarea"
                    maxLength="200"
                    name="content"
                    value={content}
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

export default MessagePost;