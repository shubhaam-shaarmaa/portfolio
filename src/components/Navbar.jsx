import React, { useState } from 'react';
import avatarImg from '../assets/shubham_avatar.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';

export default function Navbar({ scrolled, activeSection }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo">
          <img src={avatarImg} alt="Shubham Sharma" className="nav-avatar-img" />
          <div className="logo-text">
            Shubham Sharma<span className="logo-dot">.</span>
            <span className="logo-tag">BA + AI</span>
          </div>
        </a>

        <div className={`nav-links ${mobileNavOpen ? 'active' : ''}`}>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          >
            Featured Work
          </a>
          <a
            href="#lifecycle"
            className={`nav-link ${activeSection === 'lifecycle' ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          >
            Trade Lifecycle
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          >
            BA + AI Matrix
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          >
            Contact
          </a>
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
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${mobileNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}
