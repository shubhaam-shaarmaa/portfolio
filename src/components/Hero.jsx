import React from 'react';
import profileImg from '../assets/shubham_profile.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Narrative */}
          <div className="hero-content">
            <div className="badge-pill">
              <span className="badge-pulse"></span>
              <i className="fa-solid fa-chart-line text-gold"></i> {PERSONAL_INFO.currentRole}
            </div>

            <h1 className="hero-headline">
              TECHNO-FUNCTIONAL<br />
              <span className="hero-headline-highlight">BUSINESS ANALYST</span>
            </h1>

            <div className="hero-subheadline">
              <span>Capital Markets & Asset Management</span>
              <span className="hero-separator">|</span>
              <span>AI & GenAI</span>
              <span className="hero-separator">|</span>
              <span>Product & Technology</span>
            </div>

            <p className="hero-supporting-text">
              Bridging business, technology and financial services to turn complex requirements into practical digital solutions.
            </p>

            <div className="hero-tagline-quote">
              <i className="fa-solid fa-quote-left text-dim"></i>
              <span>Business analysis backed by Capital Markets expertise and hands-on technology experience.</span>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <i className="fa-solid fa-folder-open"></i> View My Work
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href={resumePdf}
                download="Shubham_Sharma_Resume.pdf"
                className="btn btn-outline-gold"
                aria-label="Download Resume"
              >
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
            </div>

            {/* Truthful Credibility Strip */}
            <div className="hero-credibility-strip">
              {PERSONAL_INFO.keyMetrics.map((item, idx) => (
                <div key={idx} className="hero-credibility-item">
                  <span className="credibility-val">{item.value}</span>
                  <span className="credibility-lbl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="hero-profile-column">
            <div className="hero-executive-card">
              <div className="profile-img-container">
                <img
                  src={profileImg}
                  alt="Shubham Sharma - Techno-Functional Business Analyst"
                  className="profile-portrait-img"
                />
                <div className="profile-img-badge">
                  <i className="fa-solid fa-building-columns text-gold"></i>
                  <span>US Investment Mgmt Exposure</span>
                </div>
              </div>

              <div className="executive-card-body">
                <div className="executive-card-header">
                  <h2 className="executive-name">{PERSONAL_INFO.name}</h2>
                  <p className="executive-role">Senior Associate Consultant — Infosys</p>
                </div>

                <div className="executive-tag-list">
                  <span className="executive-tag">
                    <i className="fa-solid fa-check text-cyan"></i> Requirements & User Stories
                  </span>
                  <span className="executive-tag">
                    <i className="fa-solid fa-check text-gold"></i> Trade Lifecycle & Settlements
                  </span>
                  <span className="executive-tag">
                    <i className="fa-solid fa-check text-emerald"></i> SQL Data Validation
                  </span>
                  <span className="executive-tag">
                    <i className="fa-solid fa-check text-cyan"></i> REST APIs & Schemas
                  </span>
                  <span className="executive-tag">
                    <i className="fa-solid fa-check text-purple"></i> AI & GenAI Workflows
                  </span>
                </div>

                <div className="executive-contact-quick">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="quick-contact-link">
                    <i className="fa-solid fa-envelope"></i> {PERSONAL_INFO.email}
                  </a>
                  <span className="quick-contact-location">
                    <i className="fa-solid fa-location-dot"></i> {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
