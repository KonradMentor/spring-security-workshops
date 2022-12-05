import React from "react";

function Message(props) {
    return (
        <div>
            <h3>{props.messageTitle}</h3>
            <div className="center">
                <p>ID: {props.messageId}</p>
                <p>Content: {props.messageContent}</p>
            </div>
        </div>
    );
}

export default Message;
