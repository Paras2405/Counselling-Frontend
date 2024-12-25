import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatlist = ({ userId, onSelectChat }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/chat/${userId}`);
                setChats(response.data);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };
        fetchChats();
    }, [userId]);

    return (
        <div className="chat-list container">
            {chats.map(chat => (
                <div key={chat._id}   onClick={() => {
                    console.log("Clicked chat ID:", chat._id); // Debug log
                    onSelectChat(chat._id); // Trigger selection
                }}>
                      {chat.name}
                </div>
            ))}
        </div>
    );
};

export default Chatlist;
