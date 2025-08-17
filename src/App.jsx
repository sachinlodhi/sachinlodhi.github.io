import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Currently from './components/Currently';
// import LiveStats from './components/LiveStats';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set loading to false after 2.5 seconds
    setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'currently', 'experience', 'projects', 'publications', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <CustomCursor />
     
    <ThemeToggle /> 
      <div className="bg-black min-h-screen relative">
        <ParticleBackground />
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Currently /> 
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;