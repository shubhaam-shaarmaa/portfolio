import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Achievements() {
  const [achieveFilter, setAchieveFilter] = useState('all');

  return (
    <section id="achievements">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Recognition</span>
          <h2 className="section-title">Achievements & <span>Certifications</span></h2>
          <p className="section-desc">
            Honors, professional domain certifications, and extracurricular milestones achieved during my career.
          </p>
        </div>

        <div className="achieve-tabs">
          <button className={`filter-btn ${achieveFilter === 'all' ? 'active' : ''}`} onClick={() => setAchieveFilter('all')}>All Highlights</button>
          <button className={`filter-btn ${achieveFilter === 'awards' ? 'active' : ''}`} onClick={() => setAchieveFilter('awards')}>Awards & Recognition</button>
          <button className={`filter-btn ${achieveFilter === 'certifications' ? 'active' : ''}`} onClick={() => setAchieveFilter('certifications')}>Domain & Tech Certifications</button>
          <button className={`filter-btn ${achieveFilter === 'extra' ? 'active' : ''}`} onClick={() => setAchieveFilter('extra')}>Extracurricular</button>
        </div>

        <div className="achieve-grid">
          {ACHIEVEMENTS_DATA.filter(item => achieveFilter === 'all' || item.category === achieveFilter).map((item, idx) => (
            <div key={idx} className="achieve-card">
              <div className="achieve-badge-icon">
                <i className={item.icon}></i>
              </div>
              <div className="achieve-content">
                <h3 className="achieve-title">{item.title}</h3>
                <div className="achieve-org">{item.org}</div>
                <p className="achieve-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
