import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AuthService from "./auth.service";

function Logout() {

    const [errors, setErrors] = useState("");

    useEffect(() => {
        AuthService.logout()
            .then(r => console.log(r))
            .catch((error) => {
                console.log("logout error", error);
                setErrors("logout error");
            });
        setErrors("logged out successfully");

    }, []);


    return (
        <div>
            <h4>{errors}</h4>
            <Link to="/">
                Back to main page
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/logout">
                Logout
            </Link>
        </div>);
}

export default Logout;
