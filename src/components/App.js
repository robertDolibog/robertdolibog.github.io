import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import ProjectList from './ProjectList';
import CVCard from './CVCard';
import '../css/App.css';

const App = () => {
  return (
    <div className="App">
      <BackgroundVideo />
      <ProjectList />
      <div className="cv-card-container">
        <CVCard link={`${process.env.PUBLIC_URL}/CV_Robert_Dolibog.pdf`} />
      </div>
    </div>
  );
};

export default App;

