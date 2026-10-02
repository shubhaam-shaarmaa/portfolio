import React, { useState } from 'react';

export default function Navbar({ scrolled, activeSection }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo">
          <img src="/shubham_avatar.jpg" alt="Shubham Sharma" className="nav-avatar-img" />
          <div className="logo-text">Shubham Sharma<span>.</span></div>
        </a>

        <div className={`nav-links ${mobileNavOpen ? 'active' : ''}`}>
          <a href="#summary" className={`nav-link ${activeSection === 'summary' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Summary</a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Skills</a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Experience</a>
          <a href="#trade-lifecycle" className={`nav-link ${activeSection === 'trade-lifecycle' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Trade Life Cycle</a>
          <a href="#case-studies" className={`nav-link ${activeSection === 'case-studies' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Case Studies</a>
          <a href="#doc-explorer" className={`nav-link ${activeSection === 'doc-explorer' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>BA Framework</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setMobileNavOpen(false)}>Contact</a>
          <a href="Shubham_Sharma_Resume.pdf" download="Shubham_Sharma_Resume.pdf" className="btn btn-gold nav-cta">
            <i className="fa-solid fa-download"></i> Resume
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Toggle menu">
          <i className={`fa-solid ${mobileNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}
