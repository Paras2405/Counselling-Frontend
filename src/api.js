/*export const createMeeting = async () => {
    // Get the token from localStorage
    const authToken = localStorage.getItem('auth-token'); 

    if (!authToken) {
        console.error("No auth token found in localStorage");
        throw new Error("Authorization token missing");
    }

    try {
        const apiEndpoint = `${process.env.REACT_APP_API_LOCAL_URL}/api/create-meeting`;
        console.log("API Endpoint:", apiEndpoint); // Log the full endpoint to check for correctness

        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,  // Pass the token in the Authorization header
            },
            body: JSON.stringify({ token: authToken }),
        });

        if (!response.ok) {
            throw new Error("Failed to create meeting");
        }

        const data = await response.json();
        console.log(data);
        return data.meetingId; // Return the unique meetingId
        
    } catch (error) {
        console.error("Error in createMeeting:", error);
        throw error;
    }
};
*/

//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxYjFmOWNkZC05MjhjLTQwN2EtYWVkZS1jMjc5YzliMmFjNGQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNDg2OTgyMCwiZXhwIjoxODkyNjU3ODIwfQ.LxoE15ab8O1JMjnygwhbGDyRo6UCfK4-kAUfXZhI3ZY";
// API call to create a meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};

