import React, { useState, useEffect } from 'react';
import CareerJourney from './CareerJourney';
import Skills from './Skills';
import EngineeringFoundation from './EngineeringFoundation';
import AiJourney from './AiJourney';
import ProfessionalIdentity from './ProfessionalIdentity';
import Certifications from './Certifications';

export default function JourneyAndCapabilities() {
  const [activeTab, setActiveTab] = useState('progression'); // 'progression' | 'skills' | 'engineering-ai' | 'credentials'

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#skills' || hash === '#capabilities') {
        setActiveTab('skills');
      } else if (hash === '#engineering' || hash === '#ai-journey') {
        setActiveTab('engineering-ai');
      } else if (hash === '#identity' || hash === '#certifications') {
        setActiveTab('credentials');
      } else if (hash === '#journey' || hash === '#progression') {
        setActiveTab('progression');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const tabs = [
    {
      id: 'progression',
      icon: 'fa-route text-gold',
      label: 'Career Progression (2022–Present)'
    },
    {
      id: 'skills',
      icon: 'fa-layer-group text-cyan',
      label: 'Core Capabilities & Skills'
    },
    {
      id: 'engineering-ai',
      icon: 'fa-laptop-code text-purple',
      label: 'Engineering & AI Architecture'
    },
    {
      id: 'credentials',
      icon: 'fa-award text-emerald',
      label: 'Positioning & Certifications'
    }
  ];

  return (
    <section id="journey" className="journey-unified-section">
      <span id="identity" className="anchor-shim"></span>
      <span id="capabilities" className="anchor-shim"></span>
      <span id="ai-journey" className="anchor-shim"></span>
      <span id="engineering" className="anchor-shim"></span>
      <span id="certifications" className="anchor-shim"></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center mb-3">
          <div className="section-mono-tag">// evolution_and_depth/</div>
          <span className="section-subtitle">Progressive Trajectory & Technical Depth</span>
          <h2 className="section-title">
            Journey & <span>Core Capabilities</span>
          </h2>
          <p className="section-desc max-w-700">
            One continuous professional progression: from software engineering foundations to Financial Services domain consulting, techno-functional business analysis, and AI enablement.
          </p>

          {/* Interactive Multi-View Selector Tabs */}
          <div className="journey-segmented-nav mt-3" role="tablist" aria-label="Journey & Capabilities Views">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`segmented-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Panels */}
        <div className="journey-tab-content">
          {activeTab === 'progression' && (
            <div className="work-pane-fade">
              <CareerJourney isEmbedded={true} />
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="work-pane-fade">
              <Skills isEmbedded={true} />
            </div>
          )}

          {activeTab === 'engineering-ai' && (
            <div className="work-pane-fade">
              <EngineeringFoundation isEmbedded={true} />
              <div className="mt-4">
                <AiJourney isEmbedded={true} />
              </div>
            </div>
          )}

          {activeTab === 'credentials' && (
            <div className="work-pane-fade">
              <ProfessionalIdentity isEmbedded={true} />
              <div className="mt-4">
                <Certifications isEmbedded={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
