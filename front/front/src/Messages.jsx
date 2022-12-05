import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import MessageService from "./message.service";
import Message from "./message";

function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        MessageService.getMessages().then(res => setMessages(res.data)).then(r => console.log(r));
    }, []);

    return (
        <>
            <Link to="/message/new">Add new</Link>
            <div className="Messages">
                {messages.map((message) => {
                    return <Message messageTitle={message.id}
                                    messageId={message.title}
                                    messageContent={message.content}
                    />
                })}
            </div>
            <Link to="/login">
                Login
            </Link>
            <Link to="/logout">
                Logout
            </Link>
        </>
    );
}

export default Messages;
