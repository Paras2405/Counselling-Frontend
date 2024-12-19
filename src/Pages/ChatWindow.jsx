import React, { useEffect, useState } from 'react';
import ChatApp from '../components/ChatApp';
import {jwtDecode} from 'jwt-decode'; // Ensure the correct import

const ChatWindow = () => {
    const [user, setUser] = useState(null); // Store user data (name and userId)

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // Get the token from localStorage

        if (token) {
            try {
                const decoded = jwtDecode(token); // Decode the token to extract user info
                console.log('Decoded Token:', decoded); // Check the decoded token structure
                const userId = decoded.id || decoded.sub; // Use `userId` or `sub` if from Google
                const name = decoded.name;
                
                if (userId) {
                    setUser({ userId, name }); // Set the user data in state
                  } else {
                    console.error("userId is not present in the token");
                  }
            } catch (error) {
                console.error('Error decoding token:', error.message);
            }
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>; // Show loading until the user is fetched and decoded
    }
    console.log('User State:', user);


    return (
        <div>
            <h2 className='text-center'>Welcome, {user.name}</h2>
            {/*<ChatApp userId={user.userId} /> {/* Pass the userId to ChatApp */}
        </div>
    );
};

export default ChatWindow;
