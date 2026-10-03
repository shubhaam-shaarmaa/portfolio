import React from 'react';
import { AI_JOURNEY_HEADER, AI_ROADMAP_PROJECTS, AI_ARCHITECTURE_SPEC } from '../data/aiRoadmapData';

export default function AiJourney({ isEmbedded = false }) {
  const ContentWrapper = isEmbedded ? 'div' : 'section';
  const containerClass = isEmbedded ? 'embedded-ai-wrap' : 'ai-journey-section';

  return (
    <ContentWrapper id={isEmbedded ? undefined : 'ai-journey'} className={containerClass}>
      <div className={isEmbedded ? '' : 'container'}>
        {/* Section Header (omitted when embedded) */}
        {!isEmbedded && (
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Capability Evolution</span>
            <h2 className="section-title">
              AI Journey & <span>Roadmap</span>
            </h2>
            <p className="section-desc max-w-700">
              {AI_JOURNEY_HEADER.subtitle} {AI_JOURNEY_HEADER.description}
            </p>
          </div>
        )}

        {/* Roadmap Title Banner (only when standalone) */}
        {!isEmbedded && (
          <div className="ai-roadmap-header-banner">
            <div className="roadmap-icon-box">
              <i className="fa-solid fa-microchip text-purple"></i>
            </div>
            <div>
              <h3 className="roadmap-main-title">{AI_JOURNEY_HEADER.roadmapTitle}</h3>
              <span className="roadmap-main-subtitle">{AI_JOURNEY_HEADER.roadmapSubtitle}</span>
            </div>
          </div>
        )}

        {/* Visual Progression Pipeline: RAG -> AGENTS -> MCP -> EVALS -> LLMOPS -> FINE-TUNING -> SECURITY -> MODEL ROUTING */}
        <div className="ai-progression-pipeline mt-3">
          <div className="pipeline-track">
            {AI_ROADMAP_PROJECTS.map((proj) => (
              <div key={proj.step} className="pipeline-node">
                <span className="node-step">0{proj.step}</span>
                <span className="node-cap">{proj.capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Project Capability Mapping Grid */}
        <div className="ai-cards-grid mt-4">
          {AI_ROADMAP_PROJECTS.map((item) => {
            const isBuilding = item.status === 'CURRENTLY BUILDING';

            return (
              <div
                key={item.step}
                className={`ai-project-card ${isBuilding ? 'card-active-building' : 'card-planned'}`}
              >
                <div className="ai-card-top">
                  <div className="ai-card-step-badge">
                    <span className="badge-step-num">Step {item.step}</span>
                    <span className="badge-cap-name">{item.capability}</span>
                  </div>
                  <span className={`ai-status-pill ${isBuilding ? 'pill-building' : 'pill-planned'}`}>
                    {isBuilding && <span className="status-pulse-dot"></span>}
                    {item.status}
                  </span>
                </div>

                <div className="ai-card-meta">
                  <div className="ai-mapping-tag">
                    <i className="fa-solid fa-arrow-right-arrow-left text-dim"></i> {item.mapping}
                  </div>
                  <h4 className="ai-project-name">{item.projectTitle}</h4>
                  <span className="ai-deliverable-type">{item.deliverableType}</span>
                </div>

                <p className="ai-project-purpose">{item.purpose}</p>

                <div className="ai-card-milestone">
                  <span className="milestone-lbl">
                    <i className="fa-solid fa-flag-checkered text-gold"></i> Key Deliverable:
                  </span>
                  <p className="milestone-text">{item.keyMilestone}</p>
                </div>

                <div className="ai-card-footer">
                  <span className="planned-stack-lbl">Planned Stack:</span>
                  <div className="planned-stack-pills">
                    {item.plannedStack.map((tech, tIdx) => (
                      <span key={tIdx} className="stack-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI System Architecture Section: "AI Architecture — Building Progressively" */}
        <div className="ai-architecture-container mt-4">
          <div className="arch-header">
            <div className="arch-badge">
              <i className="fa-solid fa-sitemap text-purple"></i> {AI_ARCHITECTURE_SPEC.label}
            </div>
            <h3 className="arch-title">{AI_ARCHITECTURE_SPEC.title}</h3>
            <p className="arch-note">{AI_ARCHITECTURE_SPEC.note}</p>
          </div>

          <div className="arch-diagram-grid mt-3">
            {AI_ARCHITECTURE_SPEC.layers.map((layer, idx) => (
              <div key={idx} className="arch-layer-card">
                <div className="arch-layer-header">
                  <span className="arch-layer-index">L0{idx + 1}</span>
                  <i className={`${layer.icon} text-purple`}></i>
                  <h5 className="arch-layer-title">{layer.name}</h5>
                </div>
                <div className="arch-components-wrap">
                  {layer.components.map((comp, cIdx) => (
                    <div key={cIdx} className="arch-component-box">
                      <span className="comp-dot"></span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="arch-disclaimer-strip mt-3">
            <i className="fa-solid fa-circle-info text-dim"></i>
            <span>
              Credibility Note: This diagram represents a structured engineering roadmap currently being assembled capability by capability. Active development is underway on Step 01 (BFSI Research Assistant RAG Pipeline).
            </span>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
