import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AskShubham from './components/AskShubham';
import SelectedWork from './components/SelectedWork';
import JourneyAndCapabilities from './components/JourneyAndCapabilities';
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
        'ask',
        'work',
        'journey',
        'contact'
      ];

      const scrollPos = window.scrollY + 250;

      // Ensure contact is highlighted if user reaches the bottom of the page
      if (
        typeof document !== 'undefined' &&
        document.documentElement &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('contact');
        return;
      }

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

        {/* 02 — Interactive Q&A Console (Ayush Sharma pattern: // ask_shubham.exe) */}
        <AskShubham />

        {/* 03 — Selected Work (Case Studies & Technical Initiatives) */}
        <SelectedWork />

        {/* 04 — Journey & Core Capabilities (Progression, Skills, Engineering & AI Architecture) */}
        <JourneyAndCapabilities />

        {/* Resume Call-to-Action */}
        <ResumeCta />

        {/* 05 — Contact & Direct Inquiries */}
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
