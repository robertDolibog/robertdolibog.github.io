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
        link="https://showtime.f4.htw-berlin.de/ws23/bachelor/b6-avatavr/"
      />
      <ProjectItem
        image="path/to/your/image2.jpg"
        title="Another Project"
        description="Description of another project."
        link="https://example.com"
      />
    </div>
  );
};

export default ProjectList;
