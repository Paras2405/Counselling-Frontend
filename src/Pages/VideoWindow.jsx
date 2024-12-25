/*import React, { useEffect, useState, useRef } from "react";
import {jwtDecode} from "jwt-decode"; // Correct import for jwtDecode
import { createMeeting } from "../api"; // Import your function from api.js
import { Row, Col } from "react-simple-flex-grid";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";

// Chunk function defined outside for reusability
const chunk = (arr, size = 3) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};

// Participant View Component
function ParticipantView({ participantId }) {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const {
    displayName,
    webcamOn,
    webcamStream,
    micStream,
    screenShareStream,
    micOn,
    screenShareOn,
  } = useParticipant(participantId);

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((err) =>
            console.error("VideoElem.current.play() failed", err)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((err) =>
            console.error("AudioElem.current.play() failed", err)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  useEffect(() => {
    if (screenShareRef.current) {
      if (screenShareOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);
        screenShareRef.current.srcObject = mediaStream;
        screenShareRef.current
          .play()
          .catch((err) =>
            console.error("ScreenShareElem.current.play() failed", err)
          );
      } else {
        screenShareRef.current.srcObject = null;
      }
    }
  }, [screenShareStream, screenShareOn]);

  return (
    <div key={participantId}>
      <audio ref={micRef} autoPlay />
      {webcamOn || micOn ? (
        <div>
          <h2>{displayName}</h2>
          <video
            height={"100%"}
            width={"100%"}
            ref={webcamRef}
            autoPlay
          />
        </div>
      ) : null}

      {screenShareOn ? (
        <div>
          <h2>Screen Shared</h2>
          <video
            height={"100%"}
            width={"100%"}
            ref={screenShareRef}
            autoPlay
          />
        </div>
      ) : null}
      <br />
      <span>
        Mic: {micOn ? "Yes" : "No"}, Camera: {webcamOn ? "Yes" : "No"}, Screen
        Share: {screenShareOn ? "Yes" : "No"}
      </span>
    </div>
  );
}

// ChatWindow Component
const ChatWindow = () => {
  const [user, setUser] = useState(null); // Store user data (name and userId)
  const [meetingId, setMeetingId] = useState("");
  const [token, setToken] = useState("");
  const [isJoined, setIsJoined] = useState(false); // Flag for joining the meeting

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setToken(token);

    const fetchUserData = async () => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("Decoded Token:", decoded);

          const userId = decoded.id || decoded.sub;
          const name = decoded.name;

          if (userId) {
            setUser({ userId, name });
          } else {
            console.error("userId is not present in the token");
          }
        } catch (error) {
          console.error("Error decoding token:", error.message);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleCreateMeeting = async () => {
    if (token) {
      try {
        const meetingId = await createMeeting(token);
        console.log("Created Meeting ID:", meetingId);
        setMeetingId(meetingId);
      } catch (error) {
        console.error("Error creating meeting:", error?.response?.data || error.message);
      }
    }
  };

  const updateMeetingId = (e) => {
    setMeetingId(e.target.value);
  };

  const handleJoinMeeting = () => {
    if (meetingId) {
      setIsJoined(true);
      console.log("Joining Meeting with ID:", meetingId);
    }
  };

  function JoinScreen({ updateMeetingId, handleCreateMeeting, handleJoinMeeting }) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter meeting id"
          value={meetingId}
          onChange={updateMeetingId}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleCreateMeeting} style={{ marginRight: "10px" }}>
          Create Meeting
        </button>
        <button onClick={handleJoinMeeting}>Join</button>
      </div>
    );
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return isJoined && meetingId ? (
    <div>
      <h2 className="text-center">Welcome, {user.name}</h2>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: user.name || "Guest",
        }}
        token={token}
      >
        <MeetingConsumer>
          {() => <MeetingGrid meetingId={meetingId} />}
        </MeetingConsumer>
      </MeetingProvider>
    </div>
  ) : (
    <JoinScreen
      updateMeetingId={updateMeetingId}
      handleCreateMeeting={handleCreateMeeting}
      handleJoinMeeting={handleJoinMeeting}
    />
  );
};

// MeetingGrid Component
function MeetingGrid({ meetingId }) {
  const [joined, setJoined] = useState(false);
  const { join, leave, toggleMic, toggleWebcam, toggleScreenShare, participants } = useMeeting();

  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  const participantKeys = Array.from(participants.keys());
  const participantChunks = chunk(participantKeys);

  return (
    <div>
      <header>Meeting ID: {meetingId}</header>
      <div>
        {joined ? (
          <div>
            <button onClick={leave}>Leave</button>
            <button onClick={toggleMic}>Toggle Mic</button>
            <button onClick={toggleWebcam}>Toggle Webcam</button>
            <button onClick={toggleScreenShare}>Toggle Screen Share</button>
          </div>
        ) : (
          <button onClick={joinMeeting}>Join</button>
        )}
        {participantChunks.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={80}>
            {row.map((participantId) => (
              <Col key={participantId} span={4}>
                <ParticipantView participantId={participantId} />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;*/

