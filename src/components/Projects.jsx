import React from 'react';
import '../styles/components.css';

const Projects = () => {
  const projectList = [
    { title: 'ML Xperience', description: 'Chatbox with AI that allows you to create, edit and talk to an "persona" of your choice!', link: 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-2-e1-proj-web-t10-pmv-ads-2024-2-proj-ml-experience/codigo-fonte/src/index.html' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
