import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div  style={{backgroundColor:"#FBEEEE"}} className='container-fluid  footer'>
  <ul className="list-group ">
  <li   ><Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/Articles">Articles</Link ></li>
  <li  ><Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/OurCounselors">Our Counselors</Link ></li>
  <li  ><Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/AboutUs">About</Link ></li>
  <li  ><Link  style={{ marginLeft: "5px", fontWeight: "600" }} className="nav-link" to="/Exercises">Exercises</Link ></li>

</ul>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7319891071706!2d72.9891293741841!3d19.075517751989686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cae0d8c5ab%3A0xbbf4481d662ca2d8!2sFr.%20Conceicao%20Rodrigues%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1734442568178!5m2!1sen!2sin"   title="Google Maps" width="300" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>




      <p className='text-center'>@copyrights 2024</p>
    </div>
  )
}

export default Footer
