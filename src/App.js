import React from 'react';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import AnimatedContent from './components/AnimatedContent'
import FadeContent from './components/FadeContent';
import Skills from './components/Skills';
import LogoWall from './components/LogoWall';
import Stack from './components/Stacks';

import './styles/App.css';
import './styles/SocialLinks.css'
import './styles/About.css'
import './styles/Resume.css'
import './styles/ProfileImage.css'
import './styles/Projects.css'
import './styles/Skills.css'
import './styles/LogoWall.css'
import './styles/Stacks.css'

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
      <div style={{height: 'auto', width: '100%', position: 'relative'}}>
        <LogoWall
          ItemComponent={Skills}
          direction='horizontal'
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='10s'
          bgColor='#060606'
          bgAccentColor='#111111'
        />  
      </div>
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={true}
        cardDimensions={{ width: 500, height: 250}}
        cardsData={[
          { id: 1, component: <Projects  link="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-2-e1-proj-web-t10-pmv-ads-2024-2-proj-ml-experience/codigo-fonte/src/index.html" image="http://localhost:3000/MLXP.PNG"/> },
          { id: 2, component: <Projects link="https://wecoop.xyz/feed?activeFeed=global" image="http://localhost:3000/wecoopimg.jpeg"/> },
      ]}
      />
      <Resume />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
