import React from 'react';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeCta() {
  return (
    <section id="resume" className="resume-cta-section">
      <div className="container">
        <div className="resume-cta-box">
          <div className="resume-cta-content">
            <span className="resume-cta-badge">
              <i className="fa-solid fa-file-contract text-gold"></i> Curriculum Vitae
            </span>
            <h3 className="resume-cta-heading">Want the complete story?</h3>
            <p className="resume-cta-desc">
              Download my complete ATS-compliant resume or explore my LinkedIn network for full project histories, recommendations, and domain consulting credentials.
            </p>
          </div>

          <div className="resume-cta-actions">
            <a
              href={resumePdf}
              download="Shubham_Sharma_Resume.pdf"
              className="btn btn-gold"
              aria-label="Download Complete Resume"
            >
              <i className="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin"></i> View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
