import React from 'react'
import img from '../Hero.jpg'

import { Link } from 'react-router-dom'
function Hero() {
  return (
    <>
    <div className='Hero'>
      <img className='heroimg ' style={{filter: "contrast(80%) brightness(70%)"}} src={img} alt="Hero" />
        <div className=" flex-wrap">
        <h1 style={{fontWeight:"600",opacity:"0.8"}}className='text-center text-white '>Therapy heals your inner conscience</h1>
        <p  style={{fontSize:"16px",opacity:"0.8"}} className='text-center text-white '>Mindcure is a platform where we can connect with profesional counselors <br></br>via Video conferencing and chat sessions and get personalized counselling in effective manner</p>
        <Link style={{textDecoration:"none",marginLeft:'35%'}} className=' mt-5 signup' to="/Signup" role="button">Get started</Link>
        </div>
       
     
      
      <aside  className="text-center"><b>
     <h3>MindCure: Your Partner in Emotional Wellness</h3> 
        </b><br></br>
      At MindCure, we provide a safe, confidential, and compassionate space for you to explore your thoughts and feelings with experienced counselors. Our online counseling platform connects you with licensed professionals who understand your unique challenges, offering personalized support for anxiety, stress, relationships, career concerns, and more. Whether through video sessions, chat, or voice calls, MindCure ensures that help is always just a click away. Empower yourself to overcome life’s hurdles and nurture your mental health from the comfort of your home with MindCure—because your well-being matters.</aside>

     
     
      </div>
     
    </>
    

    
      

  )
}

export default Hero
