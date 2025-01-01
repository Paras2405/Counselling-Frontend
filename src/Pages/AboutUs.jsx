import React from 'react'
import Footer from '../components/Footer'
import p1 from '../p1.jpeg'
import p2 from '../p2.jpeg'
import p3 from '../p3.jpeg'
import c5 from '../c5.jpeg'


function AboutUs() {
  return (
    <>
     <div className='px-2  fw-semibold'>
     <h3 className='text-center mb-3 mt-5'>About Us</h3>
     We, the students of Fr. C. Rodrigues Institute of Technology (FCRIT), are proud to present this website as a step toward fostering better communication and understanding between students and counselors.

This platform is designed to bridge the gap by providing an easy-to-use, online interface where:

Students can share their concerns, seek guidance, and access valuable resources to enhance their academic and personal growth.
Counselors can efficiently connect with students, understand their needs, and provide tailored support.
Our mission is to create a safe, inclusive, and effective platform that not only addresses the challenges faced by students but also empowers them to thrive. By blending technology with empathy, we aim to build a stronger, more supportive community within our college.

Let’s grow together!


      
    
     <div className="container my-5">
    <div className="row text-center">
   
      <div className="col-md-4">
        <img src={p1} alt="Team Member 1" className="w-50 h-60"/>
        <h5 className="mt-3">Riyanka Dey</h5>
       
      </div>
    
      <div className="col-md-4">
        <img src={p2} alt="Team Member 2" className="w-50 h-60"/>
        <h5 className="mt-3">Priyanka Chaudhari</h5>
      
      </div>
    
      <div className="col-md-4">
        <img src={p3} alt="Team Member 3" className="w-50 h-60"/>
        <h5 className="mt-3">Paras Kadam</h5>
      
      </div>
    
      <div className="col-md-4">
        <img src={c5} alt="Team Member 4" className="w-50 h-60"/>
        <h5 className="mt-3">Srushti Bhirud</h5>
     
      </div>
    </div>
  </div>
  
    </div>
    <Footer></Footer>
    </>
   
  )
}

export default AboutUs
