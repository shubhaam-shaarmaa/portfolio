import React from 'react';
import { ENGINEERING_FOUNDATION } from '../data/portfolioData';

export default function EngineeringFoundation() {
  return (
    <section id="engineering" className="engineering-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Technical Depth</span>
          <h2 className="section-title">
            Engineering <span>Foundation</span>
          </h2>
          <p className="section-desc max-w-700">
            {ENGINEERING_FOUNDATION.quote}
          </p>
        </div>

        {/* Supporting Narrative Card */}
        <div className="engineering-narrative-card">
          <div className="eng-icon-badge">
            <i className="fa-solid fa-laptop-code text-cyan"></i>
          </div>
          <p className="eng-narrative-text">
            {ENGINEERING_FOUNDATION.description}
          </p>
        </div>

        {/* 4 Technical Pillars Grid */}
        <div className="engineering-grid mt-3">
          {ENGINEERING_FOUNDATION.areas.map((area, idx) => (
            <div key={idx} className="eng-area-card">
              <div className="eng-area-header">
                <span className="eng-area-number">0{idx + 1}</span>
                <h3 className="eng-area-title">{area.title}</h3>
              </div>
              <p className="eng-area-detail">{area.detail}</p>
              <div className="eng-tech-chips">
                {area.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="eng-chip">
                    <i className="fa-solid fa-code text-cyan"></i> {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
