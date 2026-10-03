import React, { useState } from 'react';

// Child components preserving 100% of real portfolio deliverables
import CapitalMarketsCaseStudies from './CapitalMarketsCaseStudies';
import FeaturedWork from './FeaturedWork';
import CareerJourney from './CareerJourney';
import Skills from './Skills';
import AiJourney from './AiJourney';
import ProfessionalIdentity from './ProfessionalIdentity';
import EngineeringFoundation from './EngineeringFoundation';
import Certifications from './Certifications';
import AskShubham from './AskShubham';
import Contact from './Contact';
import { DYNAMIC_EXPERIENCE_TEXT } from '../data/portfolioData';

export const CANVAS_SHEETS = [
  { id: 'trade', num: '01', title: 'Trade Lifecycle & T+1 Spec', short: 'Trade Spec', icon: 'fa-bolt-lightning', fileTag: 'trade_lifecycle_spec.json', accent: 'gold' },
  { id: 'initiatives', num: '02', title: 'Technical Initiatives (6)', short: 'Initiatives', icon: 'fa-layer-group', fileTag: 'technical_initiatives.json', accent: 'cyan' },
  { id: 'career', num: '03', title: 'Career & Capabilities', short: 'Career & Skills', icon: 'fa-route', fileTag: 'career_and_capabilities.json', accent: 'emerald' },
  { id: 'ai', num: '04', title: 'AI Roadmap & Systems', short: 'AI Systems', icon: 'fa-brain', fileTag: 'ai_architecture_roadmap.json', accent: 'purple' },
  { id: 'credentials', num: '05', title: 'Positioning & Credentials', short: 'Credentials', icon: 'fa-award', fileTag: 'positioning_and_certs.json', accent: 'gold' },
  { id: 'terminal', num: '06', title: 'Ask Shubham Terminal', short: 'Ask Terminal', icon: 'fa-terminal', fileTag: 'ask_shubham_cli.sh', accent: 'cyan' },
  { id: 'contact', num: '07', title: 'Direct Contact Engine', short: 'Contact', icon: 'fa-paper-plane', fileTag: 'direct_contact_form.json', accent: 'emerald' }
];

