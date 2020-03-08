import styled from 'styled-components';
import React, { useState } from 'react';
import Route, { Router } from 'next/router'
import axios from 'axios';



const Login=(props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result,setResult]=useState('');
  
    const login = async () => {
        const res = await axios.post('/api/Apipsu', { username, password });
        console.log("PSUPASSPORT = "+res.data)
        setResult([...res.data])

    }
    return(
        <div>
            <form>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button  onClick={login}>LOGIN</button>
                {result}
            </form>
        </div>
    );
}

export default Login;