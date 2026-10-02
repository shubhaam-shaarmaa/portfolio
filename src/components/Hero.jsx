import React from 'react';
import profileImg from '../assets/shubham_profile.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge-pill">
              <i className="fa-solid fa-folder-tree text-gold"></i> Retirement & Asset Management BA Specialist
            </div>
            <h1 className="hero-title" style={{ fontFamily: 'Lora, serif', fontWeight: 600 }}>
              Optimizing Retirement Platforms through <span>Requirements Engineering</span>
            </h1>
            <div className="hero-subtitle">
              Senior Associate Consultant @ Infosys | Client Partner: Capital Group (USA) | Future Product Owner
            </div>
            <p className="hero-hook">
              Translating complex retirement accounts (SIMPLE IRA, SIMPLE IRA Plus), recordkeeping database schemas (RKD), and mutual fund allocations into structured requirements. Aligning business specifications across investment operations, custodian networks, and compliance desks.
            </p>

            <div className="hero-actions">
              <a href="#case-studies" className="btn btn-primary">
                <i className="fa-solid fa-folder-open"></i> Review Case Studies
              </a>
              <a href={resumePdf} download="Shubham_Sharma_Resume.pdf" className="btn btn-gold">
                <i className="fa-solid fa-file-arrow-down"></i> Download ATS Resume
              </a>
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
                <a href="https://www.linkedin.com/in/shubham-sharma-428bb4167/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          {/* Hero Profile Photo & Retirement Solutions Metrics Card */}
          <div className="hero-profile-card">
            <div className="hero-img-wrapper">
              <img src={profileImg} alt="Shubham Sharma - Senior Associate Consultant" className="hero-profile-img" />
              <div className="hero-img-overlay"></div>
              <div className="hero-floating-badge">
                <span className="status-dot"></span> Partner Client: Capital Group ($2.6T AUM)
              </div>
            </div>

            <div className="hero-card-content">
              <div className="hero-metrics-grid">
                <div className="metric-box">
                  <div className="metric-val">4+ Yrs</div>
                  <div className="metric-lbl">Retirement Solutions Exp</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val">100%</div>
                  <div className="metric-lbl">Sprint Delivery Rate</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val">$120K/Yr</div>
                  <div className="metric-lbl">Operational Savings Mapped</div>
                </div>
                <div className="metric-box">
                  <div className="metric-val">Infosys</div>
                  <div className="metric-lbl">Spot Award Winner</div>
                </div>
              </div>

              <div className="hero-tags-wrapper">
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> SIMPLE IRA & SIMPLE Plus</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> Recordkeeping DB (RKD)</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> ICU2 MF Validation</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> BRD & FSD Specifications</span>
                <span className="hero-mini-tag"><i className="fa-solid fa-check text-gold"></i> SQL Data Audits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
