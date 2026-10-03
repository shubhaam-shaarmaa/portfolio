import React, { useState } from 'react';

export const CONCEPTS_DATA = [
  {
    id: 'bento',
    num: '01',
    name: 'Bento Grid Command Dashboard',
    tagline: 'Linear / Apple Pro Style — High information density without visual clutter',
    image: './mockups/bento_ui.jpg',
    accentColor: 'var(--accent-gold)',
    accentClass: 'gold',
    icon: 'fa-solid fa-table-cells-large',
    footprint: '~1.5 Viewport Heights (65% shorter page length)',
    bestFor: 'Recruiters & Hiring Managers seeking instant overview with 1-click deep technical drawers',
    corePhilosophy: 'Ditch the long linear scroll entirely. Pack the entire portfolio into a high-density, interactive Bento Grid. The high-level executive cards are visible in one screen; clicking any tile smoothly triggers a full-height glass slide-over drawer with the complete technical specifications.',
    keyFeatures: [
      {
        title: 'Executive KPI Hero Tile',
        desc: 'Hero with 4+ years, Capital Markets focus, and AI capability chips in a tight top-left tile.'
      },
      {
        title: 'Interactive 7-Stage Flow Tile',
        desc: 'Compact visual lifecycle stepper with micro-indicators for desk actions and DTCC checkpoints.'
      },
      {
        title: 'Live Exception Triage Tile',
        desc: 'Interactive breaks resolution widget embedded directly in the grid without taking up a whole section.'
      },
      {
        title: 'Slide-Over Deep Spec Drawer',
        desc: 'Clicking any case study opens a slide-over panel for full Gherkin user stories, SQL schemas, and REST API contracts.'
      }
    ]
  },
  {
    id: 'workstation',
    num: '02',
    name: 'FinTech Workstation / OS Multi-Pane',
    tagline: 'Bloomberg / Trader Terminal Style — Emulates institutional middle-office systems',
    image: './mockups/workstation_ui.jpg',
    accentColor: 'var(--accent-cyan)',
    accentClass: 'cyan',
    icon: 'fa-solid fa-laptop-code',
    footprint: 'Single Viewport Application (Zero vertical page scrolling)',
    bestFor: 'Capital Markets Directors & Institutional Technology Leads who value domain credibility',
    corePhilosophy: 'Turns the portfolio into a professional financial engineering workstation. A persistent left icon rail/dock lets visitors switch between workspaces (Trade Lifecycle, AI Roadmap, Capabilities, Inquiries) while maintaining a split dual-pane work surface.',
    keyFeatures: [
      {
        title: 'Left Workflow Workspace (45%)',
        desc: 'Interactive visual workflow showing trade lifecycle stages, exception triage alerts, and timeline nodes.'
      },
      {
        title: 'Right Technical Inspector (55%)',
        desc: 'Tabbed developer workbench showing live JSON DTCC allocation messages, SQL queries, and FIX 4.4 tag mapping.'
      },
      {
        title: 'Persistent App Dock',
        desc: 'Quick icon rail for Executive Brief, Trade Lifecycle, AI Architecture, Capabilities, and Contact Terminal.'
      },
      {
        title: 'Desktop Workstation Feel',
        desc: 'Zero page scrolling; the recruiter interacts with an application rather than reading a static webpage.'
      }
    ]
  },
  {
    id: 'split',
    num: '03',
    name: 'Split-Pane Storyboard & Reactive Workbench',
    tagline: 'Stripe Docs / Vercel Style — Left-side narrative driving right-side live proof',
    image: './mockups/split_pane_ui.jpg',
    accentColor: 'var(--accent-gold)',
    accentClass: 'gold',
    icon: 'fa-solid fa-columns',
    footprint: '~2 Viewport Heights (Narrative scroll with sticky technical evidence)',
    bestFor: 'Engineering Leads & Product Heads who need to see code and business rationale simultaneously',
    corePhilosophy: 'Solves the dual-audience dilemma with a 2-column layout. The left column tells the executive story in clean, bite-sized cards; the right column is a sticky interactive workbench that reactively updates live schemas, Gherkin stories, and code snippets as the left side is navigated.',
    keyFeatures: [
      {
        title: 'Sticky Technical Workbench (Right 60%)',
        desc: 'Always visible code and schema editor with tabs for Gherkin Stories, PostgreSQL Schemas, DTCC T+1, and Simulator.'
      },
      {
        title: 'Synchronized Story Stepper (Left 40%)',
        desc: 'Clicking any trade stage or career milestone automatically syncs the code workbench to show relevant artifacts.'
      },
      {
        title: 'Zero Scroll Fatigue',
        desc: 'Recruiters read concise bullet points on the left while technical reviewers inspect the live workbench on the right.'
      },
      {
        title: 'Enterprise Documentation Aesthetic',
        desc: 'Clean, authoritative developer experience modeled after world-class developer docs.'
      }
    ]
  },
  {
    id: 'accordion',
    num: '04',
    name: 'Minimalist Focus Accordion Deck',
    tagline: 'Swiss Minimalist / Radix Style — Distraction-free single-focus capsules',
    image: './mockups/accordion_ui.jpg',
    accentColor: 'var(--accent-emerald)',
    accentClass: 'emerald',
    icon: 'fa-solid fa-bars-staggered',
    footprint: '~1 Viewport Initial State (Expands on demand, collapses others)',
    bestFor: 'Senior Executives & Management Consultants who prefer uncluttered, ultra-focused scanning',
    corePhilosophy: 'Swiss graphic design applied to technical portfolios. Starts with a clean, ultra-compact vertical stack of 4 capsules (Trade Lifecycle, AI Roadmap, Career Evolution, Contact). Only one capsule expands into its rich interactive canvas at a time, keeping the viewport permanently compact and focused.',
    keyFeatures: [
      {
        title: 'Persona Filter Bar',
        desc: 'Top header filter switches between Recruiter Focus, Hiring Manager, and Domain Architect view presets.'
      },
      {
        title: 'Single-Focus Accordion Mode',
        desc: 'Opening one section smoothly collapses the others, preventing the page from ever feeling long or overwhelming.'
      },
      {
        title: 'Rich Embedded Canvas',
        desc: 'Expanded capsules reveal the full interactive 7-stage flow, exception simulator, and Gherkin stories.'
      },
      {
        title: 'Ultra-Minimalist Aesthetic',
        desc: 'Deep obsidian backdrop, razor-thin borders, and subtle emerald/gold micro-indicators.'
      }
    ]
  },
  {
    id: 'canvas',
    num: '05',
    name: 'AI-Native Dynamic Canvas & Command Deck',
    tagline: 'Ayush Sharma 2.0 / Arc Browser Style — Conversational command bar with live canvas projector',
    image: './mockups/canvas_ui.jpg',
    accentColor: 'var(--accent-purple)',
    accentClass: 'purple',
    icon: 'fa-solid fa-terminal',
    footprint: '~1.5 Viewport Heights (Dynamic content projected on demand)',
    bestFor: 'Forward-Deployed AI & Modern Product Teams seeking cutting-edge interactivity and wow-factor',
    corePhilosophy: 'Extends the current Ayush Sharma interactive console into a full-fledged dynamic canvas. The user types or clicks command chips (e.g. // open_trade_lifecycle, // show_ai_roadmap); the dynamic canvas sheet below smoothly renders the requested interactive deliverable with an Executive vs Technical toggle.',
    keyFeatures: [
      {
        title: 'Top Interactive Command Console',
        desc: 'Interactive terminal with quick-action pills for instant navigation without searching through sections.'
      },
      {
        title: 'Dynamic Glowing Canvas Sheet',
        desc: 'Projects the requested deliverable (Trade Lifecycle, Gherkin specs, AI roadmap) with instant animation.'
      },
      {
        title: 'Dual Perspective Switcher',
        desc: 'Header toggle allows switching between high-level business ROI metrics and deep technical schemas.'
      },
      {
        title: 'AI-Native Wow Factor',
        desc: 'Feels like an AI agent workspace (Cursor / Vercel AI Playground) rather than a traditional static website.'
      }
    ]
  }
];

