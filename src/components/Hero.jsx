import React from 'react';
import profileImg from '../assets/shubham_profile.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';
import { HERO_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge-pill">
              <span className="badge-pulse"></span>
              <i className="fa-solid fa-bolt text-gold"></i> AI-Augmented Business Analyst & Product Owner
            </div>

            <h1 className="hero-title">
              Bridging Capital Markets Core Systems with <span>Enterprise AI Workflows</span>
            </h1>

            <div className="hero-subtitle">
              Senior Associate Consultant @ Infosys &nbsp;|&nbsp; Client Partner: Capital Group ($2.6T AUM)
            </div>

            <p className="hero-hook">
              I translate complex trading schemas, retirement accounts (SIMPLE IRA, RKD), and regulatory rules into testable requirements. I build AI-augmented specification pipelines that cut product delivery cycle times.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <i className="fa-solid fa-layer-group"></i> Explore Flagship Work
              </a>
              <a href={resumePdf} download="Shubham_Sharma_Resume.pdf" className="btn btn-gold">
                <i className="fa-solid fa-file-arrow-down"></i> Download ATS Resume
              </a>
            </div>

            <div className="hero-metrics-bar">
              {HERO_DATA.metrics.map((m, idx) => (
                <div key={idx} className="hero-metric-item">
                  <div className="hero-metric-value">{m.val}</div>
                  <div className="hero-metric-label">{m.lbl}</div>
                </div>
              ))}
            </div>

            <div className="hero-contact-list">
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i> Himachal Pradesh, India
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:shub.tech10@gmail.com">shub.tech10@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+917018049143">+91-7018049143</a>
              </div>
              <div className="contact-item">
                <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/shubham-sharma-428bb4167/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Hero Profile Card */}
          <div className="hero-profile-card">
            <div className="hero-img-wrapper">
              <img src={profileImg} alt="Shubham Sharma - Senior Consultant" className="hero-profile-img" />
              <div className="hero-img-overlay"></div>
              <div className="hero-floating-badge">
                <span className="status-dot"></span> Partner Client: Capital Group ($2.6T AUM)
              </div>
            </div>

            <div className="hero-card-content">
              <div className="hero-card-meta">
                <div className="hero-card-name">Shubham Sharma</div>
                <div className="hero-card-role">Techno-Functional BA & AI Innovator</div>
              </div>

              <div className="hero-tags-wrapper">
                <span className="hero-mini-tag"><i className="fa-solid fa-brain text-gold"></i> AI Prompt Engineering</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> SIMPLE IRA & RKD Core</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> Trade Lifecycle & DTCC</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> BRD / FRD / Gherkin</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> SQL Data Auditing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
