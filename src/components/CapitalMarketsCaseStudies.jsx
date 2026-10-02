import React, { useState } from 'react';
import { TRADE_LIFECYCLE_STAGES, FLAGSHIP_CASE_STUDY, FUTURE_CASE_STUDIES } from '../data/capitalMarketsData';

export default function CapitalMarketsCaseStudies() {
  const [activeStageId, setActiveStageId] = useState('initiation');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'requirements' | 'data-api' | 'uat'
  const [viewMode, setViewMode] = useState('executive'); // 'executive' | 'technical'
  const [resolvedExceptions, setResolvedExceptions] = useState([]);

  const activeStage = TRADE_LIFECYCLE_STAGES.find(s => s.id === activeStageId) || TRADE_LIFECYCLE_STAGES[0];

  const exceptionsList = [
    {
      id: 'ex-1',
      type: 'Cash Mismatch',
      desc: '$1.8M dividend timing break between broker confirmation and custodian ledger.',
      action: 'Auto-adjust against accrual tolerance rule (±$0.02) or route to cash triage desk.'
    },
    {
      id: 'ex-2',
      type: 'SSI Break',
      desc: 'Executing broker transmitted invalid Standard Settlement Instructions for corporate bond.',
      action: 'Fetch DTCC Golden SSI record and trigger counterparty re-affirmation.'
    },
    {
      id: 'ex-3',
      type: 'T+1 Settlement Window Drift',
      desc: 'Allocation unconfirmed 90 minutes prior to DTCC trade match cut-off deadline.',
      action: 'Escalate to Middle-Office priority queue and alert trade clearing desk.'
    }
  ];

  const handleResolveException = (id) => {
    if (!resolvedExceptions.includes(id)) {
      setResolvedExceptions([...resolvedExceptions, id]);
    }
  };

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Domain Deep Dive</span>
          <h2 className="section-title">
            Capital Markets <span>Case Studies</span>
          </h2>
          <p className="section-desc max-w-700">
            In-depth techno-functional analysis of institutional securities workflows, middle-office reconciliation, and T+1 settlement operations.
          </p>
        </div>

        {/* Recruiter Perspective Mode Switcher */}
        <div className="view-mode-bar">
          <div className="view-mode-toggle" role="group" aria-label="Perspective View Mode">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'executive' ? 'active' : ''}`}
              onClick={() => setViewMode('executive')}
            >
              <i className="fa-solid fa-briefcase text-gold"></i> Executive Summary
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'technical' ? 'active' : ''}`}
              onClick={() => setViewMode('technical')}
            >
              <i className="fa-solid fa-laptop-code text-cyan"></i> Deep Technical Specs
            </button>
          </div>
          <span className="view-mode-hint">
            <i className="fa-solid fa-circle-info text-dim"></i>
            {viewMode === 'executive'
              ? 'Showing concise business outcomes, 7-stage flow & simulator. Switch to Deep Technical Specs for full Gherkin user stories & schemas.'
              : 'Showing full technical specifications: As-Is vs To-Be flows, Gherkin acceptance criteria, data models, and UAT matrices.'}
          </span>
        </div>

        {/* Flagship Case Study Header Banner */}
        <div className="flagship-hero-banner">
          <div className="flagship-hero-top">
            <span className="badge-portfolio-case">
              <i className="fa-solid fa-folder-closed text-gold"></i> {FLAGSHIP_CASE_STUDY.label}
            </span>
            <span className="flagship-domain-tag">{FLAGSHIP_CASE_STUDY.domain}</span>
          </div>
          <h3 className="flagship-hero-title">{FLAGSHIP_CASE_STUDY.title}</h3>
          <p className="flagship-hero-subtitle">{FLAGSHIP_CASE_STUDY.subtitle}</p>
        </div>

        {/* 7-Stage Interactive Trade Lifecycle Stepper */}
        <div className="lifecycle-stepper-container mt-3">
          <div className="stepper-header-strip">
            <span className="stepper-caption">
              <i className="fa-solid fa-arrows-split-up-and-left text-cyan"></i> 7-Stage End-to-End Trade Lifecycle Flow:
            </span>
            <span className="stepper-subcaption text-dim">Click stage to inspect desk actions, checks & systems</span>
          </div>

          <div className="lifecycle-stepper-scroll">
            {TRADE_LIFECYCLE_STAGES.map((stg) => (
              <button
                key={stg.id}
                className={`lifecycle-step-node ${activeStageId === stg.id ? 'active' : ''}`}
                onClick={() => setActiveStageId(stg.id)}
              >
                <span className="node-num">{stg.step}</span>
                <span className="node-label">{stg.name}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Detail Box */}
          <div className="lifecycle-stage-card">
            <div className="stage-card-top">
              <div>
                <span className="stage-badge">Stage {activeStage.step} of 07</span>
                <h4 className="stage-name">{activeStage.name}</h4>
                <div className="stage-desk">
                  <i className="fa-solid fa-briefcase text-gold"></i> Responsible Desk: <strong>{activeStage.desk}</strong>
                </div>
              </div>
              <p className="stage-summary">{activeStage.summary}</p>
            </div>

            <div className="stage-grid-3col">
              <div className="stage-col">
                <span className="col-heading">
                  <i className="fa-solid fa-play text-cyan"></i> Operational Actions
                </span>
                <ul className="stage-list">
                  {activeStage.actions.map((act, aIdx) => (
                    <li key={aIdx}>{act}</li>
                  ))}
                </ul>
              </div>

              <div className="stage-col">
                <span className="col-heading">
                  <i className="fa-solid fa-shield-check text-emerald"></i> Mandatory Checkpoints
                </span>
                <ul className="stage-list">
                  {activeStage.checks.map((chk, cIdx) => (
                    <li key={cIdx}>{chk}</li>
                  ))}
                </ul>
              </div>

              <div className="stage-col">
                <span className="col-heading">
                  <i className="fa-solid fa-server text-purple"></i> Primary Systems
                </span>
                <div className="systems-pill-wrap">
                  {activeStage.systems.map((sys, sIdx) => (
                    <span key={sIdx} className="sys-pill">{sys}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Tabs: As-Is/To-Be, Requirements, User Stories, UAT */}
        <div className="case-study-details-card mt-4">
          <div className="case-study-nav-tabs">
            <button
              className={`cs-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <i className="fa-solid fa-diagram-project"></i> As-Is vs. To-Be & Problem
            </button>
            <button
              className={`cs-tab-btn ${activeTab === 'requirements' ? 'active' : ''}`}
              onClick={() => setActiveTab('requirements')}
            >
              <i className="fa-solid fa-list-check"></i> Requirements & User Stories
            </button>
            <button
              className={`cs-tab-btn ${activeTab === 'data-api' ? 'active' : ''}`}
              onClick={() => setActiveTab('data-api')}
            >
              <i className="fa-solid fa-database"></i> Data Model & API Architecture
            </button>
            <button
              className={`cs-tab-btn ${activeTab === 'uat' ? 'active' : ''}`}
              onClick={() => setActiveTab('uat')}
            >
              <i className="fa-solid fa-vial-circle-check"></i> UAT Scenarios & Business Impact
            </button>
          </div>

          <div className="case-study-tab-content">
            {activeTab === 'overview' && (
              <div className="tab-pane">
                <div className="case-section-box">
                  <h4 className="case-section-title">
                    <i className="fa-solid fa-circle-exclamation text-gold"></i> The Business Problem
                  </h4>
                  <p className="case-text">{FLAGSHIP_CASE_STUDY.businessProblem}</p>
                </div>

                <div className="process-comparison-grid mt-3">
                  <div className="process-box process-as-is">
                    <div className="process-box-header">
                      <span className="process-badge badge-as-is">Current State</span>
                      <h5>AS-IS Operational Process</h5>
                    </div>
                    <p className="case-text">{FLAGSHIP_CASE_STUDY.asIsProcess}</p>
                  </div>

                  <div className="process-box process-to-be">
                    <div className="process-box-header">
                      <span className="process-badge badge-to-be">Target State</span>
                      <h5>TO-BE Optimized Process</h5>
                    </div>
                    <p className="case-text">{FLAGSHIP_CASE_STUDY.toBeProcess}</p>
                  </div>
                </div>

                <div className="stakeholders-grid mt-3">
                  <h5 className="stakeholders-title">
                    <i className="fa-solid fa-users text-cyan"></i> Stakeholder Alignment Matrix
                  </h5>
                  <div className="stakeholder-cards">
                    {FLAGSHIP_CASE_STUDY.stakeholders.map((sh, sIdx) => (
                      <div key={sIdx} className="stakeholder-card">
                        <strong>{sh.role}</strong>
                        <p>{sh.interest}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="tab-pane">
                <div className="case-section-box">
                  <h4 className="case-section-title">
                    <i className="fa-solid fa-file-contract text-cyan"></i> Core Functional Requirements
                  </h4>
                  <ul className="requirements-list">
                    {FLAGSHIP_CASE_STUDY.requirements.map((req, rIdx) => (
                      <li key={rIdx}>
                        <i className="fa-solid fa-check-double text-cyan"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="user-stories-section mt-3">
                  <h4 className="case-section-title">
                    <i className="fa-solid fa-book-bookmark text-gold"></i> Sample User Stories & Gherkin Scenarios
                  </h4>
                  {FLAGSHIP_CASE_STUDY.userStories.map((story) => (
                    <div key={story.id} className="user-story-card">
                      <div className="story-header">
                        <span className="story-id">{story.id}</span>
                        <h5 className="story-title">{story.title}</h5>
                      </div>
                      <p className="story-text">"{story.story}"</p>
                      <div className="gherkin-box">
                        <span className="gherkin-label">Acceptance Criteria (Given-When-Then):</span>
                        <ul className="gherkin-steps">
                          {story.acceptanceCriteria.map((ac, acIdx) => (
                            <li key={acIdx}><code>{ac}</code></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'data-api' && (
              <div className="tab-pane">
                <div className="grid-2col">
                  <div className="case-section-box">
                    <h4 className="case-section-title">
                      <i className="fa-solid fa-database text-cyan"></i> Key Data Requirements & Schemas
                    </h4>
                    <ul className="data-req-list">
                      {FLAGSHIP_CASE_STUDY.dataRequirements.map((d, dIdx) => (
                        <li key={dIdx}>
                          <i className="fa-solid fa-table-cells text-cyan"></i>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-section-box">
                    <h4 className="case-section-title">
                      <i className="fa-solid fa-network-wired text-gold"></i> API & Integration Considerations
                    </h4>
                    <ul className="data-req-list">
                      {FLAGSHIP_CASE_STUDY.apiConsiderations.map((a, aIdx) => (
                        <li key={aIdx}>
                          <i className="fa-solid fa-code-fork text-gold"></i>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'uat' && (
              <div className="tab-pane">
                <div className="grid-2col">
                  <div className="case-section-box">
                    <h4 className="case-section-title">
                      <i className="fa-solid fa-vial text-emerald"></i> UAT Scenarios & Validation Criteria
                    </h4>
                    <ul className="uat-list">
                      {FLAGSHIP_CASE_STUDY.uatScenarios.map((uat, uIdx) => (
                        <li key={uIdx}>
                          <i className="fa-solid fa-flask text-emerald"></i>
                          <span>{uat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-section-box">
                    <h4 className="case-section-title">
                      <i className="fa-solid fa-arrow-trend-up text-gold"></i> Business Impact & Risk Mitigation
                    </h4>
                    <ul className="uat-list">
                      {FLAGSHIP_CASE_STUDY.businessImpact.map((imp, iIdx) => (
                        <li key={iIdx}>
                          <i className="fa-solid fa-shield-halved text-gold"></i>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Middle-Office Exception Resolver Mini-Simulator */}
        <div className="exception-desk-widget mt-4">
          <div className="desk-header">
            <div>
              <span className="desk-badge">
                <i className="fa-solid fa-terminal text-cyan"></i> Interactive Operations Console
              </span>
              <h4 className="desk-title">Middle-Office Exception Triage Simulator</h4>
              <p className="desk-desc">
                Simulate how pre-clearing constraint rules automatically resolve breaks or route them for operational escalation.
              </p>
            </div>
            <div className="desk-stats">
              <span>Resolved: {resolvedExceptions.length} / {exceptionsList.length}</span>
              {resolvedExceptions.length === exceptionsList.length && (
                <span className="desk-all-resolved text-emerald text-xs">
                  <i className="fa-solid fa-check-double"></i> All breaks resolved!
                </span>
              )}
            </div>
          </div>

          <div className="exceptions-queue-list mt-2">
            {exceptionsList.map((ex) => {
              const isResolved = resolvedExceptions.includes(ex.id);

              return (
                <div key={ex.id} className={`desk-queue-item ${isResolved ? 'is-resolved' : ''}`}>
                  <div className="queue-item-info">
                    <div className="queue-item-type">
                      <span className={`status-indicator ${isResolved ? 'status-completed' : 'status-in-progress'}`}></span>
                      <strong>{ex.type}</strong>
                    </div>
                    <p className="queue-item-desc">{ex.desc}</p>
                    {isResolved && (
                      <div className="queue-item-resolution">
                        <i className="fa-solid fa-circle-check text-emerald"></i> Action: {ex.action}
                      </div>
                    )}
                  </div>

                  <button
                    className={`btn btn-sm ${isResolved ? 'btn-disabled' : 'btn-outline-gold'}`}
                    onClick={() => handleResolveException(ex.id)}
                    disabled={isResolved}
                  >
                    {isResolved ? 'Resolved' : 'Execute Triage'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Capital Markets Case Studies Grid */}
        <div className="future-case-studies-section mt-4">
          <div className="future-header">
            <h4 className="future-title">
              <i className="fa-solid fa-layer-group text-gold"></i> Additional Capital Markets Portfolio Studies
            </h4>
            <span className="text-dim text-sm">Extensible domain case study repository</span>
          </div>

          <div className="future-case-grid mt-2">
            {FUTURE_CASE_STUDIES.map((fcs, fIdx) => (
              <div key={fIdx} className="future-case-card">
                <div className="future-top">
                  <span className="future-badge">{fcs.status}</span>
                  <span className="future-domain">{fcs.domain}</span>
                </div>
                <h5 className="future-case-title">{fcs.title}</h5>
                <p className="future-case-summary">{fcs.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
