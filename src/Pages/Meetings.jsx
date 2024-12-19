import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from '../components/Footer'
//import { jwtDecode } from 'jwt-decode'
//backendurl="https://counselling-backend-1.onrender.com"

function Meetings() {
  var number=0
 const [userName, setUserName] = useState("")
 


  useEffect(() => {
    const fetchData=async()=>{

      try{
        const response = await fetch(`http://localhost:5000/api/auth/getuser`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
             Authorization: `Bearer ${localStorage.getItem("auth-token")}`
          }
  
        })
        const json = await response.json()
        if(json.success){
          setUserName(json.name)
        
        }
        else{
          console.error("Failed to fetch user data");
        }
      }
      catch(err){
        console.error("Error fetching user data:", err);
      }
      
     
    
  fetchData()
  
  
    }
  }, [])
  


  return (
    <>
    <div className='container '>
      <h2 className=' text-center py-5'>Hello {userName ||"User"}</h2>
       <div className="box">
        <div className="flatbox">
          <p className=' text-white text-center '> You have {number} scheduled Meetings</p>
        </div>
        <Link className='Appointments' style={{ gap:"20px",margin:"6px",backgroundColor:"#3D3838",color:"white",width:"130px",height:"45px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"2px 2px 2px black"}} role="button" to={'/Appointments'} >Schedule Now</Link> 
       </div>
       <h4 className='text-center mt-5'>Need Help?Talk with your personalised counselor now</h4>
       <div className="communication">
       <Link id='chat' className='Appointments' style={{ gap:"20px",margin:"10px",fontWeight:"600",backgroundColor:"#FBEEEE",width:"160px",height:"50px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button" to={'/ChatWindow'} >Chat session </Link> 
       <Link id='video' className='Appointments' style={{ gap:"20px",margin:"10px",fontWeight:"600",backgroundColor:"#FBEEEE",width:"160px",height:"50px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button" to={'/Video'} >Video Conferencing </Link> 
       </div>

   
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default Meetings
