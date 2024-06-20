import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import ProjectList from './components/ProjectList';
import CVLink from './components/CVLink';
import CVCard from './components/CVCard'; // Importing the new component
import './css/App.css';

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
