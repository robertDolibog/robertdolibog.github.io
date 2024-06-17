import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import ProjectList from './components/ProjectList';
import CVLink from './components/CVLink';
import './App.css';

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