export default function DynamicCanvasSheet({
  activeSheet = 'trade',
  onSelectSheet,
  triggerToast
}) {
  const currentSheet = CANVAS_SHEETS.find((s) => s.id === activeSheet) || CANVAS_SHEETS[0];
  const currentIndex = CANVAS_SHEETS.findIndex((s) => s.id === (currentSheet ? currentSheet.id : 'trade'));
  const prevSheet = CANVAS_SHEETS[(currentIndex - 1 + CANVAS_SHEETS.length) % CANVAS_SHEETS.length];
  const nextSheet = CANVAS_SHEETS[(currentIndex + 1) % CANVAS_SHEETS.length];

  return (
    <section id="canvas-workspace" className="dynamic-canvas-section">
      <div className="container">
        {/* Glow Frame Wrapper */}
        <div className="dynamic-canvas-frame">
          {/* Active Canvas Body */}
          <div className="canvas-body-viewport">
            {/* Sheet 1: Flagship Trade Lifecycle & T+1 Settlement */}
            {activeSheet === 'trade' && (
              <div className="canvas-pane-wrapper fade-in" id="work">
                <span id="case-studies" className="anchor-shim"></span>
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// flagship_case_study.spec</div>
                  <h3 className="pane-title">
                    Institutional Trade Lifecycle & <span>Middle-Office Optimization</span>
                  </h3>
                  <p className="pane-desc">
                    Comprehensive front-to-back capital markets workflow: 7-stage trade stepper, DTCC T+1 affirmative settlement, pre-clearing rules, and middle-office exception resolver.
                  </p>
                </div>
                <CapitalMarketsCaseStudies isEmbedded={true} />
              </div>
            )}

            {/* Sheet 2: Technical Initiatives & Projects */}
            {activeSheet === 'initiatives' && (
              <div className="canvas-pane-wrapper fade-in" id="projects">
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// technical_deliverables_repository/</div>
                  <h3 className="pane-title">
                    Technical Initiatives & <span>Execution Artifacts (6)</span>
                  </h3>
                  <p className="pane-desc">
                    Production systems, user stories, SQL reconciliation scripts, REST API contracts, and AI-enabled document research tools.
                  </p>
                </div>
                <FeaturedWork isEmbedded={true} />
              </div>
            )}

            {/* Sheet 3: Career Progression & Core Capabilities */}
            {activeSheet === 'career' && (
              <div className="canvas-pane-wrapper fade-in" id="journey">
                <span id="skills" className="anchor-shim"></span>
                <span id="capabilities" className="anchor-shim"></span>
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// career_progression_and_capabilities/</div>
                  <h3 className="pane-title">
                    Career Trajectory & <span>Core Capabilities</span>
                  </h3>
                  <p className="pane-desc">
                    {DYNAMIC_EXPERIENCE_TEXT} Infosys progression from full-stack systems engineering to Financial Services domain consulting, techno-functional analysis, and structured AI enablement.
                  </p>
                </div>
                <div className="canvas-stack-block">
                  <CareerJourney isEmbedded={true} />
                </div>
                <div className="canvas-stack-block mt-4">
                  <Skills isEmbedded={true} />
                </div>
              </div>
            )}

            {/* Sheet 4: AI Roadmap & Systems Architecture */}
            {activeSheet === 'ai' && (
              <div className="canvas-pane-wrapper fade-in" id="ai-journey">
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// production_ai_architecture_spec/</div>
                  <h3 className="pane-title">
                    AI Roadmap & <span>Enterprise Systems Architecture</span>
                  </h3>
                  <p className="pane-desc">
                    Building toward production AI: RAG pipelines, autonomous agents, Model Context Protocol (MCP), LLMOps, and model routing gateways.
                  </p>
                </div>
                <AiJourney isEmbedded={true} />
              </div>
            )}

            {/* Sheet 5: Positioning, Engineering Foundation & Certifications */}
            {activeSheet === 'credentials' && (
              <div className="canvas-pane-wrapper fade-in" id="identity">
                <span id="credentials" className="anchor-shim"></span>
                <span id="engineering" className="anchor-shim"></span>
                <span id="certifications" className="anchor-shim"></span>
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// positioning_and_engineering_foundation/</div>
                  <h3 className="pane-title">
                    Professional Identity & <span>Engineering Foundation</span>
                  </h3>
                  <p className="pane-desc">
                    Operating at the critical intersection of business requirements, Capital Markets domain depth, modern software engineering, and industry credentials.
                  </p>
                </div>
                <div className="canvas-stack-block">
                  <ProfessionalIdentity isEmbedded={true} />
                </div>
                <div className="canvas-stack-block mt-4">
                  <EngineeringFoundation isEmbedded={true} />
                </div>
                <div className="canvas-stack-block mt-4">
                  <Certifications isEmbedded={true} />
                </div>
              </div>
            )}

            {/* Sheet 6: Ask Shubham Interactive Terminal */}
            {activeSheet === 'terminal' && (
              <div className="canvas-pane-wrapper fade-in" id="ask">
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// ask_shubham.exe</div>
                  <h3 className="pane-title">
                    Interactive Q&A <span>Terminal Console</span>
                  </h3>
                  <p className="pane-desc">
                    Skip the biography. Ask direct questions regarding consulting open roles, middle-office trade lifecycle depth, engineering foundations, and AI enablement.
                  </p>
                </div>
                <AskShubham isEmbedded={true} />
              </div>
            )}

            {/* Sheet 7: Direct Contact Engine */}
            {activeSheet === 'contact' && (
              <div className="canvas-pane-wrapper fade-in" id="contact">
                <div className="canvas-pane-intro">
                  <div className="pane-mono-header">// direct_communications_gateway/</div>
                  <h3 className="pane-title">
                    Direct Contact & <span>Role Opportunities</span>
                  </h3>
                  <p className="pane-desc">
                    Send a direct message forwarded to shub.tech10@gmail.com with zero intermediaries.
                  </p>
                </div>
                <Contact triggerToast={triggerToast} isEmbedded={true} />
              </div>
            )}
          </div>

          {/* Canvas Bottom Navigation Rail (Clean Streamlined Paging) */}
          <div className="canvas-bottom-strip">
            <span className="canvas-strip-left">
              <i className="fa-solid fa-code-fork text-gold"></i> ACTIVE DELIVERABLE: <strong>{currentSheet.title}</strong>
            </span>

            <div className="canvas-strip-actions">
              <button
                type="button"
                className="strip-nav-btn"
                onClick={() => onSelectSheet(prevSheet.id)}
                title={`Navigate to previous deliverable: ${prevSheet.title}`}
              >
                <i className="fa-solid fa-arrow-left"></i> Prev: {prevSheet.short}
              </button>
              <button
                type="button"
                className="strip-nav-btn strip-nav-primary"
                onClick={() => onSelectSheet(nextSheet.id)}
                title={`Navigate to next deliverable: ${nextSheet.title}`}
              >
                Next: {nextSheet.short} <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
