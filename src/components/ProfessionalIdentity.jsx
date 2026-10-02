import React from 'react';
import { PROFESSIONAL_IDENTITY, ABOUT_NARRATIVE } from '../data/portfolioData';

export default function ProfessionalIdentity({ isEmbedded = false }) {
  const ContentWrapper = isEmbedded ? 'div' : 'section';
  const containerClass = isEmbedded ? 'embedded-identity-wrap' : 'identity-section';

  return (
    <ContentWrapper id={isEmbedded ? undefined : 'identity'} className={containerClass}>
      <div className={isEmbedded ? '' : 'container'}>
        {/* Section Header (omitted when embedded) */}
        {!isEmbedded && (
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Professional Positioning</span>
            <h2 className="section-title">
              Business × Technology × <span>Capital Markets</span>
            </h2>
            <p className="section-desc max-w-700">
              {PROFESSIONAL_IDENTITY.subtitle}. My value comes from connecting these areas rather than being defined by only one.
            </p>
          </div>
        )}

        {/* 3-Part Intersection Diagram */}
        <div className="intersection-container">
          <div className="pillars-grid">
            {PROFESSIONAL_IDENTITY.pillars.map((pillar) => (
              <div key={pillar.id} className={`pillar-card pillar-${pillar.accent}`}>
                <div className="pillar-header">
                  <div className={`pillar-icon-box bg-${pillar.accent}`}>
                    <i className={pillar.icon}></i>
                  </div>
                  <div>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <span className="pillar-sub">{pillar.subtitle}</span>
                  </div>
                </div>

                <ul className="pillar-list">
                  {pillar.items.map((item, idx) => (
                    <li key={idx}>
                      <i className={`fa-solid fa-check text-${pillar.accent}`}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Centerpiece Intersection Card */}
          <div className="intersection-centerpiece">
            <div className="centerpiece-content">
              <div className="centerpiece-badge">
                <i className="fa-solid fa-crosshairs text-gold"></i> THE CORE INTERSECTION
              </div>
              <h3 className="centerpiece-title">{PROFESSIONAL_IDENTITY.centerpiece.title}</h3>
              <p className="centerpiece-text">
                {PROFESSIONAL_IDENTITY.centerpiece.tagline} Bridging front-office business requirements with backend database schemas, API contracts, and engineering reality.
              </p>
            </div>

            {/* Emerging 4th Pillar: AI & GenAI */}
            <div className="emerging-pillar-banner">
              <div className="emerging-pillar-header">
                <div className="emerging-pillar-badge">
                  <span className="badge-pulse"></span>
                  <i className="fa-solid fa-brain text-purple"></i> {PROFESSIONAL_IDENTITY.emergingPillar.badge}
                </div>
                <h4 className="emerging-title">{PROFESSIONAL_IDENTITY.emergingPillar.title}</h4>
              </div>
              <p className="emerging-desc">{PROFESSIONAL_IDENTITY.emergingPillar.description}</p>
              <div className="emerging-status-tag">
                <i className="fa-solid fa-arrow-trend-up text-cyan"></i> {PROFESSIONAL_IDENTITY.emergingPillar.statusText}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Accordion / Story Card (ASD-STE-100 Compliant & Concise) */}
        <div className="about-narrative-card mt-4">
          <div className="narrative-grid">
            <div className="narrative-lead-col">
              <div className="narrative-badge">
                <i className="fa-solid fa-user-tie text-cyan"></i> Narrative Summary
              </div>
              <p className="narrative-lead">{ABOUT_NARRATIVE.lead}</p>
              <p className="narrative-body">{ABOUT_NARRATIVE.body1}</p>
              <p className="narrative-body">{ABOUT_NARRATIVE.body2}</p>
              <p className="narrative-closing">{ABOUT_NARRATIVE.closing}</p>
            </div>

            <div className="narrative-competency-col">
              <h4 className="competency-heading">
                <i className="fa-solid fa-sliders text-gold"></i> Core Functional Competencies
              </h4>
              <div className="competency-chips">
                {ABOUT_NARRATIVE.highlights.map((h, idx) => (
                  <span key={idx} className="competency-chip">
                    <i className="fa-solid fa-circle-check text-cyan"></i> {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
