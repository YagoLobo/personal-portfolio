import React from 'react';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import AnimatedContent from './components/AnimatedContent'
import FadeContent from './components/FadeContent';
import Skills from './components/Skills';

import './styles/App.css';
import './styles/SocialLinks.css'
import './styles/About.css'
import './styles/ContactForm.css'
import './styles/Resume.css'
import './styles/ProfileImage.css'
import './styles/Projects.css'
import './styles/Skills.css'

const App = () => {
  return (
    <div>
      <Header />
      <div id="profile-about-container">
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 30 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
>
          <div><ProfileImage /></div>
        </AnimatedContent>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          {<About />}
        </FadeContent>
      </div>
      <Skills/>
      <Projects />
      <Resume />
      <ContactForm />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
