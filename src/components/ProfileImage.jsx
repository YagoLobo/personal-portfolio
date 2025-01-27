import React from 'react';
import '../styles/components.css';
import profile from "../assets/images/profile.jpg"

const ProfileImage = () => {
  return (
    <section id="profile">
      <div className="profile-box">
        <img src={profile} alt="Your Profile" />
      </div>
      <h1>Yago Lobo Valenca</h1>
      <p>Developer</p>
    </section>
  );
};

export default ProfileImage;
