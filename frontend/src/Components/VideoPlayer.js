// src/Components/VideoPlayer.js

import React from 'react';
import '../Css/VideoPlayer.css'; // Import the CSS for styling

const VideoPlayer = () => {
  return (
    <div className="video-background">
      <video 
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
        muted 
        loop 
        autoPlay 
        className="background-video"
      ></video>
      <div className="overlay"></div>
    </div>
  );
};

export default VideoPlayer;
