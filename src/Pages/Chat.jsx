import React, {useState, useRef } from 'react'

import Communication from './Communication'
const Chat = () => {
    const userToken = localStorage.getItem('auth-token')
    const [room, setRoom] = useState(null)
    const roomInput= useRef(null)
  return (
    <div>
       {room?
    <Communication userToken={userToken} room={room}/>:
    <div className='room '>
   <label className='mx-3'>Enter Room name</label>
   <input  className='mx-3' ref={roomInput}type="text" /> 
   <button className='mx-3' onClick={()=>setRoom(roomInput.current.value)}>Enter chat</button>

    </div>

    }
    </div>
  )
}

export default Chat
