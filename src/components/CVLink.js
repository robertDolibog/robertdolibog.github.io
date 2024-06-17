import React from 'react';
import './CVLink.css';

const CVLink = () => {
  return (
    <div className="cv-link">
      <h2>My CV</h2>
      <a href="path/to/your/CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
    </div>
  );
};

export default CVLink;
