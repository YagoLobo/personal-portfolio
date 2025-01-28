import React from 'react';
import '../styles/components.css';


const Skills = () => {
    
const skills = [
    { name: 'JavaScript', icon: '🟨', level: 'Advanced', category: 'Language'},
    { name: 'Python', icon: '🐍', level: 'Intermediate', category: 'Language'},
    { name: 'React.js', icon: '⚛️', level: 'Advanced', category: 'Framework'},
    { name: 'Node.js', icon: '🟩', level: 'Intermediate', category: 'Framework'},
    { name: 'HTML & CSS', icon: '🌐', level: 'Advanced', category: 'Language'},
    { name: 'Django', icon: '🟢', level: 'Beginner', category: 'Framework'},
];

return (
    <section id="skills">
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-details">
              <h3>{skill.name}</h3>
              <p>Level: {skill.level}</p>
              <p>Category: {skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
