import React from 'react';
import { EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Track Record</span>
          <h2 className="section-title">
            Enterprise Experience & <span>Impact</span>
          </h2>
          <p className="section-desc max-w-700">
            Proven track record of delivering mission-critical financial systems for global tier-1 asset management clients.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <strong>{exp.company}</strong> &nbsp;·&nbsp; <span className="text-gold">{exp.client}</span>
                    </div>
                  </div>
                  <span className="timeline-period badge-pill">{exp.period}</span>
                </div>

                <ul className="timeline-highlights">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>
                      <i className="fa-solid fa-arrow-right text-cyan"></i> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Awards Strip */}
        <div className="achievements-section mt-4">
          <h3 className="achievements-heading text-center">
            <i className="fa-solid fa-trophy text-gold"></i> Honors & Executive Recognitions
          </h3>
          <div className="achievements-grid mt-2">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon">
                  <i className={ach.icon}></i>
                </div>
                <div className="achievement-info">
                  <h4 className="achievement-title">{ach.title}</h4>
                  <p className="achievement-desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
