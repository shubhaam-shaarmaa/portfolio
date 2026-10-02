import React, { useState, useEffect } from 'react';
import avatarImg from '../assets/shubham_avatar.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';

export default function Navbar({ scrolled, activeSection }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileNavOpen]);

  const navLinks = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#identity', label: 'About', id: 'identity' },
    { href: '#journey', label: 'Journey', id: 'journey' },
    { href: '#capabilities', label: 'Capabilities', id: 'capabilities' },
    { href: '#case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#ai-journey', label: 'AI Journey', id: 'ai-journey' },
    { href: '#engineering', label: 'Engineering', id: 'engineering' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="logo" aria-label="Shubham Sharma Home">
            <img src={avatarImg} alt="Shubham Sharma" className="nav-avatar-img" />
            <div className="logo-text">
              Shubham Sharma<span className="logo-dot">.</span>
              <span className="logo-tag">Techno-Functional BA</span>
            </div>
          </a>

          <div className={`nav-links ${mobileNavOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumePdf}
              download="Shubham_Sharma_Resume.pdf"
              className="btn btn-gold nav-cta"
              onClick={() => setMobileNavOpen(false)}
            >
              <i className="fa-solid fa-file-arrow-down"></i> Resume
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileNavOpen}
          >
            <i className={`fa-solid ${mobileNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
      {mobileNavOpen && (
        <div
          className="nav-backdrop active"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
