import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ image, title, description, role, link }) => {
  return (
    <div className="project-item" onClick={() => window.open(link, "_blank")}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="role">{role}</p>
    </div>
  );
};

export default ProjectItem;