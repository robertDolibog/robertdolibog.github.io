import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';

const projects = [
  { id: 1, title: 'AvataVr'
    , description: 'Project Description: The AvatAVR project, showcased at the HTW Berlin, is an innovative Unity-based game that immerses players in a virtual reality environment. The project leverages advanced game development techniques and VR technologies to create a compelling and interactive user experience. Through this game, users can engage with avatars in a richly detailed virtual world, pushing the boundaries of what’s possible in virtual reality gaming. My Contribution: In this project, I played a crucial role in enhancing the development workflow and ensuring the reliability of our builds. Specifically, I implemented a GitFlow-like workflow to streamline our teams development process, facilitating better collaboration and more efficient management of features and releases. Additionally, I established a Continuous Integration (CI) pipeline on GitLab. This pipeline was designed to automatically verify that the Unity game builds correctly with every push to our version control system, ensuring that any issues could be promptly identified and addressed, thereby maintaining the integrity and stability of our codebase.'
    , link: 'https://showtime.f4.htw-berlin.de/ws23/bachelor/b6-avatavr/' },
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
