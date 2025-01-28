import React from "react";
import "../styles/Projects.css"; // Optional styling

const Projects = ({link, image }) => {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${image})` , backgroundSize: "cover", backgroundPosition: "center"}} // Dynamic Background
    >
      <div className="overlay">
        <div className="project-content">
        </div>
        <div className="project-footer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
