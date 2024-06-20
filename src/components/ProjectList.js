import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';

const projects = [
  {
    title: 'AvatAVR',
    description: 'An innovative Unity-based VR game showcased at HTW Berlin.',
    link: 'https://showtime.f4.htw-berlin.de/ws23/bachelor/b6-avatavr/'
  },
  {
    title: 'Another Project',
    description: 'Description of another project.',
    link: '#'
  }
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
