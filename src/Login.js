import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
import logo from './logov1.png'

function Login() {
    return (
        <div className="login">
            <img src={logo}/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
