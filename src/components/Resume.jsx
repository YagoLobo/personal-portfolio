import React from 'react';
import '../styles/Resume.css';
import { FaFileDownload } from "react-icons/fa";

const Resume = ({ resumeLink }) => {
  return (
    <section id="resume">
      <p>Download Resume</p>
      <a href="./public/curriculo.pdf"><FaFileDownload/></a>
    </section>
  );
};

export default Resume;