export default function UIConceptShowcase({
  activeConceptId,
  onSelectConcept,
  onCloseStudio,
  onFinalizeSelection
}) {
  const [selectedId, setSelectedId] = useState(activeConceptId || 'bento');
  const [isZoomed, setIsZoomed] = useState(false);

  const activeConcept = CONCEPTS_DATA.find((c) => c.id === selectedId) || CONCEPTS_DATA[0];

  const handleConceptChange = (id) => {
    setSelectedId(id);
    if (onSelectConcept) onSelectConcept(id);
  };

  return (
    <div className="ui-studio-wrapper">
      {/* Studio Header Bar */}
      <div className="ui-studio-header">
        <div className="ui-studio-header-left">
          <div className="ui-studio-badge">
            <i className="fa-solid fa-wand-magic-sparkles text-gold"></i> Concise UI Design Studio
          </div>
          <h2 className="ui-studio-title">
            Select Your <span>Preferred Concise UI</span>
          </h2>
          <p className="ui-studio-subtitle">
            5 distinct architectures to make the portfolio significantly more concise while preserving 100% of the content.
          </p>
        </div>

        <div className="ui-studio-header-actions">
          <button
            type="button"
            className="btn btn-outline-cyan"
            onClick={onCloseStudio}
            title="View current live portfolio"
          >
            <i className="fa-solid fa-arrow-left"></i> Back to Current View
          </button>
        </div>
      </div>

      {/* Concept Selector Pill Tabs */}
      <div className="ui-concept-tabs-row" role="tablist" aria-label="5 UI Concepts">
        {CONCEPTS_DATA.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={selectedId === c.id}
            className={`concept-tab-pill ${selectedId === c.id ? 'active' : ''}`}
            onClick={() => handleConceptChange(c.id)}
          >
            <span className="pill-num">{c.num}</span>
            <i className={`${c.icon} pill-icon`}></i>
            <span className="pill-name">{c.name}</span>
          </button>
        ))}
      </div>

      {/* Main Concept Detail Display */}
      <div className="ui-concept-main-card">
        {/* Concept Top Banner */}
        <div className="concept-card-top">
          <div className="concept-meta-left">
            <span className={`concept-number-badge badge-${activeConcept.accentClass}`}>
              OPTION {activeConcept.num}
            </span>
            <h3 className="concept-display-name">{activeConcept.name}</h3>
            <p className="concept-display-tagline">{activeConcept.tagline}</p>
          </div>

          <div className="concept-meta-right">
            <div className="concept-stat-box">
              <span className="stat-label">Page Footprint</span>
              <span className="stat-value text-emerald">{activeConcept.footprint}</span>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-finalize-concept"
              onClick={() => onFinalizeSelection(activeConcept)}
            >
              <i className="fa-solid fa-check-circle"></i> Finalize Option {activeConcept.num}
            </button>
          </div>
        </div>

        {/* Mockup Preview Visual */}
        <div className="concept-mockup-frame">
          <div className="mockup-frame-bar">
            <div className="mockup-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="mockup-frame-title">
              {activeConcept.name} — Interactive UI Mockup (16:9 Desktop Viewport)
            </span>
            <button
              type="button"
              className="btn-mockup-zoom"
              onClick={() => setIsZoomed(!isZoomed)}
              title="Toggle Fullscreen Zoom"
            >
              <i className={`fa-solid ${isZoomed ? 'fa-compress' : 'fa-expand'}`}></i>
              {isZoomed ? ' Exit Zoom' : ' Fullscreen Zoom'}
            </button>
          </div>

          <div className={`mockup-image-container ${isZoomed ? 'zoomed' : ''}`}>
            <img
              src={activeConcept.image}
              alt={`${activeConcept.name} UI Mockup`}
              className="mockup-img"
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <div className="mockup-caption-bar">
              <i className="fa-solid fa-circle-info text-cyan"></i> Click image or zoom button to expand to full resolution
            </div>
          </div>
        </div>

        {/* Architectural Breakdown Grid */}
        <div className="concept-breakdown-grid mt-4">
          <div className="breakdown-col-philosophy">
            <h4 className="breakdown-col-heading">
              <i className="fa-solid fa-compass text-gold"></i> Core UX Philosophy
            </h4>
            <p className="philosophy-text">{activeConcept.corePhilosophy}</p>

            <div className="best-for-callout mt-3">
              <span className="callout-label">
                <i className="fa-solid fa-bullseye text-cyan"></i> Best Suited For:
              </span>
              <p className="callout-text">{activeConcept.bestFor}</p>
            </div>

            <div className="finalize-prompt-box mt-3">
              <h5>Ready to build this design?</h5>
              <p>We will implement this exact concise layout with 100% of your real trade lifecycle data, Gherkin user stories, and SQL schemas.</p>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => onFinalizeSelection(activeConcept)}
              >
                Choose Option {activeConcept.num} & Build Layout
              </button>
            </div>
          </div>

          <div className="breakdown-col-features">
            <h4 className="breakdown-col-heading">
              <i className="fa-solid fa-layer-group text-cyan"></i> How It Makes Content Concise
            </h4>
            <div className="features-list">
              {activeConcept.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="feature-item-card">
                  <div className="feature-item-header">
                    <span className="feature-item-num">0{fIdx + 1}</span>
                    <strong className="feature-item-title">{feat.title}</strong>
                  </div>
                  <p className="feature-item-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Comparison Quick Switcher */}
      <div className="ui-studio-footer-strip mt-4">
        <span className="strip-title">Compare All 5 Options:</span>
        <div className="strip-pills">
          {CONCEPTS_DATA.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`strip-pill-btn ${selectedId === c.id ? 'active' : ''}`}
              onClick={() => handleConceptChange(c.id)}
            >
              Option {c.num}: {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
