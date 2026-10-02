import React, { useState, useEffect } from 'react';

export default function RecruiterDock({ activeSection }) {
  const [visitedSections, setVisitedSections] = useState(new Set(['hero']));
  const [isMinimized, setIsMinimized] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: 'fa-house' },
    { id: 'ask', label: 'Ask', icon: 'fa-terminal' },
    { id: 'work', label: 'Work', icon: 'fa-briefcase' },
    { id: 'journey', label: 'Journey', icon: 'fa-route' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
  ];

  useEffect(() => {
    if (activeSection) {
      setVisitedSections((prev) => {
        const next = new Set(prev);
        next.add(activeSection);
        return next;
      });
    }
  }, [activeSection]);

  const percent = Math.min(100, Math.round((visitedSections.size / sections.length) * 100));

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`recruiter-dock ${isMinimized ? 'dock-minimized' : ''}`}
      style={{ '--dock-pct': `${percent}%` }}
      role="region"
      aria-label="Recruiter Exploration Progress Dock"
    >
      <div className="dock-progress-wrap">
        <div className="dock-progress-ring" title={`${percent}% Explored`}></div>
        <div className="dock-progress-text">
          Explored: <span>{percent}%</span> ({visitedSections.size}/{sections.length})
        </div>
      </div>

      {!isMinimized && (
        <div className="dock-nav-pills">
          {sections.map((sec) => {
            const isVisited = visitedSections.has(sec.id);
            const isActive = activeSection === sec.id;

            return (
              <button
                key={sec.id}
                type="button"
                className={`dock-pill ${isActive ? 'active' : ''} ${isVisited ? 'visited' : ''}`}
                onClick={() => scrollTo(sec.id)}
                title={`Jump to ${sec.label}`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      )}

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
  );
}
