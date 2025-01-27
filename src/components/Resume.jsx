import React, {useState} from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const [isFullMode, setIsFullMode] = useState(false);

  const handleToggle = () => {
    setIsFullMode(!isFullMode); 
  };

  return (
    <section id="resume">
      <h2>My Resume</h2>
      {!isFullMode ? (
        
        <div className="resume-thumbnail">
          <iframe
            src="http://localhost:3000/curriculo.pdf"
            width="300px" 
            height="400px" 
            style={{ border: '1px solid #ddd' }}
            title="Resume Thumbnail"
          ></iframe>
          <div className='full-btn'>
            <button  className="btn-to-full"onClick={handleToggle}>Click to view full resume</button>
          </div>
        </div>
      ) : (
        
        <div className="resume-full">
          <iframe
            src="http://localhost:3000/curriculo.pdf"
            width="100%"
            height="600px" 
            style={{ border: '1px solid #ddd' }}
            title="Full Resume"
          ></iframe>
          <button onClick={handleToggle} className="close-btn">
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default Resume;
