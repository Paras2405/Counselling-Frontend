import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
//import config from './config'
//backendurl="https://counselling-backend-1.onrender.com"
function SignUp(props) {
  //const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate=useNavigate();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [mobileno,setMobileno] = useState("")
  const [role,setRole] = useState("")
  const [loading,setloading] = useState(false)

  const handleSubmit=async(e)=>{

    e.preventDefault()
   setloading(true)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/createuser`, {
       
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({name,email,password,mobileno,role})
  
      })
    const json= await response.json()
    console.log(json)
    setloading(false)
    if(json.success){
       console.log('Account Created !')
        props.showAlert('Account Created successfully','success')
        localStorage.setItem('token',json.authtoken)
        navigate('/login')
      
    
    }
   
    else if(json.error === "User already exists"){
      console.log('User exists already')
        props.showAlert('User already exists', 'warning');
        navigate('/SignUp')
    }
   else{
    console.log('Invalid Input')
    props.showAlert('Enter details correctly', 'warning');
    navigate('/SignUp')

   }

     
}



  return (
    
    <>
 <h2 style={{textDecoration:"underline"}}className='text-center mt-5 py-5'>Sign Up</h2>
 {loading && <Spinner/>}
    <div  className='container'>
 
     <form  onSubmit={handleSubmit}>
     <div className="mb-3 d-flex justify-content-center">
    <input type="text" style={{width:"50%"}} className="form-control mb-3" name="name" placeholder='Name' required  onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3 d-flex justify-content-center">
   
    <input type="email" style={{width:"50%"}}  className="form-control" name="email"  required   aria-describedby="emailHelp" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
   
  </div>
  <div className="mb-3 d-flex justify-content-center">
   
    <input type="password" style={{width:"50%"}}  className="form-control" name="password"  required placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3 d-flex justify-content-center">
   
   <input type="text" style={{width:"50%"}} className="form-control" name="mobileno"  placeholder='Mobile Number' required  onChange={(e)=>setMobileno(e.target.value)}/>
 </div>
 <div className="mb-3 d-flex justify-content-center ">
   
   <input type="text" style={{width:"50%"}}  className="form-control" name="role"  placeholder='Role' required  onChange={(e)=>setRole(e.target.value)}/>
  
 </div>
 <h5 className='text-center'>Please mention whether you are counsellor or attendant</h5>

  <button className='formsubmit mt-3' type="submit">Submit</button>
</form>
<h4 className='text-center mt-5'>Already have an account? <Link role='button' to='/Login'>Login</Link></h4>
    </div>
    </>
    
  )
}

export default SignUp
