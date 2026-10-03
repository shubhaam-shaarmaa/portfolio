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
import UIConceptShowcase, { CONCEPTS_DATA } from './components/UIConceptShowcase';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastTimer, setToastTimer] = useState(null);

  // Concise UI Studio Preview State (Default to false unless hash starts with #studio or #option-)
  const [showStudio, setShowStudio] = useState(
    typeof window !== 'undefined' && (window.location.hash === '#studio' || window.location.hash.startsWith('#option-'))
  );
  const [activeConceptId, setActiveConceptId] = useState('bento');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#studio') {
        setShowStudio(true);
      } else if (hash.startsWith('#option-')) {
        const opt = hash.replace('#option-', '');
        if (CONCEPTS_DATA.some((c) => c.id === opt)) {
          setActiveConceptId(opt);
          setShowStudio(true);
        }
      } else if (hash === '#live' || hash === '#hero' || hash === '#work' || hash === '#ask') {
        setShowStudio(false);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (showStudio) return;

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
  }, [showStudio]);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    if (toastTimer) clearTimeout(toastTimer);
    const timer = setTimeout(() => setShowToast(false), 4000);
    setToastTimer(timer);
  };

  const handleSelectConcept = (id) => {
    setActiveConceptId(id);
    setShowStudio(true);
  };

  const handleFinalizeSelection = (concept) => {
    triggerToast(`Selected Option ${concept.num}: ${concept.name}! Ready to build this layout.`);
  };

  return (
    <div className="portfolio-app">
      {/* Persistent Studio Preview Top Banner */}
      <div className="studio-top-banner">
        <div className="studio-banner-content">
          <div className="studio-banner-left">
            <span className="studio-banner-badge">
              <i className="fa-solid fa-layer-group"></i> 5 Concise UI Concepts
            </span>
            <span className="studio-banner-text">
              Previewing: <strong>{showStudio ? `Option: ${CONCEPTS_DATA.find((c) => c.id === activeConceptId)?.name}` : 'Current Live Layout'}</strong>
            </span>
          </div>

          <div className="studio-banner-pills">
            {CONCEPTS_DATA.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`banner-pill-btn ${showStudio && activeConceptId === c.id ? 'active' : ''}`}
                onClick={() => handleSelectConcept(c.id)}
              >
                <span>{c.num}</span> {c.name.split(' ')[0]}
              </button>
            ))}

            <button
              type="button"
              className={`banner-pill-btn pill-return ${!showStudio ? 'active' : ''}`}
              onClick={() => setShowStudio(!showStudio)}
            >
              {showStudio ? (
                <>
                  <i className="fa-solid fa-eye"></i> View Current Live Layout
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles text-gold"></i> Open UI Studio
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {!showStudio ? (
        <>
          <Navbar scrolled={scrolled} activeSection={activeSection} />
          <main>
            {/* 01 — Hero */}
            <Hero />

            {/* 02 — Interactive Q&A Console */}
            <AskShubham />

            {/* 03 — Selected Work */}
            <SelectedWork />

            {/* 04 — Journey & Core Capabilities */}
            <JourneyAndCapabilities />

            {/* Resume Call-to-Action */}
            <ResumeCta />

            {/* 05 — Contact */}
            <Contact triggerToast={triggerToast} />
          </main>

          <Footer />
          <RecruiterDock activeSection={activeSection} />
          <BackToTop scrolled={scrolled} />
        </>
      ) : (
        <main>
          <UIConceptShowcase
            activeConceptId={activeConceptId}
            onSelectConcept={(id) => setActiveConceptId(id)}
            onCloseStudio={() => setShowStudio(false)}
            onFinalizeSelection={handleFinalizeSelection}
          />
        </main>
      )}

      <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive">
        <i className="fa-solid fa-circle-check"></i> {toastMsg}
      </div>
    </div>
  );
}

