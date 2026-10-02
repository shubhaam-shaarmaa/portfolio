import React, { useState, useEffect } from 'react';
import CapitalMarketsCaseStudies from './CapitalMarketsCaseStudies';
import FeaturedWork from './FeaturedWork';

export default function SelectedWork() {
  const [activeWorkTab, setActiveWorkTab] = useState('case-study'); // 'case-study' | 'all-initiatives'

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#projects') {
        setActiveWorkTab('all-initiatives');
      } else if (hash === '#case-studies') {
        setActiveWorkTab('case-study');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="work" className="work-unified-section">
      <span id="projects" className="anchor-shim"></span>
      <span id="case-studies" className="anchor-shim"></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center mb-3">
          <div className="section-mono-tag">// selected_work/</div>
          <span className="section-subtitle">Execution & Enterprise Deliverables</span>
          <h2 className="section-title">
            Case Studies & <span>Systems Architecture</span>
          </h2>
          <p className="section-desc max-w-700">
            Real enterprise solutions spanning front-to-back Trade Lifecycle operations, middle-office reconciliation breaks, and production AI enablement.
          </p>

          {/* Unified Work Segment Toggle */}
          <div className="work-nav-segmented mt-3" role="tablist" aria-label="Selected Work Views">
            <button
              type="button"
              role="tab"
              aria-selected={activeWorkTab === 'case-study'}
              className={`segmented-tab ${activeWorkTab === 'case-study' ? 'active' : ''}`}
              onClick={() => setActiveWorkTab('case-study')}
            >
              <i className="fa-solid fa-chart-line text-gold"></i> Flagship Case Study: Trade Lifecycle
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeWorkTab === 'all-initiatives'}
              className={`segmented-tab ${activeWorkTab === 'all-initiatives' ? 'active' : ''}`}
              onClick={() => setActiveWorkTab('all-initiatives')}
            >
              <i className="fa-solid fa-layer-group text-cyan"></i> All Technical Initiatives (6)
            </button>
          </div>
        </div>

        {/* Dynamic Work Content */}
        <div className="work-content-display">
          {activeWorkTab === 'case-study' && (
            <div className="work-pane-fade">
              <CapitalMarketsCaseStudies isEmbedded={true} />
            </div>
          )}

          {activeWorkTab === 'all-initiatives' && (
            <div className="work-pane-fade">
              <FeaturedWork isEmbedded={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
