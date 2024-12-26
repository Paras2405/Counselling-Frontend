import React, { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../FireBase-config';
import {jwtDecode} from 'jwt-decode'; // Ensure this is imported correctly

const Communication = ({ userToken, room }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, 'messages');
  const decodedToken = jwtDecode(userToken);
  const username = decodedToken.name;

  useEffect(() => {
    // Firestore query to get messages for the specified room
    const queryMessages = query(messagesRef, where('room', '==', room),orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const fetchedMessages = [];
      snapshot.forEach((doc) => {
        fetchedMessages.push({...doc.data(), id: doc.id });
      });
      console.log('Fetched messages:', fetchedMessages); // Debugging
      setMessages(fetchedMessages);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return; // Prevent empty messages

    try {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: username,
        room: room,
      });
      console.log('Message submitted:', newMessage);
      setNewMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  return (
    <div className="chat-app container mt-3 border border-black">
   <h4>This is Public Chat room  of Counselor-xyz</h4>
        <div style={{backgroundColor:"#3D3D38",height:"50px",width:"100%"}} className="upper container-fluid ">
       
            <h2 className='text-white  text-center d-flex justify-content-center align-items-center'>Welcome to :{room}</h2>
        </div>
      {/* Display messages */}
      <div className="messages-list ">
        {messages.length > 0 ? (

          messages.map((message) => (
            <div key={message.id}>
                <span style={{fontWeight:"bold"}}>{message.user}</span>
                {message.text}

                </div>
          
          ))
        ) : (
          <p>No messages yet. Be the first to send one!</p>
        )}
      </div>

      {/* Input for sending messages */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Type your message..."
          />
        </div>
        <button type="submit" className="btn btn-danger mb-3" >
          Send
        </button>
      </form>
    </div>
  );
};

export default Communication;
