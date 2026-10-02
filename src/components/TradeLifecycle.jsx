import React, { useState } from 'react';
import { TRADE_LIFECYCLE_STEPS } from '../data/portfolioData';

export default function TradeLifecycle() {
  const [activeStepId, setActiveStepId] = useState('pre-trade');
  const [resolvedExceptions, setResolvedExceptions] = useState([]);

  const activeStep = TRADE_LIFECYCLE_STEPS.find(s => s.id === activeStepId) || TRADE_LIFECYCLE_STEPS[0];

  const exceptionsList = [
    { id: 'ex-1', type: 'Cash Mismatch', desc: '$2.4M dividend allocation timing break on custodian feed.', action: 'Auto-net against RKD accruals' },
    { id: 'ex-2', type: 'SSI Break', desc: 'Invalid Standard Settlement Instructions for fixed income bond.', action: 'Fetch DTCC CTM golden record' },
    { id: 'ex-3', type: 'Exposure Breach', desc: 'Portfolio single-issuer drift reached 10.4% (Limit: 10%).', action: 'Trigger pre-trade compliance halt' }
  ];

  const handleResolve = (id) => {
    if (!resolvedExceptions.includes(id)) {
      setResolvedExceptions([...resolvedExceptions, id]);
    }
  };

  return (
    <section id="lifecycle" className="lifecycle-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Domain Deep Dive</span>
          <h2 className="section-title">
            Interactive <span>Trade Life Cycle Engine</span>
          </h2>
          <p className="section-desc max-w-700">
            End-to-end institutional trade execution model from pre-trade risk to T+1 DTCC clearing and settlement.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Stepper */}
        <div className="stepper-nav">
          {TRADE_LIFECYCLE_STEPS.map((step) => (
            <button
              key={step.id}
              className={`stepper-btn ${activeStepId === step.id ? 'active' : ''}`}
              onClick={() => setActiveStepId(step.id)}
            >
              <span className="step-num">{step.step}</span>
              <span className="step-title">{step.name}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Details & Simulator Grid */}
        <div className="lifecycle-grid mt-3">
          <div className="lifecycle-detail-card">
            <div className="detail-card-header">
              <span className="badge-pill badge-gold">Stage {activeStep.step}</span>
              <h3>{activeStep.name}</h3>
            </div>
            <p className="detail-desc">{activeStep.desc}</p>

            <div className="detail-checks">
              <h4>
                <i className="fa-solid fa-list-check text-cyan"></i> Critical Verification Checkpoints:
              </h4>
              <ul className="check-list">
                {activeStep.checks.map((chk, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-circle-check text-emerald"></i> {chk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-meta-grid">
              <div className="meta-box">
                <span className="meta-lbl">Responsible Office</span>
                <span className="meta-val">
                  {activeStepId === 'pre-trade' ? 'Front Office / Risk' : activeStepId === 'order-routing' ? 'Front Office / Trading Desk' : activeStepId === 'matching' ? 'Middle Office / Operations' : 'Back Office / Custody'}
                </span>
              </div>
              <div className="meta-box">
                <span className="meta-lbl">Primary Systems</span>
                <span className="meta-val">
                  {activeStepId === 'pre-trade' ? 'OMS, ICU2 Rules, Charles River' : activeStepId === 'order-routing' ? 'FIX Protocol, Execution Venues' : activeStepId === 'matching' ? 'DTCC CTM, SWIFT MT548' : 'DTCC / NSCC, RKD Database'}
                </span>
              </div>
            </div>
          </div>

          {/* Exception Triage Mini-Simulator */}
          <div className="lifecycle-sim-card">
            <div className="sim-card-header">
              <div className="sim-title">
                <i className="fa-solid fa-triangle-exclamation text-gold"></i> Live Exception Resolver
              </div>
              <span className="text-dim text-xs">Simulated Operations Desk</span>
            </div>
            <p className="text-muted text-sm">
              Click to resolve real-world trade breaks using automated business logic and matching rules:
            </p>

            <div className="exceptions-queue">
              {exceptionsList.map((ex) => {
                const isResolved = resolvedExceptions.includes(ex.id);
                return (
                  <div key={ex.id} className={`exception-item ${isResolved ? 'resolved' : ''}`}>
                    <div className="exception-info">
                      <div className="exception-type">
                        <span className={`status-dot ${isResolved ? 'dot-resolved' : 'dot-unresolved'}`}></span>
                        <strong>{ex.type}</strong>
                      </div>
                      <p className="exception-desc">{ex.desc}</p>
                      {isResolved && (
                        <div className="exception-action text-emerald">
                          <i className="fa-solid fa-circle-check"></i> {ex.action}
                        </div>
                      )}
                    </div>
                    <button
                      className={`btn btn-sm ${isResolved ? 'btn-disabled' : 'btn-outline-gold'}`}
                      onClick={() => handleResolve(ex.id)}
                      disabled={isResolved}
                    >
                      {isResolved ? 'Resolved' : 'Auto-Resolve'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="sim-footer">
              <span className="text-muted text-xs">
                Resolved: {resolvedExceptions.length} of {exceptionsList.length} exceptions
              </span>
              {resolvedExceptions.length === exceptionsList.length && (
                <span className="text-emerald text-xs font-semibold">
                  <i className="fa-solid fa-check-double"></i> All clearing breaks resolved!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
