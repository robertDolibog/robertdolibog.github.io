import React from 'react';
import '../css/BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
      <source src={`${process.env.PUBLIC_URL}/test_video.mp4`} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Welcome to My Personal Website</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
