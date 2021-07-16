import React from "react";

const Message = (props) => {
    return (
        <div className="message-wrapper">
            <p>{props.message.content}</p>
            <button onClick={() => props.editMessage(props.message.id)}>Edit</button>
            <button onClick={() => props.deleteMessage(props.message.id)}>Delete</button>
        </div>
    )
}

export default Message;