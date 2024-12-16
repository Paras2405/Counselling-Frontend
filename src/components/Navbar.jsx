import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'


function Navbar(props) {
    const location =useLocation()
    const navigate= useNavigate()

     // Mock function to check login status (replace with your actual logic)
     const isLoggedIn = () => {
        const token = localStorage.getItem('auth-token');
        console.log('Auth Token:', token); // Debugging output
        console.log('Is Logged In:', token !== null); // Should log `true` or `false`
        return token !== null;
    };
    


    // Function to handle navigation to "Meetings"
    const handleMeetingsNavigation = (e) => {
        if (!isLoggedIn()) {
            e.preventDefault(); // Prevent the default navigation behavior
            props.showAlert('Please log in to access the Meetings page.','warning');
            navigate('/login'); // Redirect to login page
        }
    };
    const handlelogout =(e)=>{
        localStorage.removeItem('auth-token')
        props.showAlert('You have been logged out','warning')
        navigate('/')

    }
    return (
        <div>
            <nav style={{ zIndex: 10, position: "sticky", height: "70px",backgroundColor:"#FBEEEE" }} className="navbar navbar-expand-lg ">
                <div className="container-fluid">

                    <Link  style={{ color: "#225DF3", fontWeight: "600" }} className="navbar-brand" to="#">Mindcure </Link >



                    <button style={{ marginBottom: "10px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbox" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link " aria-current="page" to="/">{location.pathname==='/Meetings'?'':'Home'}</Link >
                            <Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link " aria-current="page" to="/Articles">Articles</Link >
                            <Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/AboutUs">About us</Link >
                            <Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/OurCounselors">Our Counselors</Link >
                            <Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link " to={'/Meetings'}   onClick={handleMeetingsNavigation}>{location.pathname==='/Meetings'?'':'Meetings'}</Link >
                           { !isLoggedIn() && ( <Link className="login"style={{ gap:"20px",margin:"6px",backgroundColor:"#3D3838",color:"white",width:"80px",height:"35px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button"  to={location.pathname === '/login' ? '/signup' : '/login'}>    {location.pathname === '/login' ? 'Sign Up' : 'Login' }</Link>)}
                          { isLoggedIn() && (<Link className='logout' style={{ gap:"20px",margin:"6px",backgroundColor:"#3D3838",color:"white",width:"80px",height:"35px", border:"none",borderRadius:"5px",textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}} role="button" to={'/'} onClick={handlelogout}>Logout</Link>)}  
                        </div>
                    </div>
                    
                </div>
               
            </nav>
        </div>
    )
}

export default Navbar



