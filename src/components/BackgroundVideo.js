import React from 'react';
import '../css/BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/video_quickshot_shortened.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1>This is Robert Dolibog</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
