import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import avatarImg from '../assets/shubham_avatar.jpg';
import resumePdf from '../assets/Shubham_Sharma_Resume.pdf';

export const COMMANDS = [
  { id: 'trade', cmd: '// trade_lifecycle', label: 'Trade Lifecycle & T+1 Spec', icon: 'fa-bolt-lightning', sheet: 'trade', badge: 'Flagship' },
  { id: 'projects', cmd: '// initiatives', label: 'Technical Initiatives (6)', icon: 'fa-layer-group', sheet: 'initiatives', badge: 'Deliverables' },
  { id: 'journey', cmd: '// career_path', label: 'Career Journey & Skills', icon: 'fa-route', sheet: 'career', badge: '2022–Present' },
  { id: 'ai', cmd: '// ai_roadmap', label: 'AI Roadmap & Systems', icon: 'fa-brain', sheet: 'ai', badge: 'GenAI' },
  { id: 'credentials', cmd: '// credentials', label: 'Positioning & Certs', icon: 'fa-award', sheet: 'credentials', badge: 'Consulting' },
  { id: 'ask', cmd: '// ask_terminal', label: 'Ask Shubham Terminal', icon: 'fa-terminal', sheet: 'terminal', badge: 'Interactive' },
  { id: 'contact', cmd: '// contact_shubham', label: 'Direct Message Form', icon: 'fa-paper-plane', sheet: 'contact', badge: 'shub.tech10' }
];

export default function CommandDeck({ activeSheet, onSelectSheet }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = COMMANDS.filter(c =>
    c.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="command-deck-section">
      <div className="container">
        {/* System Terminal Header Bar */}
        <div className="deck-system-bar">
          <div className="system-bar-left">
            <span className="sys-prompt-label">
              <i className="fa-solid fa-terminal text-cyan"></i> [shubham@portfolio ~]
            </span>
          </div>

          <div className="system-bar-right">
            <span className="system-badge-mono">
              <i className="fa-solid fa-layer-group text-gold"></i> Domain Consulting × Modern Software Engineering × AI
            </span>
          </div>
        </div>

        {/* Hero Profile & Value Proposition Grid */}
        <div className="deck-hero-card">
          <div className="deck-hero-grid">
            {/* Left: Avatar & Quick Profile */}
            <div className="deck-avatar-col">
              <div className="deck-avatar-frame">
                <img
                  src={avatarImg}
                  alt={PERSONAL_INFO.name}
                  className="deck-avatar-img"
                />
                <div className="avatar-online-badge" title="Actively Open for Opportunities">
                  <span className="pulse-ring"></span>
                  <span className="online-dot"></span>
                </div>
              </div>
              <div className="deck-avatar-meta">
                <span className="deck-role-badge">
                  <i className="fa-solid fa-briefcase text-gold"></i> Infosys Senior Associate Consultant
                </span>
                <span className="deck-location-text">
                  <i className="fa-solid fa-location-dot text-cyan"></i> {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Center: Identity, Headlines, Credibility Hook */}
            <div className="deck-identity-col">
              <h1 className="deck-name-title">
                {PERSONAL_INFO.name}
                <span className="deck-dot">.</span>
              </h1>
              <h2 className="deck-role-title">
                {PERSONAL_INFO.headline}
              </h2>
              <p className="deck-role-sub">
                {PERSONAL_INFO.secondaryHeadline}
              </p>

              <p className="deck-bio-hook">
                Bridging business strategy, Capital Markets domain operations, and engineering squads to translate complex requirements into practical digital solutions.
              </p>

              {/* Action Buttons */}
              <div className="deck-cta-row">
                <a
                  href={resumePdf}
                  download="Shubham_Sharma_Resume.pdf"
                  className="btn btn-primary btn-deck-cta"
                  id="deck-download-resume"
                >
                  <i className="fa-solid fa-download"></i> Download Resume
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn btn-outline-gold btn-deck-cta"
                  id="deck-email"
                >
                  <i className="fa-solid fa-envelope"></i> shub.tech10@gmail.com
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cyan btn-deck-cta"
                  id="deck-linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-purple btn-deck-cta"
                  id="deck-github"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>

            {/* Right: Truthful Enterprise Credibility Metrics */}
            <div className="deck-metrics-col">
              <div className="metrics-box-grid">
                <div className="metric-cell cell-gold">
                  <span className="metric-cell-val">4+ Years</span>
                  <span className="metric-cell-lbl">Enterprise Experience</span>
                  <span className="metric-cell-sub">Infosys Financial Services</span>
                </div>

                <div className="metric-cell cell-cyan">
                  <span className="metric-cell-val">US Investment</span>
                  <span className="metric-cell-lbl">Client Exposure</span>
                  <span className="metric-cell-sub">Asset Mgmt Operations</span>
                </div>

                <div className="metric-cell cell-emerald">
                  <span className="metric-cell-val">78% Reduction</span>
                  <span className="metric-cell-lbl">Manual Break Touches</span>
                  <span className="metric-cell-sub">Automated STP Pre-Clearing</span>
                </div>

                <div className="metric-cell cell-purple">
                  <span className="metric-cell-val">99.9% T+1</span>
                  <span className="metric-cell-lbl">DTCC Affirmation</span>
                  <span className="metric-cell-sub">Zero Cut-off Penalty Breaks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Command Deck Interactive Navigation Bar */}
        <div className="deck-command-bar">
          <div className="command-bar-top">
            <div className="command-bar-title">
              <i className="fa-solid fa-terminal text-cyan"></i>
              <span>Interactive Command Deck:</span>
              <span className="text-dim text-xs">Select any command chip to project live artifacts onto the Dynamic Canvas</span>
            </div>

            <div className="command-search-wrap">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                className="command-search-input"
                placeholder="Filter commands (e.g. trade, ai, sql)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Filter command deck"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>

          {/* Clickable Command Chips */}
          <div className="command-chips-grid" role="tablist" aria-label="Command Deck Sheets">
            {filteredCommands.map((c) => {
              const isActive = activeSheet === c.sheet;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`command-chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSheet(c.sheet)}
                >
                  <span className="chip-cmd-mono">{c.cmd}</span>
                  <span className="chip-label-row">
                    <i className={`fa-solid ${c.icon}`}></i>
                    <span className="chip-title">{c.label}</span>
                  </span>
                  <span className="chip-badge">{c.badge}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
