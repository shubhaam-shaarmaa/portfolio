import React from 'react';
import { CORE_CAPABILITIES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="capabilities" className="capabilities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Competency Matrix</span>
          <h2 className="section-title">
            Core <span>Capabilities</span>
          </h2>
          <p className="section-desc max-w-700">
            A balanced techno-functional matrix: business analysis rigor, deep Capital Markets domain context, hands-on software engineering, and active AI enablement.
          </p>
        </div>

        {/* 4 Major Capability Areas Grid */}
        <div className="capabilities-grid">
          {CORE_CAPABILITIES.map((cap) => {
            const isAi = cap.id === 'ai';

            return (
              <div key={cap.id} className={`capability-card cap-${cap.accent} ${isAi ? 'capability-card-ai' : ''}`}>
                <div className="capability-card-header">
                  <div className={`cap-icon-box bg-${cap.accent}`}>
                    <i className={cap.icon}></i>
                  </div>
                  <div>
                    <h3 className="cap-title">{cap.category}</h3>
                    <p className="cap-desc">{cap.description}</p>
                  </div>
                </div>

                {!isAi ? (
                  <div className="cap-tags-wrap">
                    {cap.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cap-tag">
                        <i className={`fa-solid fa-check text-${cap.accent}`}></i>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  /* AI Capability: Strictly Partitioned into Current vs Building */
                  <div className="cap-ai-split">
                    <div className="ai-subgroup ai-subgroup-current">
                      <div className="ai-subgroup-title">
                        <i className="fa-solid fa-circle-check text-emerald"></i>
                        <span>{cap.currentSubtitle}</span>
                      </div>
                      <div className="cap-tags-wrap">
                        {cap.currentSkills.map((cSkill, csIdx) => (
                          <span key={csIdx} className="cap-tag tag-current">
                            <i className="fa-solid fa-check text-emerald"></i>
                            <span>{cSkill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="ai-subgroup ai-subgroup-building mt-2">
                      <div className="ai-subgroup-title">
                        <i className="fa-solid fa-hammer text-purple"></i>
                        <span>{cap.buildingSubtitle}</span>
                      </div>
                      <div className="cap-tags-wrap">
                        {cap.buildingSkills.map((bSkill, bsIdx) => (
                          <span key={bsIdx} className="cap-tag tag-building">
                            <i className="fa-solid fa-arrow-trend-up text-purple"></i>
                            <span>{bSkill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
