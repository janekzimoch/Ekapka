import React, { useRef, useEffect } from "react";

const WasteSorter = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    return () => {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div>
      <h1>Waste Sorter</h1>
      <video ref={videoRef} autoPlay playsInline />
      <button>Take Photo</button>
      <div>Result will appear here</div>
    </div>
  );
};

export default WasteSorter;
