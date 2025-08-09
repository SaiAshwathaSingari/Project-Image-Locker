import React, { useRef, useState, useEffect } from "react";

function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  // Start camera on mount
  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    }
    startCamera();

    // Cleanup on unmount: stop media tracks
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Capture photo from video feed
  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // Set canvas size same as video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get image as base64 or blob
    canvas.toBlob(blob => {
      if (onCapture) {
        onCapture(blob); // Pass blob back to parent or handler
      }
    }, "image/jpeg", 0.95);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "100%", maxWidth: 400, borderRadius: 8, backgroundColor: "#000" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <button
        onClick={handleCapture}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: 25,
          border: "none",
          backgroundColor: "#3f51b5",
          color: "white",
          cursor: "pointer"
        }}
      >
        Capture Photo
      </button>
    </div>
  );
}

export default CameraCapture;
