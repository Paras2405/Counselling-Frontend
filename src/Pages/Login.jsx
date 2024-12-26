import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; // Fix import here
import Spinner from '../components/Spinner';



function Login(props) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate(); // Declare navigate only once
  //Google auth logic
  const onLoginSuccess = async(res) => {
    try{
  
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/google-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: res.credential }),
    });

    const json = await response.json();
    console.log("Backend Response:", json);
    setLoading(false)
    const decoded = jwtDecode(res.credential);
    console.log(decoded);
     
    if (json.success) {
      // Store the auth token returned by your backend
      localStorage.setItem('auth-token', json.authtoken);
      console.log('Logged in!');
      console.log('Token set:', localStorage.getItem('auth-token'));
      props.showAlert('User Logged in successfully', 'success');
      navigate('/Meetings');
    } else {
      props.showAlert('Google Login failed on backend', 'danger');
      navigate('/login')
    }

  } 
  catch (error) {
    console.error('Error during Google login:', error);
    props.showAlert('Google Login failed', 'danger');
  }


    
  };

  const onLoginError = (res) => {
    console.log('Login Failed', res);
  };
//Normal login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log(json);
  setLoading(false)
    if (json.success) {
      localStorage.setItem('auth-token', json.authtoken);
      console.log('Logged in!');
      console.log('Token set:', localStorage.getItem('auth-token'));
      props.showAlert('User Logged in successfully', 'success');

      navigate('/Meetings'); // Navigate on successful login
    } else {
      console.log('Invalid email or password');
      props.showAlert('Invalid email or password', 'warning');
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textDecoration: 'underline' }} className="text-center mt-5 py-5">
        Login
      </h2>
      {loading && <Spinner/>}
      <form className='container' onSubmit={handleSubmit}>
        <div className="mb-3 d-flex justify-content-center">
          <input
            type="email"
            style={{ width: '50%' }}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-3"
            required
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <input
            type="password"
            style={{ width: '50%' }}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-3"
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className="formsubmit mb-5">
          Submit
        </button>
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
      </form>
     
    </div>
  );
}

export default Login;
