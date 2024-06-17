import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import ProjectList from './ProjectList';
import CVLink from './CVLink';
import './css/App';

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
