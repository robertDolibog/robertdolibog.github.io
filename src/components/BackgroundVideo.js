import React from 'react';
import '../css/BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="../../media/1448735-uhd_4096_2160_24fps.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Welcome to My Personal Website</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
