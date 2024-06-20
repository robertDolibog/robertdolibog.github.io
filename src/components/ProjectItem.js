import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ image, title, description, link }) => {
  return (
    <div className="project-item" onClick={() => window.open(link, "_blank")}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;