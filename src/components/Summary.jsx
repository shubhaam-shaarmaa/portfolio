import React from 'react';

export default function Summary() {
  const capabilities = [
    {
      icon: 'fa-solid fa-file-signature',
      title: 'Requirements Engineering',
      tagline: 'Translating business objectives into actionable functional specifications.',
      color: 'var(--accent-gold)',
      bullets: [
        'Reduced project launch ambiguity through structured BRD and FSD documents.',
        'Accelerated development velocity by detailing Jira backlogs with Gherkin scenarios.',
        'Prevented integration delays through process mapping (AS-IS / TO-BE) gap models.',
        'Maintained alignment by facilitating cross-functional workshops with product heads.'
      ],
      outcome: 'Result: 100% requirements trace alignment on compliance sprints.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Retirement & Asset Solutions',
      tagline: 'Subject matter expertise in buy-side operations and client recordkeeping.',
      color: 'var(--accent-cyan)',
      bullets: [
        'Mapped contribution boundaries to enforce SIMPLE IRA statutory compliance rules.',
        'Designed synchronization logic to update the central Recordkeeping Database (RKD).',
        'Built automated Net Asset Value validation checks to secure ledger postings.',
        'Optimized buy-side rebalancing checks by mapping DTCC clearing interfaces.'
      ],
      outcome: 'Result: Automated rails protected $2.6T AUM platform updates.'
    },
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Interface & Data Mapping',
      tagline: 'Decoupling distributed databases and APIs via clear integration contracts.',
      color: 'var(--accent-cyan)',
      bullets: [
        'Prevented database lock timeouts by designing clean PostgreSQL audit table schemas.',
        'Mapped JSON payloads for REST APIs to support real-time user validation.',
        'Wrote SQL window functions and queries to audit transaction posting anomalies.',
        'Documented data structures to align developers and database administrators early.'
      ],
      outcome: 'Result: Zero data loss during automated custodian record synchronization.'
    },
    {
      icon: 'fa-solid fa-circle-check',
      title: 'UAT & Release Stewardship',
      tagline: 'Orchestrating end-to-end program validations and zero-downtime releases.',
      color: '#10B981',
      bullets: [
        'Led business user testing iterations to guarantee defect-free product launches.',
        'Supported QA squads in mapping automation cases directly to trace grids.',
        'Triaged change requests to accommodate mid-sprint regulatory adjustments.',
        'Coordinated release checklists across DB sync and microservice container engineers.'
      ],
      outcome: 'Result: Sustained a 100% sprint delivery rate with zero post-release incidents.'
    }
  ];

  return (
    <section id="summary" style={{ background: 'rgba(11, 19, 43, 0.2)', borderTop: '1px solid var(--border-light)', padding: '5.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle">Value Proposition</span>
          <h2 className="section-title">Executive <span>Capability Snapshot</span></h2>
          <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A consulting-grade overview of my key capabilities, business value mappings, and measurable outcomes as a Business Analyst.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border-light)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.25s ease-in-out',
                position: 'relative'
              }}
              className="doc-card-hover"
            >
              {/* Header block */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    justifyContent: 'center',
                    fontSize: '1.15rem',
                    color: cap.color
                  }}
                >
                  <i className={cap.icon}></i>
                </span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                    {cap.title}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0, lineHeight: 1.4, minHeight: '34px' }}>
                {cap.tagline}
              </p>

              {/* Bullet list */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '0px', margin: '0.25rem 0', flex: 1 }}>
                {cap.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ listStyleType: 'none', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.4 }}>
                    <i className="fa-solid fa-circle-check" style={{ color: cap.color, fontSize: '0.75rem', marginTop: '0.2rem' }}></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome block */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', marginTop: '0.5rem', fontSize: '0.8rem', color: cap.color, fontWeight: 600 }}>
                <i className="fa-solid fa-circle-nodes"></i> {cap.outcome}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
