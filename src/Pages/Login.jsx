import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
//import config from './config';

function Login(props) {
  //const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit=async(e)=>{

    e.preventDefault()
 
    const response = await fetch(`https://counselling-backend-1.onrender.com/api/auth/login`, {
       
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({email,password})
  
      })
    const json= await response.json()
    console.log(json)
    if(json.success){
      localStorage.setItem('auth-token',json.authtoken)
       console.log('Logged in!')
       console.log('Token set:', localStorage.getItem('auth-token'));
        props.showAlert('User Logged in successfully','success')
     
        navigate('/Meetings')
      
    
    }
    
   
    else if(json.error === "User does not exist"){
 
      console.log('User  does not exist')
      props.showAlert('User does not exist','warning')
      
        navigate('/SignUp')
    }

     
}
  return (

    <div className='container mt-5'>
      <h2 style={{textDecoration:"underline"}}className='text-center mb-5'>Login</h2>
     <form onSubmit={handleSubmit}>
  <div className="mb-3 d-flex justify-content-center">
   
    <input type="email" style={{width:"50%"}} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-3" required aria-describedby="emailHelp" placeholder='Email'/>
 
  </div>
  <div className="mb-3 d-flex justify-content-center">
 
    <input type="password" style={{width:"50%"}} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-3" required placeholder='Password'/>
  </div>
  
  <button type="submit" className="formsubmit">Submit</button>
</form>
      
    </div>
  )
}

export default Login
