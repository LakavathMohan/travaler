import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Import useNavigate instead of useHistory

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/register", {
        username,
        email,
        password
      });

      if (res.data === "notexist") {
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert("User already exists with this email");
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert("Registration failed. Please try again.");
    }
  }

  return (
   <div className="register">
     <div className='container1'>
     <div className="curved-shape1"></div>
      <div className="form-box1 regi">

      <h2>Create Account</h2>
      <form onSubmit={submit}>
        <div className="input-box1">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id='username' required />
        <label htmlFor="username"> Username:</label>
        <i class='bx bxs-user'></i>
        </div>

        <div className="input-box1">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' required />
        <label htmlFor="email">Email: </label>
        <i class='bx bx-envelope'></i>
        

        </div>

        <div className="input-box1">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  id='password' required />
        <label htmlFor="password"> Password: </label>
        <i class='bx bxs-lock-alt'></i>

        </div>

        <div className="input-box1">
        <button className='btn1' type='submit'>Register</button>

        </div>

        <div className="regi-link1">
          <p>You have Already Account..! <Link to="/login">Login Page...</Link></p>

        </div> 
      </form>
      </div>

      <div className="info-content1 login">
        <h2>Toures &</h2>
        <h3>Travels....!</h3>
        <p>We travel, some of us forever, to seek other places, other lives, other souls.</p>
        <div className="quota">
        <h4 className='one'>A Journey is Best  </h4>
        <h4 className='two'>Measured in</h4>
        <h4 className='three'>LIFE...</h4>

        </div>
      </div>

    </div>
   </div>
  );
}

export default Register;
