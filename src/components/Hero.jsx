import React from 'react'
import img from '../Hero.jpg'

import { Link } from 'react-router-dom'
function Hero() {
  return (
    <>
    <div className=' Hero'>
      <img style={{filter: "contrast(80%) brightness(70%)"}} src={img} alt="Hero" />
    
      <h1 style={{fontWeight:"600"}}className='text-center text-white '>Therapy heals your inner conscience</h1>
      <p  style={{fontSize:"16px",opacity:"0.8"}} className='text-center text-white  '>Mindcure is a platform where we can connect with profesional counselors <br></br>via Video conferencing and chat sessions and get personalized counselling in effective manner</p>
      <Link style={{textDecoration:"none"}} className='signup' to="/Signup" role="button">Get started</Link>
      <aside  className="text-center"><b>
     <h3>MindCare: Your Partner in Emotional Wellness</h3> 
        </b><br></br>
      At MindCare, we provide a safe, confidential, and compassionate space for you to explore your thoughts and feelings with experienced counselors. Our online counseling platform connects you with licensed professionals who understand your unique challenges, offering personalized support for anxiety, stress, relationships, career concerns, and more. Whether through video sessions, chat, or voice calls, MindCare ensures that help is always just a click away. Empower yourself to overcome life’s hurdles and nurture your mental health from the comfort of your home with MindCare—because your well-being matters.</aside>

     
     
      </div>
     
    </>
    

    
      

  )
}

export default Hero
