import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';

const ProjectList = () => {
  return (
    <div className="project-list">
      <ProjectItem
        image={`${process.env.PUBLIC_URL}/images/AvataVr.png`}
        title="AvataVR"
        description="An innovative Unity-based VR game showcased at HTW Berlin."
        role="My role involved implementing a GitFlow-like workflow in team development and establishing a CI pipeline on GitLab to ensure the Unity game would build for every push to our version control."
        link="https://showtime.f4.htw-berlin.de/ws23/bachelor/b6-avatavr/"
        docLink={`${process.env.PUBLIC_URL}/Project_DevOps.pdf`}
      />
      <ProjectItem
        image={`${process.env.PUBLIC_URL}/images/ProjectmanagementPro.png`}
        title="Project Management Pro (Ongoing)"
        description="A project management tool developed using Next.js and Express.js."
        role="My role involved developing the backend API via the Express.js framework and our Postgres Database. Further I was orchestrating the frontend connection via Docker-Compose."
        link="https://github.com/robertDolibog/ProjectManagementPro"
      />
    </div>
  );
};

export default ProjectList;
