import React from 'react';
import { Route, Link } from 'react-router-dom';
import Message from '../Message/Message';
import MessagePost from '../MessagePost/MessagePost';
import './Messages.css'

const Messages = (props) => {
    console.log(props)
    return (
        <div className="messages-wrapper">
            <h1>Anonymous Message Board</h1>
            {props.messages.map(message =>
                <Message 
                    message={message} 
                    editmessage={props.editmessage} 
                    deletemessage={props.deletemessage}
                />
            )}
            <br></br>
            <button className='createpost'><Link to ='/messages/new'>Create a Post</Link></button>
            <Route path="/messages/new" render={() => 
            <MessagePost createMessage={props.createMessage}/>
            } />
        </div>
    )
}

export default Messages;