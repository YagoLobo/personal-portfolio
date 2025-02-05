import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import  "../styles/SocialLinks.css"

const SocialLinks = () => {
  const socialLinks = [
    { id: 1, icon: <FaGithub />, url: 'https://github.com/YagoLobo', label: "GitHub" },
    { id: 2, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/yago-lobo-9704a6291/', label: "LinkedIn" },
    { id: 3, icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
    { id: 4, icon: <FaEnvelope />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <div className="social-links-container">
      <h2>Connect with Me</h2>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
            {link.icon}
            <span className="social-label">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
