import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/yago-lobo-9704a6291/' },
    { platform: 'GitHub', url: 'https://github.com/YagoLobo' },
    { platform: 'Twitter', url: 'https://twitter.com/yourusername' },
  ];

  return (
    <section id="social-links">
      <h2>Connect with Me</h2>
      <ul className="social-links-list">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
