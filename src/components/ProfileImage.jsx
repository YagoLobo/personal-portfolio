import React from 'react';
import '../styles/components.css';
import profile from "../assets/images/profile.jpg"

const ProfileImage = () => {
  return (
    <section id="profile">
      <div className="profile-box">
        <img src={profile} alt="Your Profile" />
      </div>
      <p>Python | React | JS | Full-Stack Developer</p>
    </section>
  );
};

export default ProfileImage;
