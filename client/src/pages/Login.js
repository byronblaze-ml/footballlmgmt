import React from 'react';
import './Login.css'
import Axios from 'axios';
import { useState } from 'react';

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        console.log(username);

    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <div className='LoginForm'>
                <input type='text' placeholder='Username' 
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }} 
                />
                <input type='text' placeholder='Password'
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}  />
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;