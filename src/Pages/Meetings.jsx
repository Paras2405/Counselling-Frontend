import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect,useRef} from 'react'
import Footer from '../components/Footer'
import { jwtDecode } from 'jwt-decode'
import LoadingBar from "react-top-loading-bar"; // Import the loading bar
//import { jwtDecode } from 'jwt-decode'
//backendurl="https://counselling-backend-1.onrender.com"

function Meetings() {
  var number=0
const [user, setUser] = useState(null)
const loadingBarRef = useRef(null); 
 


  useEffect(() => {
    const token =localStorage.getItem('auth-token')

    const fetchUserData = async () => {
          if (token) {
            loadingBarRef.current.continuousStart(); // Start the loading bar
            try {
              const decoded = jwtDecode(token);
              console.log("Decoded Token:", decoded);
    
              const userId = decoded.id || decoded.sub;
              const name = decoded.name;
    
              if (userId) {
                setUser({ userId, name });
              } else {
                console.error("userId is not present in the token");
              }
            } catch (error) {
              console.error("Error decoding token:", error.message);
            }
            finally {
              loadingBarRef.current.complete(); // Complete the loading bar
            }
          }
        };
    
        fetchUserData();
  }, [])
  


  return (
    <>
        <LoadingBar color="#f11946" ref={loadingBarRef} shadow={true} />
    <div className='container '>
      <h2 className=' text-center py-5'>Hello {user?.name ||"User"}</h2>
       <div className="box">
        <div className="flatbox">
          <p className=' text-white text-center '> You have {number} scheduled Meetings</p>
        </div>
        <Link className='Appointments' style={{ gap:"20px",margin:"6px",backgroundColor:"#3D3838",color:"white",width:"130px",height:"45px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"2px 2px 2px black"}} role="button" to={'/Appointments'} >Schedule Now</Link> 
       </div>
       <h4 className='text-center mt-5'>Need Help?Talk with your personalised counselor now</h4>
       <div className="communication">
       <Link id='video' className='Appointments' style={{ gap:"20px",margin:"10px",fontWeight:"600",backgroundColor:"#FBEEEE",width:"160px",height:"50px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button" to={'/VideoWindow'} >Video Conferencing </Link> 
       <Link id='chat' className='Appointments' style={{ gap:"20px",margin:"10px",fontWeight:"600",backgroundColor:"#FBEEEE",width:"160px",height:"50px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button" to={'/chat'} >Chat session </Link> 
       </div>

   
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default Meetings
