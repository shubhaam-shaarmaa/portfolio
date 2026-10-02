import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalIdentity from './components/ProfessionalIdentity';
import CareerJourney from './components/CareerJourney';
import Skills from './components/Skills';
import FeaturedWork from './components/FeaturedWork';
import CapitalMarketsCaseStudies from './components/CapitalMarketsCaseStudies';
import AiJourney from './components/AiJourney';
import EngineeringFoundation from './components/EngineeringFoundation';
import Certifications from './components/Certifications';
import ResumeCta from './components/ResumeCta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import RecruiterDock from './components/RecruiterDock';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastTimer, setToastTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = [
        'hero',
        'identity',
        'journey',
        'capabilities',
        'case-studies',
        'projects',
        'ai-journey',
        'engineering',
        'certifications',
        'resume',
        'contact'
      ];

      const scrollPos = window.scrollY + 250;

      for (let sec of sectionIds) {
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
    if (toastTimer) clearTimeout(toastTimer);
    const timer = setTimeout(() => setShowToast(false), 4000);
    setToastTimer(timer);
  };

  return (
    <div className="portfolio-app">
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Professional Identity (Business × Technology × Capital Markets) */}
        <ProfessionalIdentity />

        {/* 03 — Career Journey (5-Stage Progressive Evolution) */}
        <CareerJourney />

        {/* 04 — Core Capabilities (4-Pillar Matrix: BA, Capital Markets, Tech, AI Current vs Building) */}
        <Skills />

        {/* 05 — Featured Work (Structured Projects: Status Filter, Contributions, Specs) */}
        <FeaturedWork />

        {/* 06 — Capital Markets Case Studies (Flagship 7-Stage Trade Lifecycle Analysis & Simulator) */}
        <CapitalMarketsCaseStudies />

        {/* 07 — AI Journey (8-Project Capability Roadmap + Progressive Architecture) */}
        <AiJourney />

        {/* 08 — Engineering Foundation (Technical Depth Supporting BA Identity) */}
        <EngineeringFoundation />

        {/* 09 — Certifications & Achievements (Compact Credentials) */}
        <Certifications />

        {/* 10 — Resume CTA */}
        <ResumeCta />

        {/* 11 — Contact */}
        <Contact triggerToast={triggerToast} />
      </main>

      <Footer />
      <RecruiterDock activeSection={activeSection} />
      <BackToTop scrolled={scrolled} />

      <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive">
        <i className="fa-solid fa-circle-check"></i> {toastMsg}
      </div>
    </div>
  );
}
