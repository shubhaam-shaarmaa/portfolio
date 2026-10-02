import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import TradeLifecycle from './components/TradeLifecycle';
import CaseStudies from './components/CaseStudies';
import DocExplorer from './components/DocExplorer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        'hero', 'summary', 'skills', 'experience', 'achievements',
        'trade-lifecycle', 'case-studies', 'doc-explorer', 'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div>
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Achievements />
      <TradeLifecycle />
      <CaseStudies />
      <DocExplorer />
      <Contact triggerToast={triggerToast} />
      <Footer />
      <BackToTop scrolled={scrolled} />

      <div className={`toast ${showToast ? 'show' : ''}`}>
        <i className="fa-solid fa-circle-check"></i> {toastMsg}
      </div>
    </div>
  );
}
