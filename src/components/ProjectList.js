import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';


const ProjectList = () => {
  return (
    <div className="project-list">
      <ProjectItem
        image={`${process.env.PUBLIC_URL}/images/AvataVr.png`}
        title="AvatAVR"
        description="An innovative Unity-based VR game showcased at HTW Berlin."
        role="My role involved implementing a GitFlow-like workflow in team development and establishing a CI pipeline on GitLab to ensure the Unity game would build for every push to our version control."
        link="https://showtime.f4.htw-berlin.de/ws23/bachelor/b6-avatavr/"
      />
      <ProjectItem
        image={`${process.env.PUBLIC_URL}/images/AnotherProject.png`}
        title="Another Project"
        description="Description of another project."
        role="My role in this project was to develop the front-end using React and ensure cross-browser compatibility."
        link="https://example.com"
      />
    </div>
  );
};

export default ProjectList;