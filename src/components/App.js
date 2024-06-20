import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import ProjectList from './ProjectList';
import CVCard from './CVCard';
import '../css/App.css';

const App = () => {
  return (
    <div className="App">
      <BackgroundVideo />
      <div className="separator-line"></div> {/* Separator line under the video */}
      <ProjectList />
      <CVCard link={`${process.env.PUBLIC_URL}/CV_Robert_Dolibog.pdf`} />
      <div className="separator-line"></div> {/* Separator line above the projects */}
    </div>
  );
};

export default App;