import React, { useEffect, useState, useRef, useMemo } from "react";
import { authToken, createMeeting } from "../api";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import {jwtDecode} from "jwt-decode"; // Correct import for jwtDecode

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState("");

  const handleJoin = async () => {
    if (meetingId) {
      await getMeetingAndToken(meetingId);
    }
  };

  const handleCreate = async () => {
    await getMeetingAndToken(null); // Creating a new meeting
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting ID"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <button className="btn btn-danger mx-2" onClick={()=>handleJoin()}>Join</button>
      <span> or </span>
      <button className="btn btn-danger mx-2" onClick={()=>handleCreate()}>Create Meeting</button>
    </div>
  );
}

function ParticipantView({ participantId }) {
  const micRef = useRef(null);

  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      try {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      } catch (error) {
        console.error("Error creating video stream:", error.message);
        return null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) =>
          console.error("Audio playback failed", error)
        );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && videoStream && (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height="300px"
          width="300px"
          onError={(err) => {
            console.error("Participant video error", err);
          }}
        />
      )}
    </div>
  );
}

function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();

  return (
    <div>
      <button  className="btn btn-primary mx-2" onClick={()=>leave()}>Leave</button>
      <button  className="btn btn-primary mx-2"onClick={()=>toggleMic()}>Toggle Mic</button>
      <button  className="btn btn-primary mx-2"onClick={()=>toggleWebcam()}>Toggle Webcam</button>
    </div>
  );
}

function MeetingView({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(false);

  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined(true),
    onMeetingLeft: onMeetingLeave,
  });

  const handleJoin = () => {
    join();
  };

  return (
    <div className="container">
      <h3 className="text-center">Meeting ID: {meetingId}</h3>
      {joined ? (
        <div>
          <Controls />
          {/* Render all participants */}
          {[...participants.keys()].map((participantId) => (
            <ParticipantView key={participantId} participantId={participantId} />
          ))}
        </div>
      ) : (
        <button onClick={handleJoin}>Join</button>
      )}
    </div>
  );
}

function VideoWindow() {
  const [meetingId, setMeetingId] = useState(null);
  const [user, setUser] = useState(null);



  const getMeetingAndToken = async (id) => {
    try {
      const newMeetingId = id || (await createMeeting({ token: authToken }));
      setMeetingId(newMeetingId);
    } catch (error) {
      console.error("Error fetching meeting ID:", error.message);
    }
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
  

    const fetchUserData = async () => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("Decoded Token:", decoded);

          const userId = decoded.id || decoded.sub;
          const name = decoded.name;

          if (userId) {
            setUser({ userId, name });
          } else {
            console.error("userId is not present in the token");
          }
        } catch (error) {
          console.error("Error decoding token:", error.message);
        }
      }
    };

    fetchUserData();
  }, []);
  return authToken && meetingId ? (
    <div>
      <h2>Welcome {user.name}</h2>
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
    </div> ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default VideoWindow;
