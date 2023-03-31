import React from 'react';
import ProjectItem from './projectItem';
import projectData from '../data/projectData';

const Projects = () => (
  <section id="projects" className="projects flex">
    <h2 className="projects-header">Some of my work</h2>
    {
      projectData
        .map((item) => (
          <ProjectItem
            key={item.title}
            imgSrc={item.imgurl}
            imgAlt={item.title}
            header={item.title}
            description={item.description}
            live={item.live}
            source={item.source}
          />
        ))
    }
  </section>
);

export default Projects;
