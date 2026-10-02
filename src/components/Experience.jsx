import React, { useState } from 'react';
import { BA_RESPONSIBILITIES, SYSTEMS_RESPONSIBILITIES } from '../data/portfolioData';

export default function Experience() {
  const [roleTab, setRoleTab] = useState('all');

  return (
    <section id="experience" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <p className="section-desc">
            Direct timeline at Infosys supporting the premier global investment firm Capital Group Companies.
          </p>
        </div>

        <div className="exp-main-card">
          <div className="exp-header">
            <div>
              <h3 className="company-title">Infosys Ltd. <span>| Senior Associate Consultant</span></h3>
              <div className="role-subtitle">Client: Capital Group Companies (USA)</div>
            </div>
            <div className="exp-period">
              <i className="fa-regular fa-calendar-check"></i> June 2022 – Present (4 Years)
            </div>
          </div>

          <div className="client-desc-box">
            <strong>Partnering with Capital Group:</strong> Capital Group is one of the world's largest investment managers ($2.6T+ AUM). Operating as a Senior Techno-Functional Consultant, I coordinate business goals with engineering squads, quality assurance, compliance desks, and third-party custodians to deliver zero-defect systems.
          </div>

          {/* Cross-functional Interactive Switcher */}
          <div className="role-toggle-bar">
            <button
              className={`role-tab-btn ${roleTab === 'all' ? 'active-all' : ''}`}
              onClick={() => setRoleTab('all')}
            >
              <i className="fa-solid fa-layer-group"></i> All Metrics
            </button>
            <button
              className={`role-tab-btn ${roleTab === 'ba' ? 'active-ba' : ''}`}
              onClick={() => setRoleTab('ba')}
            >
              <i className="fa-solid fa-briefcase"></i> Systems & BA Role
            </button>
            <button
              className={`role-tab-btn ${roleTab === 'systems' ? 'active-fe' : ''}`}
              onClick={() => setRoleTab('systems')}
            >
              <i className="fa-solid fa-people-arrows"></i> Cross-team & Systems Sync
            </button>
          </div>

          <div className="resp-grid">
            {(roleTab === 'all' || roleTab === 'ba') && BA_RESPONSIBILITIES.map((item, i) => (
              <div key={`ba-${i}`} className="resp-item">
                <div className="resp-icon resp-icon-ba">
                  <i className={item.icon}></i>
                </div>
                <div className="resp-text">
                  {item.text}
                  <span className="resp-tag tag-ba">{item.tag}</span>
                </div>
              </div>
            ))}

            {(roleTab === 'all' || roleTab === 'systems') && SYSTEMS_RESPONSIBILITIES.map((item, i) => (
              <div key={`systems-${i}`} className="resp-item">
                <div className="resp-icon resp-icon-fe">
                  <i className={item.icon}></i>
                </div>
                <div className="resp-text">
                  {item.text}
                  <span className="resp-tag tag-fe">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
