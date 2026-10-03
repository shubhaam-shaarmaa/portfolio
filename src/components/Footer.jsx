import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({ onSelectSheet }) {
  const handleNavClick = (e, sheetId, targetId) => {
    e.preventDefault();
    if (onSelectSheet) {
      onSelectSheet(sheetId, targetId);
    } else {
      if (sheetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetEl = document.getElementById(targetId) || document.getElementById('canvas-workspace');
        if (targetEl && typeof targetEl.scrollIntoView === 'function') {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${targetId || sheetId}`);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Tier: Brand Identity, Architecture Navigation & Direct Connect */}
        <div className="footer-top-grid">
          {/* Brand & Value Proposition Column */}
          <div className="footer-brand-col">
            <a
              href="#hero"
              className="footer-logo"
              aria-label="Shubham Sharma Home"
              onClick={(e) => handleNavClick(e, 'hero', 'hero')}
            >
              <div className="footer-logo-badge">SS</div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">
                  Shubham Sharma<span className="text-gold">.</span>
                </span>
                <span className="footer-tag">Techno-Functional Business Analyst</span>
              </div>
            </a>
            <p className="footer-bio-summary">
              Bridging Capital Markets domain operations, DTCC T+1 affirmative workflows, and engineering squads with modern AI acceleration.
            </p>
            <div className="footer-status-pill">
              <span className="dot-pulse"></span> Open for Strategic Roles & Consultations
            </div>
          </div>

          {/* Workstation Deliverables Column */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">
              <i className="fa-solid fa-layer-group text-cyan"></i> Workstation
            </h5>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, 'hero', 'hero')}>
                  Command Deck // Launcher
                </a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => handleNavClick(e, 'trade', 'work')}>
                  Trade Lifecycle & T+1 Spec
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, 'initiatives', 'projects')}>
                  Technical Initiatives (6)
                </a>
              </li>
              <li>
                <a href="#ai-journey" onClick={(e) => handleNavClick(e, 'ai', 'ai-journey')}>
                  AI Roadmap & Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Profile & Journey Column */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">
              <i className="fa-solid fa-compass text-gold"></i> Exploration
            </h5>
            <ul className="footer-nav-list">
              <li>
                <a href="#journey" onClick={(e) => handleNavClick(e, 'career', 'journey')}>
                  Career Journey & Infosys Track
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, 'career', 'capabilities')}>
                  Core Capabilities & Skills
                </a>
              </li>
              <li>
                <a href="#credentials" onClick={(e) => handleNavClick(e, 'credentials', 'credentials')}>
                  Positioning & Certifications
                </a>
              </li>
              <li>
                <a href="#ask" onClick={(e) => handleNavClick(e, 'terminal', 'ask')}>
                  Ask Shubham CLI Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connect & Social Column */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">
              <i className="fa-solid fa-paper-plane text-purple"></i> Direct Connect
            </h5>
            <div className="footer-contact-links">
              <a href="mailto:shub.tech10@gmail.com" className="footer-contact-item">
                <i className="fa-solid fa-envelope text-gold"></i> shub.tech10@gmail.com
              </a>
              <span className="footer-contact-item">
                <i className="fa-solid fa-location-dot text-cyan"></i> Himachal Pradesh, India
              </span>
              <div className="footer-socials">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="footer-social-btn"
                  aria-label="Email"
                  title="Direct Email"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Divider, Copyright & Verification Badge */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Shubham Sharma. All rights reserved. &nbsp;|&nbsp; Techno-Functional Business Analyst · Capital Markets & Asset Management
          </p>
          <div className="footer-meta-pill">
            <span className="dot-pulse"></span> System Online // Zero Fabrication
          </div>
        </div>
      </div>
    </footer>
  );
}
