import React from 'react';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <ProfileImage />
      <About />
      <Projects />
      <Resume />
      <ContactForm />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
