import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function CameraCapture({ userId }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          streamRef.current = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setMessage("Error accessing webcam");
      }
    }
    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCaptureAndUpload = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) {
      setMessage("Video or canvas not available");
      return;
    }

    if (video.videoWidth === 0 || video.videoHeight === 0) {
      setMessage("Video not ready for capture yet. Please wait.");
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          setMessage("Failed to capture image");
          return;
        }

        setUploading(true);
        setMessage("");

        try {
          const formData = new FormData();
          formData.append("photo", blob, "capture.png");

          // Append userId here
          formData.append("userId", userId);

          const response = await axios.post("/api/face-register", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          });

          setMessage(response.data.message || "Upload successful");
        } catch (error) {
          console.error("Upload failed:", error);
          setMessage("Upload failed. Please try again.");
        } finally {
          setUploading(false);
        }
      },
      "image/png"
    );
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
        onClick={handleCaptureAndUpload}
        disabled={uploading}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: 25,
          border: "none",
          backgroundColor: uploading ? "#999" : "#3f51b5",
          color: "white",
          cursor: uploading ? "not-allowed" : "pointer",
        }}
      >
        {uploading ? "Uploading..." : "Capture Photo"}
      </button>
      {message && <p style={{ marginTop: 12, color: "#333" }}>{message}</p>}
    </div>
  );
}

export default CameraCapture;
