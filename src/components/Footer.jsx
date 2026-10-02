import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a href="#hero" className="footer-logo" aria-label="Shubham Sharma Home">
          <div className="footer-logo-badge">SS</div>
          <div className="footer-logo-text">
            Shubham Sharma<span className="logo-dot">.</span>
            <span className="footer-tag">Techno-Functional Business Analyst</span>
          </div>
        </a>

        <div className="footer-links">
          <a href="#identity">About</a>
          <a href="#journey">Journey</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#projects">Projects</a>
          <a href="#ai-journey">AI Journey</a>
          <a href="#engineering">Engineering</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="footer-social-btn"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Shubham Sharma. All rights reserved. &nbsp;|&nbsp; Techno-Functional Business Analyst · Capital Markets & Asset Management
        </p>
      </div>
    </footer>
  );
}
