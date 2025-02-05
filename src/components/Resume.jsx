import React from 'react';
import '../styles/Resume.css';

const Resume = ({ resumeLink }) => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
};

export default Resume;
