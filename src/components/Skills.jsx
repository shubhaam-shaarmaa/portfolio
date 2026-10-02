import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Capability Matrix</span>
          <h2 className="section-title">
            BA + AI <span>Competency Stack</span>
          </h2>
          <p className="section-desc max-w-700">
            A balanced techno-functional matrix combining modern AI engineering, deep Capital Markets domain knowledge, and enterprise agile delivery.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-card-icon">
                  <i className={cat.icon}></i>
                </span>
                <h3 className="skill-card-title">{cat.categoryName}</h3>
              </div>

              <div className="skill-pills-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    <i className="fa-solid fa-check text-cyan"></i> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
