import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Messages = ({ chatId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/message/${chatId}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        if (chatId) fetchMessages();
    }, [chatId]);

    return (
        <div className="messages">
            Messages for Chat {chatId}
            {messages.map(message => (
                <div key={message._id} className={message.sender === 'userId' ? 'sent' : 'received'}>
                    {message.text}
                </div>
            ))}
        </div>
    );
};
export default Messages