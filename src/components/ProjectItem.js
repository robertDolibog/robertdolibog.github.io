import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
};

export default ProjectItem;
