import React, { useState } from 'react';

export default function ProductThinking() {
  const [activeConcept, setActiveConcept] = useState('Desirability');

  const conceptDetails = {
    Desirability: {
      title: 'Desirability (User Value)',
      tagline: 'Is it solving a core customer/operational pain point?',
      desc: 'Identifying the exact friction point for traders, portfolio managers, or back-office staff. Designing empathy maps, conducting JAD sessions, and ensuring the interface reduces cognitive overload during high-frequency market events.',
      tools: 'User Journey Maps, Mockups, Clickable Prototypes, Event Storming'
    },
    Feasibility: {
      title: 'Feasibility (Technical Fit)',
      tagline: 'Can our engineering teams construct it sustainably?',
      desc: 'Auditing existing React components, analyzing Postgres database constraint boundaries, verifying REST API payload limitations, and drafting developer-ready technical specs. Shubham bridges the gap by checking backend/frontend architecture early.',
      tools: 'Swagger Specs, SQL Queries, DB Schema Auditing, React Wireframes'
    },
    Viability: {
      title: 'Viability (Business ROI)',
      tagline: 'Does this feature align with strategic business outcomes?',
      desc: 'Quantifying features via RICE score prioritization. Does implementing this auto-matching custodian tool reduce settlement penalty fees? Ensuring our sprint cycles deliver maximum business value with minimum operational waste.',
      tools: 'RICE Score Sheets, MoSCoW Backlogs, ROI Modeling, KPI Trackers'
    }
  };

  const activeInfo = conceptDetails[activeConcept];

  return (
    <section id="product-thinking" style={{ background: 'rgba(11, 19, 43, 0.4)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Strategy & Vision</span>
          <h2 className="section-title">My <span>Product Thinking</span> Framework</h2>
          <p className="section-desc">
            Positioning as a future Product Owner. I evaluate every system requirement at the intersection of business strategy, user experience, and technical execution.
          </p>
        </div>

        <div className="product-thinking-grid">
          {/* Interactive Venn Diagram Widget */}
          <div className="venn-diagram-wrapper">
            <div className="venn-container">
              <button
                className={`venn-circle circle-desirability ${activeConcept === 'Desirability' ? 'active' : ''}`}
                onClick={() => setActiveConcept('Desirability')}
              >
                <span>Desirability</span>
              </button>
              <button
                className={`venn-circle circle-feasibility ${activeConcept === 'Feasibility' ? 'active' : ''}`}
                onClick={() => setActiveConcept('Feasibility')}
              >
                <span>Feasibility</span>
              </button>
              <button
                className={`venn-circle circle-viability ${activeConcept === 'Viability' ? 'active' : ''}`}
                onClick={() => setActiveConcept('Viability')}
              >
                <span>Viability</span>
              </button>
              <div className="venn-center-point">
                <span className="gold-star"><i className="fa-solid fa-star"></i></span>
              </div>
            </div>
            <p className="venn-hint-text">Click any segment in the diagram to inspect my approach.</p>
          </div>

          {/* Details Content Box */}
          <div className="product-details-card">
            <div className="concept-header">
              <span className="concept-badge"><i className="fa-solid fa-compass"></i> Strategy Vector</span>
              <h3 className="concept-title">{activeInfo.title}</h3>
              <p className="concept-tagline">"{activeInfo.tagline}"</p>
            </div>
            
            <p className="concept-desc-text">{activeInfo.desc}</p>

            <div className="concept-tools">
              <span className="tools-label">Methodologies & Tools:</span>
              <span className="tools-value text-gold">{activeInfo.tools}</span>
            </div>
          </div>
        </div>

        {/* Prioritization Models Grid */}
        <div className="prioritization-models-row">
          <div className="model-box">
            <h4><i className="fa-solid fa-scale-balanced text-gold"></i> RICE Scoring Prioritization</h4>
            <p>Every backlog ticket is computed quantitatively: **(Reach × Impact × Confidence) ÷ Effort**. Ensures developmental focus centers on high-impact business drivers rather than cosmetic updates.</p>
          </div>
          <div className="model-box">
            <h4><i className="fa-solid fa-arrows-spin text-cyan"></i> Agile Iteration Loop</h4>
            <p>Gathering feedback continuously. Validating features immediately through sprint reviews and customer demos. Adjusting specifications iteratively rather than relying on massive legacy specs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
