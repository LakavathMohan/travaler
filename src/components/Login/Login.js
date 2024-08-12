import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import 'boxicons/css/boxicons.min.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/login", {
                email,
                password
            });

            if (res.data === "exist") {
                navigate('/home'); // Navigate to home page if login is successful
            } else if (res.data === "notexist") {
                alert("User is not registered."); // Alert user that account does not exist
            } else {
                alert("Unknown response from server"); // Handle unexpected response from server
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed. Please try again."); // Alert user about login failure
        }
    }

    return (
       <div className='signIn'>
         <div className='container'>
            <div className="curved-shape"></div>
            <div className='form-box login'>
            <h2>Login Page</h2>
            <form onSubmit={submit}>

            <div className='input-box'>
            <input type="text"  onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="email">Email:</label>
            <i class='bx bx-envelope'></i>
            </div>
            <div className="input-box">
            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="password">Password:</label>
            <i class='bx bxs-lock-alt'></i>
            </div>

            <div className="input-box"> 
            <button className='btn' type='submit'>Login</button>
            </div>

            <div className="regi-link">
                <p>Don't have a account..?  <Link to="/">Register Page...</Link></p>
            </div>
                    
            </form>
               
        </div>
        <div className="info-content login">
            <h2>WelCome Bcak..!</h2>
            <p>To Keep Connected With Us.Please Login With Your Personal Info</p>
        </div>
        </div>
       </div>
    );
}

export default Login;
