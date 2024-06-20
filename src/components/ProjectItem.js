import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ image, title, description, link }) => {
  return (
    <div className="project-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </div>
  );
};

export default ProjectItem;
