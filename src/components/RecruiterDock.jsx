import React, { useState, useEffect } from 'react';
import { DYNAMIC_EXPERIENCE_TEXT } from '../data/portfolioData';

export const EXPLORATION_ITEMS = [
  {
    id: 'trade',
    section: 'work',
    num: '01',
    short: 'Trade Spec',
    label: 'Trade Lifecycle & T+1 Spec',
    icon: 'fa-bolt-lightning',
    hint: 'Inspect the 7-stage trade stepper & DTCC affirmative settlement'
  },
  {
    id: 'initiatives',
    section: 'work',
    num: '02',
    short: 'Initiatives',
    label: 'Technical Initiatives (6)',
    icon: 'fa-cubes',
    hint: 'Review 6 enterprise financial software projects & schemas'
  },
  {
    id: 'career',
    section: 'journey',
    num: '03',
    short: 'Career Path',
    label: 'Career Journey & Capabilities',
    icon: 'fa-timeline',
    hint: `Explore ${DYNAMIC_EXPERIENCE_TEXT} Infosys track & technical foundation`
  },
  {
    id: 'ai',
    section: 'journey',
    num: '04',
    short: 'AI Systems',
    label: 'AI Roadmap & Systems Architecture',
    icon: 'fa-brain',
    hint: 'Discover the 8-stage production AI engineering roadmap'
  },
  {
    id: 'credentials',
    section: 'journey',
    num: '05',
    short: 'Credentials',
    label: 'Positioning & Certifications',
    icon: 'fa-certificate',
    hint: 'Inspect verified certifications & consulting pillars'
  },
  {
    id: 'terminal',
    section: 'ask',
    num: '06',
    short: 'Ask Terminal',
    label: 'Ask Shubham Interactive Terminal',
    icon: 'fa-terminal',
    hint: 'Ask questions directly to the live CLI console'
  },
  {
    id: 'contact',
    section: 'contact',
    num: '07',
    short: 'Contact Form',
    label: 'Direct Message & Contact Form',
    icon: 'fa-paper-plane',
    hint: 'Submit an inquiry or schedule a direct consultation'
  }
];

