import React from 'react';
import '../styles/components.css';


const Skills = () => {
    
const skills = [
    { name: 'JavaScript', icon: '🟨', level: 'Advanced', category: 'Language', percentage: 90 },
    { name: 'Python', icon: '🐍', level: 'Intermediate', category: 'Language', percentage: 70 },
    { name: 'React.js', icon: '⚛️', level: 'Advanced', category: 'Framework', percentage: 85 },
    { name: 'Node.js', icon: '🟩', level: 'Intermediate', category: 'Framework', percentage: 75 },
    { name: 'HTML & CSS', icon: '🌐', level: 'Advanced', category: 'Language', percentage: 95 },
    { name: 'Django', icon: '🟢', level: 'Beginner', category: 'Framework', percentage: 50 },
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
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
