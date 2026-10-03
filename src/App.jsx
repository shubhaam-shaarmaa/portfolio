import React, { useState, useEffect } from 'react';
import CommandDeck from './components/CommandDeck';
import DynamicCanvasSheet, { CANVAS_SHEETS } from './components/DynamicCanvasSheet';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import RecruiterDock from './components/RecruiterDock';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeSheet, setActiveSheet] = useState('trade');
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastTimer, setToastTimer] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();

      if (hash === '#work' || hash === '#case-studies' || hash === '#trade') {
        setActiveSheet('trade');
        setActiveSection('work');
      } else if (hash === '#projects' || hash === '#initiatives') {
        setActiveSheet('initiatives');
        setActiveSection('work');
      } else if (hash === '#journey' || hash === '#career' || hash === '#skills' || hash === '#capabilities') {
        setActiveSheet('career');
        setActiveSection('journey');
      } else if (hash === '#ai' || hash === '#ai-journey') {
        setActiveSheet('ai');
        setActiveSection('journey');
      } else if (hash === '#credentials' || hash === '#identity' || hash === '#engineering' || hash === '#certifications') {
        setActiveSheet('credentials');
        setActiveSection('journey');
      } else if (hash === '#ask' || hash === '#terminal') {
        setActiveSheet('terminal');
        setActiveSection('ask');
      } else if (hash === '#contact') {
        setActiveSheet('contact');
        setActiveSection('contact');
      } else if (hash === '#hero' || hash === '') {
        setActiveSection('hero');
      }

      // Smoothly redirect to target element
      setTimeout(() => {
        if (hash === '#hero' || hash === '') {
          if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (hash) {
          const targetId = hash.replace('#', '');
          const targetEl = document.getElementById(targetId) || document.getElementById('canvas-workspace');
          if (targetEl && typeof targetEl.scrollIntoView === 'function') {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 60);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Bottom of page activates contact
      if (
        typeof document !== 'undefined' &&
        document.documentElement &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('contact');
        return;
      }

      if (window.scrollY < 400) {
        setActiveSection('hero');
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

  const handleSelectSheet = (sheetId, targetId) => {
    if (sheetId === 'hero') {
      setActiveSection('hero');
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setActiveSheet(sheetId);

    // Sync section highlight
    if (sheetId === 'trade' || sheetId === 'initiatives') {
      setActiveSection('work');
    } else if (sheetId === 'career' || sheetId === 'ai' || sheetId === 'credentials') {
      setActiveSection('journey');
    } else if (sheetId === 'terminal') {
      setActiveSection('ask');
    } else if (sheetId === 'contact') {
      setActiveSection('contact');
    }

    // Smoothly redirect and scroll directly to the selected component
    setTimeout(() => {
      if (targetId && targetId !== 'canvas-workspace') {
        const targetEl = document.getElementById(targetId);
        if (targetEl && typeof targetEl.scrollIntoView === 'function') {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      const canvasEl = document.getElementById('canvas-workspace');
      if (canvasEl && typeof canvasEl.scrollIntoView === 'function') {
        canvasEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="portfolio-app ai-native-theme">
      <main>
        {/* 01 — Anchor Shim & Command Deck (Hero + System Prompt + Command Chips) */}
        <span id="hero" className="anchor-shim"></span>
        <CommandDeck
          activeSheet={activeSheet}
          onSelectSheet={handleSelectSheet}
        />

        {/* 02 — Dynamic Glowing Canvas Sheet (Projects Selected Deliverable) */}
        <DynamicCanvasSheet
          activeSheet={activeSheet}
          onSelectSheet={handleSelectSheet}
          triggerToast={triggerToast}
        />
      </main>

      <Footer onSelectSheet={handleSelectSheet} />
      <RecruiterDock
        activeSection={activeSection}
        activeSheet={activeSheet}
        onSelectSheet={handleSelectSheet}
      />
      <BackToTop scrolled={scrolled} />

      <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive">
        <i className="fa-solid fa-circle-check"></i> {toastMsg}
      </div>
    </div>
  );
}
