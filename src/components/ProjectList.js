import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1', link: 'http://project1.com' },
  { id: 2, title: 'Project 2', description: 'Description of project 2', link: 'http://project2.com' },
  // Add more projects here
];

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2>My Projects</h2>
      {projects.map(project => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
