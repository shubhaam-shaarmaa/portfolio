import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Credentials & Recognition</span>
          <h2 className="section-title">
            Certifications & <span>Honors</span>
          </h2>
          <p className="section-desc max-w-700">
            Professional credentials in business consulting, Capital Markets, agile engineering, and continuous internal client recognitions.
          </p>
        </div>

        {/* Compact Certifications Grid */}
        <div className="certifications-compact-grid">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div key={idx} className="cert-compact-card">
              <div className="cert-icon-box">
                <i className={cert.icon}></i>
              </div>
              <div className="cert-info">
                <span className="cert-category">{cert.category}</span>
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">·</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
