import React from 'react';
import BackgroundVideo from './components/BackgroundVideo.js';
import ProjectList from './components/ProjectList.js';
import CVLink from './components/CVLink.js';
import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <BackgroundVideo />
      <ProjectList />
      <CVLink />
    </div>
  );
};

export default App;
