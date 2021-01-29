import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
import logo from './logov1.png'

function Login() {
    return (
        <div className="login">
            <img src={logo}/>
            <div className="login__text"> <p>NOTE: You must launch spotify before starting this application and it must be running in the background!
                </p>
                
                <p>* Must be a premium spotify member to toggle between songs. Free members can only pause and play their currently playing track.</p></div>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            <br />
            <hr />
        </div>
    )
}

export default Login;
