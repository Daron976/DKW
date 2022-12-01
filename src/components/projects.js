import React from 'react';
import ProjectItem from './projectItem';
import projectData from '../data/projectData';

const Projects = () => (
  <section id="projects" className="projects flex">
    <article className="project-article">
      <h2 className="projects-header">Some of my work</h2>
      <div className="header-addition mobile-border flex">
        <img src={projectData[0].imgurl} alt={projectData[0].title} />
        <div className="article-details">
          <h2>{projectData[0].title}</h2>
          <p>{projectData[0].description}</p>
          <div className="btn-container">
            <a href={projectData[0].source} className="btn-link">
              <button
                type="button"
                id="source"
                className="btn"
                name="source"
              >
                Source
              </button>
            </a>
            <a href={projectData[0].live} className="btn-link">
              <button
                type="button"
                id="live"
                className="btn"
                name="live"
              >
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
    {
      projectData
        .slice(1)
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
