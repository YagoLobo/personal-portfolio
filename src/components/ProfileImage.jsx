import React from 'react';
import '../styles/components.css';

const ProfileImage = () => {
  return (
    <section id="profile" className="profile-section">
      <img src="profile.jpg" alt="Your Profile" className="profile-image" />
      <h1>Your Name</h1>
      <p>Short tagline or profession</p>
    </section>
  );
};

export default ProfileImage;
