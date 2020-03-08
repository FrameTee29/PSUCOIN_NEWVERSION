import styled from 'styled-components';
import React, { useState } from 'react';
import Route, { Router } from 'next/router'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'



const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const info = useSelector(state => state.LoginPSU);
    console.log(info)

    var profile = {
        user:username,
        pass: password
    }
   
    
    const login = async () => {
        const res = await axios.post('/api/Apipsu', { username, password });
        dispatch({ type: "LOGIN_PSU", profile})  
    }


    return (
        <div>
            {/* <form> */}
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>LOGIN</button>
            {/* </form> */}
        </div>
    );
}

export default Login;