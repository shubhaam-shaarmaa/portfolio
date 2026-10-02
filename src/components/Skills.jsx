import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  const [skillFilter, setSkillFilter] = useState('all');
  const [skillQuery, setSkillQuery] = useState('');

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Core <span>Competencies</span></h2>
          <p className="section-desc">
            Explore my business engineering toolkit, domain knowledge, and systems analysis capabilities.
          </p>
        </div>

        <div className="skills-filter-wrapper">
          {/* Live Search */}
          <div className="skills-search-box">
            <i className="fa-solid fa-magnifying-glass skills-search-icon"></i>
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search any skill (e.g. BRD, SQL, Equities, SWIFT)..."
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="skills-tabs">
            <button className={`filter-btn ${skillFilter === 'all' ? 'active' : ''}`} onClick={() => setSkillFilter('all')}>All Domains</button>
            <button className={`filter-btn ${skillFilter === 'ba' ? 'active' : ''}`} onClick={() => setSkillFilter('ba')}>Business Analysis</button>
            <button className={`filter-btn ${skillFilter === 'domain' ? 'active' : ''}`} onClick={() => setSkillFilter('domain')}>Capital Markets</button>
            <button className={`filter-btn ${skillFilter === 'agile' ? 'active' : ''}`} onClick={() => setSkillFilter('agile')}>Product Ownership</button>
            <button className={`filter-btn ${skillFilter === 'tech' ? 'active' : ''}`} onClick={() => setSkillFilter('tech')}>Techno-Functional</button>
            <button className={`filter-btn ${skillFilter === 'tools' ? 'active' : ''}`} onClick={() => setSkillFilter('tools')}>Systems & Tools</button>
          </div>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.filter(item => skillFilter === 'all' || item.category === skillFilter).map((item, idx) => {
            const filteredSkills = item.skills.filter(s => s.toLowerCase().includes(skillQuery.toLowerCase()));
            if (skillQuery && filteredSkills.length === 0) return null;

            return (
              <div key={idx} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="skill-card-title">{item.categoryName}</h3>
                </div>
                <div className="tags-flex">
                  {(skillQuery ? filteredSkills : item.skills).map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