export default function RecruiterDock({
  activeSection = 'hero',
  activeSheet = 'trade',
  onSelectSheet
}) {
  const [visitedItems, setVisitedItems] = useState(new Set(['trade']));
  const [isMinimized, setIsMinimized] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // Sync exploration when activeSheet changes
  useEffect(() => {
    if (activeSheet) {
      setVisitedItems((prev) => {
        const next = new Set(prev);
        next.add(activeSheet);
        return next;
      });
    }
  }, [activeSheet]);

  // Sync exploration when activeSection changes
  useEffect(() => {
    if (activeSection === 'ask') {
      setVisitedItems((prev) => new Set(prev).add('terminal'));
    } else if (activeSection === 'contact') {
      setVisitedItems((prev) => new Set(prev).add('contact'));
    } else if (activeSection === 'work') {
      setVisitedItems((prev) => new Set(prev).add('trade'));
    } else if (activeSection === 'journey') {
      setVisitedItems((prev) => new Set(prev).add('career'));
    }
  }, [activeSection]);

  const visitedCount = visitedItems.size;
  const totalCount = EXPLORATION_ITEMS.length;
  const percent = Math.min(100, Math.round((visitedCount / totalCount) * 100));
  const isComplete = visitedCount >= totalCount;

  // Next unvisited item for the guidance hint
  const nextTarget = EXPLORATION_ITEMS.find((item) => !visitedItems.has(item.id)) || null;

  const handleNavigate = (item) => {
    if (onSelectSheet) {
      onSelectSheet(item.id);
    }
    const targetEl = document.getElementById('canvas-workspace') || document.getElementById(item.section);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    setShowGuide(false);
  };



  return (
    <>
      {/* Exploration Guide Popover */}
      {showGuide && (
        <div
          className="dock-guide-overlay"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="dock-guide-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Application Exploration Guide"
          >
            <div className="dock-guide-header">
              <div className="guide-header-title">
                <i className="fa-solid fa-compass text-cyan"></i>
                <span>Application Exploration Guide</span>
              </div>
              <button
                type="button"
                className="guide-close-btn"
                onClick={() => setShowGuide(false)}
                aria-label="Close exploration guide"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <p className="guide-subtitle">
              To achieve <strong>100% verified exploration</strong>, inspect each of the 7 sections and subsections below. Click any item to jump directly to it:
            </p>

            <div className="guide-progress-bar-track">
              <div className="guide-progress-bar-fill" style={{ width: `${percent}%` }}></div>
            </div>
            <div className="guide-progress-status-row">
              <span className="text-cyan font-bold">{percent}% Complete</span>
              <span className="text-dim">({visitedCount} of {totalCount} Subsections Explored)</span>
            </div>

            <div className="guide-items-list">
              {EXPLORATION_ITEMS.map((item) => {
                const isVisited = visitedItems.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`guide-item-card ${isVisited ? 'visited' : 'unvisited'}`}
                    onClick={() => handleNavigate(item)}
                  >
                    <div className="guide-item-left">
                      <span className={`guide-status-icon ${isVisited ? 'icon-done' : 'icon-pending'}`}>
                        <i className={`fa-solid ${isVisited ? 'fa-check' : item.icon}`}></i>
                      </span>
                      <div className="guide-item-info">
                        <div className="guide-item-name-row">
                          <span className="guide-item-num">{item.num}</span>
                          <span className="guide-item-label">{item.label}</span>
                          {isVisited ? (
                            <span className="guide-badge-done">Explored</span>
                          ) : (
                            <span className="guide-badge-pending">Unexplored</span>
                          )}
                        </div>
                        <p className="guide-item-hint">
                          <i className="fa-solid fa-lightbulb text-gold"></i> {item.hint}
                        </p>
                      </div>
                    </div>
                    <div className="guide-item-action">
                      <span className="guide-action-text">
                        {isVisited ? 'View Again' : 'Explore Now'} <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="guide-footer-note">
              {isComplete ? (
                <div className="guide-complete-banner">
                  <i className="fa-solid fa-trophy text-gold"></i>
                  <span><strong>100% Verification Complete!</strong> You have inspected every section and deliverable in this application.</span>
                </div>
              ) : (
                <div className="guide-hint-banner">
                  <i className="fa-solid fa-circle-info text-cyan"></i>
                  <span><strong>Tip:</strong> Click on any unexplored item above or follow the live hint button in the dock to reach 100%.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Recruiter Exploration Dock */}
      <div
        className={`recruiter-dock ${isMinimized ? 'dock-minimized' : ''} ${isComplete ? 'dock-completed' : ''}`}
        style={{ '--dock-pct': `${percent}%` }}
        role="region"
        aria-label="Recruiter Exploration Progress Dock"
      >
        {/* Progress Ring & Stats */}
        <div
          className="dock-progress-wrap"
          onClick={() => setShowGuide(!showGuide)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setShowGuide(!showGuide)}
          title={`Click to open Exploration Guide & Hints (${percent}% Explored)`}
        >
          <div className="dock-progress-ring" title={`${percent}% Explored`}>
            {isComplete && <i className="fa-solid fa-check dock-done-check"></i>}
          </div>
          <div className="dock-progress-text">
            Explored: <span>{percent}%</span> ({visitedCount}/{totalCount})
          </div>
          <span className="dock-guide-chip" title="View Exploration Checklist">
            <i className="fa-solid fa-list-check"></i>
          </span>
        </div>

        {/* Dynamic Guided Hint (Shown when not 100%) */}
        {!isMinimized && nextTarget && !isComplete && (
          <button
            type="button"
            className="dock-hint-action-btn"
            onClick={() => handleNavigate(nextTarget)}
            title={`Hint: Explore "${nextTarget.label}" next`}
            aria-label={`Hint: Explore ${nextTarget.short}`}
          >
            <span className="hint-pulse-dot"></span>
            <i className="fa-solid fa-lightbulb text-gold hint-bulb"></i>
            <span className="hint-text-prefix">Hint:</span>
            <span className="hint-target-name">{nextTarget.short}</span>
            <i className="fa-solid fa-arrow-right hint-chevron"></i>
          </button>
        )}

        {/* 100% Celebration Badge (Shown when complete) */}
        {!isMinimized && isComplete && (
          <div className="dock-celebration-pill" title="All 7 subsections explored!">
            <i className="fa-solid fa-trophy text-gold"></i>
            <span>100% Complete</span>
          </div>
        )}



        {/* Minimize / Expand Toggle */}
        <button
          type="button"
          className="dock-toggle-btn"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? 'Expand exploration dock' : 'Minimize exploration dock'}
          title={isMinimized ? 'Expand' : 'Minimize'}
        >
          <i className={`fa-solid ${isMinimized ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>
    </>
  );
}
