import React from 'react';
import '../styles/components.css';
import { FaEye } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

        <div className='resume-container'>
          <p className='resume-title'>See Resume PDF</p> 
          <a href="https://drive.google.com/file/d/1GMn9j1C56NblWGezgSjdb_v00_szQOZw/view?usp=sharing"><FaEye /></a>
        </div>
        <p>© 2025 Yago Lobo Valenca. All Rights Reserved.</p>
    </footer>

  );
};

export default Footer;
