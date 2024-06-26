import React, { useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutmeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav>
        <ul className="menu">
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(aboutmeRef)}>AboutMe</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
        </ul>
      </nav>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={aboutmeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Skills ref={skillsRef} /> {/* Skills 컴포넌트에 ref 설정 */}
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
