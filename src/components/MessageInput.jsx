import { useState } from "react";
import axios from "axios";

const MessageInput = ({ chatId, onMessageSent }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/message', { chatId, text: newMessage });
            setNewMessage('');
            onMessageSent(response.data); // Refresh messages
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default MessageInput