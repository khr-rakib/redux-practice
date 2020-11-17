import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const firebase = useFirebase();
    const { email, password } = userInfo
    const history = useHistory()


    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async e => {
        e.preventDefault()
        await firebase.login({
            email,
            password,
        });
        history.push("/dashboard");
    }

    return (
        <div>

            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="enter email" onChange={handleChange} />
                <br />
                <input type="password" name="password" placeholder="enter password" onChange={handleChange} />
                <br />
                <button>Login</button>
            </form>

        </div>
    );
};

export default Login;