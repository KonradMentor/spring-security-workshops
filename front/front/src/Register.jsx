import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AuthService from "./auth.service";

function NewTask() {

    const [errors, setErrors] = useState("");

    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const {username, password} = form;

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        AuthService.register(username, password)
            .then(res => {
                console.log("Request complete! response:", res);
            }).catch((error) => {
            console.log("login error", error);
            setErrors("registration error");
        });
        setErrors("registered successfully");
        setForm({
            username: "",
            password: ""
        });
    }

    return (
        <div className={"wrapper-container"}>
            <div className={"outer-box"}>
                <div className={"inner-box"}>
                    <h1 className={"title"}>Register</h1>
                    <h4>{errors}</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                        <button className={"submit-btn"} type="submit">
                            Register
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

export default NewTask;
