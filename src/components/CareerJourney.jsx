import React, { useState } from 'react';
import { CAREER_JOURNEY } from '../data/portfolioData';

export default function CareerJourney({ isEmbedded = false }) {
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (idx) => {
    setSelectedStage(selectedStage === idx ? null : idx);
    const el = document.getElementById(`journey-step-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const ContentWrapper = isEmbedded ? 'div' : 'section';
  const containerClass = isEmbedded ? 'embedded-journey-wrap' : 'journey-section';

  return (
    <ContentWrapper id={isEmbedded ? undefined : 'journey'} className={containerClass}>
      <div className={isEmbedded ? '' : 'container'}>
        {/* Section Header (omitted when embedded in unified #journey) */}
        {!isEmbedded && (
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Progressive Expansion</span>
            <h2 className="section-title">
              Career Journey & <span>Evolution</span>
            </h2>
            <p className="section-desc max-w-700">
              One continuous professional progression: from engineering foundations to Financial Services domain consulting, techno-functional business analysis, and AI workflows.
            </p>
          </div>
        )}

        {/* Interactive Milestone Quick-Selector */}
        <div className="timeline-nav-pills">
          {CAREER_JOURNEY.map((step, idx) => (
            <button
              key={idx}
              type="button"
              className={`timeline-pill ${selectedStage === idx ? 'active' : ''}`}
              onClick={() => handleStageClick(idx)}
              title={`View ${step.role}`}
            >
              <span className="pill-year">{step.year}</span>
              <span className="pill-role">{step.badge}</span>
            </button>
          ))}
        </div>

        {/* Narrative Banner */}
        <div className="journey-narrative-banner">
          <div className="banner-quote-icon">
            <i className="fa-solid fa-route text-gold"></i>
          </div>
          <div className="banner-text">
            <strong>The Core Career Narrative:</strong> "I started on the engineering side, developed strong technical foundations, gained Financial Services and Capital Markets expertise, progressively moved toward techno-functional/business analysis responsibilities, and am now adding AI/GenAI capabilities to that combination."
          </div>
        </div>

        {/* 5-Stage Progressive Timeline */}
        <div className="journey-timeline">
          {CAREER_JOURNEY.map((step, idx) => (
            <div
              key={idx}
              id={`journey-step-${idx}`}
              className={`journey-step-card ${selectedStage === idx ? 'is-highlighted' : ''}`}
            >
              <div className="journey-step-marker">
                <span className="marker-number">{step.year}</span>
                <span className="marker-line"></span>
              </div>

              <div className="journey-step-content">
                <div className="journey-step-header">
                  <div>
                    <span className="journey-badge">{step.badge}</span>
                    <h3 className="journey-role">{step.role}</h3>
                    <div className="journey-company">
                      <i className="fa-solid fa-building text-gold"></i> {step.company} &nbsp;·&nbsp; <span className="text-muted">{step.period}</span>
                    </div>
                  </div>
                </div>

                <p className="journey-summary">{step.summary}</p>

                <ul className="journey-bullet-list">
                  {step.bullets.map((b, bIdx) => (
                    <li key={bIdx}>
                      <i className="fa-solid fa-arrow-right text-cyan"></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
