import React from 'react';
import '../styles/components.css';
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const Skills = () => {
    
const skills = [
    { name: 'JavaScript', icon: <IoLogoJavascript color='yellow'/>},
    { name: 'Python', icon: <FaPython color='blue'/>},
    { name: 'React.js', icon: <FaReact />},
    { name: 'Node.js', icon: <FaNodeJs color='green'/>},
    { name: 'HTML', icon: <FaHtml5 color='orange'/>},
    { name: 'CSS', icon:<FaCss3 />}
];

return (
    <section id="skills">
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-details">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
