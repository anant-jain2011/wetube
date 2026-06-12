import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Stream = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  // const [stream, setStream] = useState("");
  const vid = React.useRef(null);
  const vid2 = React.useRef(null);

  useEffect(() => {
    const { uid } = router.query;
    setId(uid);
    console.log("Stream UID:", uid);

    //   fetch("/api/send", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ message, id }),
    //   });

    //   // Open connection to our JavaScript Next.js API route
      const eventSource = new EventSource("/api/ws");

    //   // Capture generic incoming server-sent messages
      eventSource.onmessage = (event) => {
        console.log("Received SSE message:", event);
        if(event.lastEventId != id) {
          vid.current.src = JSON.parse(event.data).frameData;
        }
      };

    //   // Handle connection drops or errors
    //   eventSource.onerror = (error) => {
    //     console.error("SSE Connection error:", error);
    //     eventSource.close();
    //   };

    (async () => {
      let st = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      vid2.current.srcObject = st;
      // get the current frame from the video stream and convert it to a blob
      vid2.current.onloadedmetadata = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = vid2.current.videoWidth;
        canvas.height = vid2.current.videoHeight;

        // Capture and send a frame every 100ms (10 frames per second)
        setInterval(() => {
          // Draw the current video frame onto the hidden canvas
          context.drawImage(vid2.current, 0, 0, canvas.width, canvas.height);

          // Convert canvas to compressed base64 JPEG format
          const frameData = canvas.toDataURL("image/jpeg", 0.5); // 0.5 is compression quality

          // Send the frame string to the Express server
          console.log(frameData, 11);
          
          fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, frameData }),
          });
        }, 0.001);
      };
    })();

    // Automatically disconnect when user leaves the page
    // return () => {
    //   eventSource.close();
    // };
  }, [router.query]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>SSE Real-Time Dashboard (JS)</h1>
      {/*<input
        type="text"
        placeholder="Type a message to broadcast"
        id="messageInput"
      />
      <button
        onClick={() => {
          const message = document.getElementById("messageInput").value;
        }}
        style={{ marginLeft: "8px" }}
      >
        Broadcast
      </button>*/}
      <video
      style={{
          marginTop: "20px",
          width: "400px",
          borderRadius: "8px",
          transform: "rotateY(180deg)",
          // display: "none"
        }}
        autoPlay
        muted
        playsInline
        ref={vid2}
      />
      <img
        style={{
          marginTop: "20px",
          width: "400px",
          borderRadius: "8px",
          transform: "rotateY(180deg)",
        }}
        // autoPlay
        // muted
        // playsInline
        ref={vid}
      />
      <h2 style={{ marginTop: "20px" }}>Live Logs:</h2>
      <ul>
        {/* {logs
          .filter((a) => a.lastEventId != id)
          .map((log, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {JSON.parse(log.data).message}
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default Stream;
