import React from 'react';
import { CAREER_JOURNEY } from '../data/portfolioData';

export default function CareerJourney() {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Progressive Expansion</span>
          <h2 className="section-title">
            Career Journey & <span>Evolution</span>
          </h2>
          <p className="section-desc max-w-700">
            One continuous professional progression: from engineering foundations to Financial Services domain consulting, techno-functional business analysis, and AI workflows.
          </p>
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
            <div key={idx} className="journey-step-card">
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
    </section>
  );
}
