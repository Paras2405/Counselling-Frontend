import React, {useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Communication from './Communication'
const Chat = ({showAlert}) => {

 const navigate= useNavigate()
    const userToken = localStorage.getItem('auth-token')
    const [room, setRoom] = useState(null)
    const roomInput= useRef(null)

    const leavechatroom=()=>{
      navigate('/Meetings')
    }
  return (
    <div >
       {room?
    <Communication userToken={userToken} room={room}/>:
    <div className='room text-center '>
      <h3 className='text-center mt-5'>Welcome to Chat session</h3>
    
   <label className='mx-3'>Enter Room name</label>
   <input style={{width:"80%"}}  className="form-control mx-5 mb-3 mt-3"  ref={roomInput}type="text" /> 
   <button className='btn btn-success mx-3' onClick={()=>{setRoom(roomInput.current.value)
                                                       showAlert("Entered chat room","success")                                          
   }}>Enter chat</button>

    </div>

    }
      <h4 className='mt-3 text-center'>Interact with the counselors share your thoughts</h4>
    
      <h5 className='text-center '>Don't have a room name?</h5>
      <div className="container text-center">
      <Link  className ="btn btn-primary"role="button" to='/Appointments'>Access room name</Link>
      <button className="btn btn-danger mx-3" onClick={()=>leavechatroom()}>Leave Chat</button>
      </div>
     
    </div>
  )
}

export default Chat
