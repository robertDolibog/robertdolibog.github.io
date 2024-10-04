import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ media, title, description, role, link, docLink, docText }) => {
  return (
    <div className="project-item">
      <img src={media} alt={title} className="project-media" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="role">{role}</p>
      <div className="project-links">
        <button className="link-button" onClick={() => window.open(link, "_blank")}>
          View Project
        </button>
        {docLink && (
          <button className="link-button" onClick={() => window.open(docLink, "_blank")}>
            {docText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
