import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MessageService from "./message.service";

function NewMessage() {

    const [errors, setErrors] = useState("");

    const [form, setForm] = useState({
        messageTitle: "",
        messageContent: ""
    });
    const {messageTitle, messageContent} = form;

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        MessageService.createMessage({title: messageTitle, content: messageContent})
            .then(res => {
                console.log("Request complete! response:", res);
            }).catch((error) => {
            console.log("creating message error", error);
            setErrors("creation error");
        });
        setErrors("created successfully");
    }

    return (
        <div className={"wrapper-container"}>
            <div className={"outer-box"}>
                <div className={"inner-box"}>
                    <h1 className={"title"}>Add new message</h1>
                    <h4>{errors}</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="messageTitle"
                            placeholder="messageTitle"
                            value={messageTitle}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="messageContent"
                            placeholder="messageTitle"
                            value={messageContent}
                            onChange={handleChange}
                            required
                        />
                        <button className={"submit-btn"} type="submit">
                            Add
                        </button>
                        <Link to="/">
                            Back to main page
                        </Link>
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/logout">
                            Logout
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewMessage;
