/*import React, { useState } from 'react';
import Chatlist from './Chatlist';
import Messages from './Messages';
import MessageInput from './MessageInput';

const ChatApp = ({ userId }) => {
    const [selectedChatId, setSelectedChatId] = useState(null);

    // Define the onSelectChat function to update the selected chat ID
    const onSelectChat = (chatId) => {
        setSelectedChatId(chatId); // Update the state with the selected chat ID
        console.log("Selected Chat ID:", chatId); // Log to ensure it's updating
    };

    return (
        <div className="chat-app">
            <div>Selected Chat ID: {selectedChatId}</div>
            {/* Pass the onSelectChat function to the ChatList component */
           /* <Chatlist userId={userId} onSelectChat={onSelectChat} />
            
            {selectedChatId && (
                <div className="chat-window">
                    {/* Pass the selected chat ID to the Messages and MessageInput components */
                    //<Messages chatId={selectedChatId} />
                    ////<MessageInput chatId={selectedChatId} onMessageSent={(msg) => console.log(msg)} />
                //</div>
           // )*/
       // </div>
    //);
//};

//export default ChatApp;

import React from 'react';

const ChatApp = ({ userChats, userChatsError }) => {
  if (userChatsError) {
    return <div className="alert alert-danger text-center">{userChatsError.error}</div>;
  }

  return (
    <div className="container mt-4">
      {userChats && userChats.length > 0 ? (
        <div className="d-flex flex-column">
          {/* Chat List Section */}
          <div className="mb-3">
            <h5 className="text-center">Chat List</h5>
            <ul className="list-group">
              {userChats.map((chat, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{chat.name}</strong>
                    <p className="mb-0 text-muted small">{chat.lastMessage || 'No messages yet'}</p>
                  </div>
                  <span className="badge bg-primary rounded-pill">{chat.unreadCount || 0}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chatbox Section */}
          <div>
            <h5 className="text-center">Chatbox</h5>
            <div className="border p-3" style={{ height: '400px', overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
              {/* Placeholder for chat messages */}
              <p className="text-muted text-center">Select a chat to start messaging</p>
            </div>

            {/* Message Input Section */}
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  aria-label="Message input"
                />
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">
          No chats available. Start a conversation!
        </div>
      )}
    </div>
  );
};

export default ChatApp;
