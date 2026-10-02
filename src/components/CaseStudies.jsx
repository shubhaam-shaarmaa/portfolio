import React, { useState } from 'react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { ALL_CASE_STUDIES } from '../data/caseStudies/index';

export default function CaseStudies() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAllArchive, setShowAllArchive] = useState(false);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Flagship Deliverables</span>
          <h2 className="section-title">
            Featured <span>BA + AI Projects</span>
          </h2>
          <p className="section-desc max-w-700">
            Real enterprise case studies combining institutional Capital Markets infrastructure with modern AI requirements automation.
          </p>
        </div>

        {/* 3 Flagship Projects Grid */}
        <div className="flagship-grid">
          {FLAGSHIP_PROJECTS.map((proj) => (
            <div key={proj.id} className="flagship-card">
              <div className="flagship-card-header">
                <div className="flagship-tags">
                  <span className={`badge-pill badge-${proj.badgeColor}`}>
                    {proj.tag}
                  </span>
                  <span className="flagship-client">{proj.client}</span>
                </div>
                <h3 className="flagship-title">{proj.title}</h3>
                <div className="flagship-role">
                  <i className="fa-solid fa-user-tie"></i> {proj.role}
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="flagship-metrics">
                {proj.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flagship-metric-item">
                    <span className="flagship-metric-val">{m.val}</span>
                    <span className="flagship-metric-lbl">{m.lbl}</span>
                  </div>
                ))}
              </div>

              {/* Problem & Solution (ASD-STE-100 Compliant) */}
              <div className="flagship-body">
                <div className="flagship-section">
                  <span className="flagship-label text-dim">
                    <i className="fa-solid fa-triangle-exclamation text-gold"></i> Business Problem:
                  </span>
                  <p className="flagship-text">{proj.problem}</p>
                </div>

                <div className="flagship-section">
                  <span className="flagship-label text-dim">
                    <i className="fa-solid fa-circle-check text-cyan"></i> Engineered Solution:
                  </span>
                  <p className="flagship-text">{proj.solution}</p>
                </div>

                <div className="flagship-section">
                  <span className="flagship-label text-dim">
                    <i className="fa-solid fa-box-archive text-gold"></i> Key Deliverables:
                  </span>
                  <ul className="flagship-deliverables">
                    {proj.deliverables.map((del, dIdx) => (
                      <li key={dIdx}>
                        <i className="fa-solid fa-check"></i> {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tech Stack & CTA */}
              <div className="flagship-footer">
                <div className="flagship-tech-pills">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <button
                  className="btn btn-outline-cyan btn-sm"
                  onClick={() => setActiveModalProject(proj)}
                >
                  <i className="fa-solid fa-file-code"></i> Inspect Deliverable Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Toggle for Technical Recruiters */}
        <div className="archive-toggle-wrap text-center mt-3">
          <button
            className="btn btn-secondary"
            onClick={() => setShowAllArchive(!showAllArchive)}
          >
            <i className={`fa-solid ${showAllArchive ? 'fa-chevron-up' : 'fa-list-check'}`}></i>{' '}
            {showAllArchive ? 'Hide Project Archive' : 'Explore All 10 Case Studies & System Schemas'}
          </button>
        </div>

        {/* Archive Drawer */}
        {showAllArchive && (
          <div className="archive-drawer mt-3">
            <div className="archive-header">
              <h3>Enterprise & FinTech Case Study Archive</h3>
              <p className="text-muted text-sm">
                Full repository of retirement accounts, trade lifecycle, database migration, and mutual fund validation projects.
              </p>
            </div>
            <div className="archive-grid">
              {ALL_CASE_STUDIES.map((cs) => (
                <div key={cs.id} className="archive-card">
                  <div className="archive-card-top">
                    <span className="archive-badge">Case #{cs.id}</span>
                    <span className="archive-domain">{cs.domain?.split('&')[0] || 'FinTech'}</span>
                  </div>
                  <h4 className="archive-title">{cs.title}</h4>
                  <p className="archive-desc">{cs.problemStatement || cs.problem}</p>
                  <div className="archive-meta">
                    <span><i className="fa-solid fa-building"></i> {cs.client || 'Enterprise'}</span>
                    <span><i className="fa-solid fa-user-tag"></i> {cs.role || 'Senior BA'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Interactive Deliverable Inspection */}
        {activeModalProject && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className={`badge-pill badge-${activeModalProject.badgeColor}`}>
                    {activeModalProject.tag}
                  </span>
                  <h3 className="modal-title">{activeModalProject.title}</h3>
                  <span className="modal-sub">{activeModalProject.client} &nbsp;|&nbsp; {activeModalProject.role}</span>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close modal"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-grid">
                  <div className="modal-col">
                    <h4 className="modal-heading">
                      <i className="fa-solid fa-file-contract text-gold"></i> Specification Details
                    </h4>
                    <p className="modal-text"><strong>Problem:</strong> {activeModalProject.problem}</p>
                    <p className="modal-text"><strong>Engineered Solution:</strong> {activeModalProject.solution}</p>
                    <h5 className="modal-subheading">Core Deliverables</h5>
                    <ul className="modal-list">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx}><i className="fa-solid fa-circle-check text-cyan"></i> {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-col">
                    <h4 className="modal-heading">
                      <i className="fa-solid fa-code text-cyan"></i> Sample Technical Artifact
                    </h4>
                    <div className="spec-code-preview">
                      <pre>
                        <code>
{activeModalProject.id === 'ai-requirements-copilot' ? `Feature: Automated Contribution Limits Validation (SIMPLE IRA)
  As an institutional plan administrator
  I want real-time validation of employee contribution limits
  So that excess contributions are quarantined before RKD posting

  Scenario: Ingestion under statutory limit
    Given an employee account "EMP-94021" with YTD contributions of $12,000
    When a new contribution of $2,500 is submitted for tax year 2026
    Then the total contributions equal $14,500
    And the validation status is marked "APPROVED"
    And an asynchronous sync event is published to RKD within 500ms

  Scenario: Ingestion exceeding statutory limit
    Given an employee account "EMP-94021" with YTD contributions of $15,000
    When a new contribution of $1,000 is submitted
    Then the system rejects the transaction with code "LIMIT_EXCEEDED"
    And routes the record to the middle-office exception queue` : activeModalProject.id === 'orion-retirement-engine' ? `POST /api/v1/retirement/simple-ira/sync
Headers:
  Authorization: Bearer <AUTH_TOKEN>
  Content-Type: application/json

Request Payload:
{
  "planId": "PLAN-CG-88219",
  "participantId": "PART-449102",
  "accountType": "SIMPLE_IRA_PLUS",
  "contributionAmount": 1500.00,
  "currency": "USD",
  "taxYear": 2026,
  "custodianId": "CUST-BNY-01"
}

Response (200 OK):
{
  "status": "APPROVED",
  "rkdTransactionId": "RKD-TX-9904128",
  "remainingLimit": 13500.00,
  "syncTimestamp": "2026-10-02T10:15:30Z"
}` : `// Trade Lifecycle Exception Matching Engine
SELECT 
    t.trade_id,
    t.security_isin,
    t.trade_amount,
    c.clearing_status,
    CASE 
        WHEN t.trade_amount != c.settlement_amount THEN 'CASH_MISMATCH'
        WHEN t.ssi_code != c.custodian_ssi THEN 'SSI_BREAK'
        ELSE 'MATCHED'
    END AS exception_code
FROM front_office_orders t
JOIN middle_office_clearing c ON t.trade_id = c.trade_id
WHERE c.clearing_status IN ('UNMATCHED', 'PENDING_TRIAGE');`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <span className="text-muted text-sm">
                  Verified Production Artifact · Compliant with Capital Markets Security Standards
                </span>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
