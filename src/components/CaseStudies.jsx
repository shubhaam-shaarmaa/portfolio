import React, { useState } from 'react';
import { ALL_CASE_STUDIES } from '../data/caseStudies/index';

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState('1');
  const [domainFilter, setDomainFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDeliverable, setExpandedDeliverable] = useState(null); // BRD, FRD, API, SQL, Architecture, Testing

  // Active case study
  const activeCase = ALL_CASE_STUDIES.find(cs => cs && cs.id === selectedCaseId) || ALL_CASE_STUDIES[0];

  // Filtering case studies
  const filteredCaseStudies = ALL_CASE_STUDIES.filter(cs => {
    if (!cs) return false;
    const titleMatch = cs.title && cs.title.toLowerCase().includes(searchTerm.toLowerCase());
    const problemMatch = cs.problemStatement && cs.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSearch = titleMatch || problemMatch;

    let matchesDomain = true;
    if (domainFilter === 'real') {
      matchesDomain = ['1', '2', '3', '4'].includes(cs.id);
    } else if (domainFilter === 'conceptual') {
      matchesDomain = !['1', '2', '3', '4'].includes(cs.id);
    }
    return matchesSearch && matchesDomain;
  });

  // Project count metrics for dashboard overview
  const realCount = ALL_CASE_STUDIES.filter(cs => ['1', '2', '3', '4'].includes(cs.id)).length;
  const demoCount = ALL_CASE_STUDIES.length - realCount;

  // Custom technical deliverables mapping based on active project
  const getProjectTechnicalSpecs = (project) => {
    const defaultSpecs = {
      brd: `
# Business Requirements Document (BRD) - ${project.title}
* **BR-01 (Limits Check):** The system must restrict transaction sizes based on statutory and client portfolio concentration thresholds.
* **BR-02 (Audit Trail):** Every transaction state change must write to an immutable audit ledger within 5 seconds.
* **BR-03 (Exceptions Triage):** Flagged breaks must post to the operations exceptions desk queue console.
      `,
      frd: `
# Functional Requirements Document (FRD) - ${project.title}
* **Rule-1 (Status Evaluation):** If parameters match compliance boundaries, flag record status as APPROVED.
* **Rule-2 (Quarantine Routing):** If validation checks fail, route record to PENDING_TRIAGE.
      `,
      architecture: `
# Systems C4 Architecture Diagram
\`\`\`
[ Client App ] === (REST JSON API) ===> [ API Gateway ] ===> [ ${project.title.split(' ')[1] || 'Core Engine'} ] ===> [ PostgreSQL RKD Ledger ]
\`\`\`
      `,
      api: `
# REST API integration Contracts
## 1. POST /api/v1/transaction/validate
### Request Payload
\`\`\`json
{
  "accountId": "ACC-CUST-${project.id}882",
  "amount": 25000.00,
  "currency": "USD"
}
\`\`\`
### Response (200 OK)
\`\`\`json
{
  "status": "APPROVED",
  "transactionId": "TXN-${project.id}449120",
  "timestamp": "2026-08-02T19:50:00Z"
}
\`\`\`
      `,
      sql: `
# Database Design & SQL Auditing Queries
## 1. SQL DDL Tables Schema
\`\`\`sql
CREATE TABLE transaction_records_${project.id} (
  record_id VARCHAR(32) PRIMARY KEY,
  account_id VARCHAR(32) NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'PENDING'
);
\`\`\`
## 2. Validation Audit Query
\`\`\`sql
SELECT record_id, amount, status 
FROM transaction_records_${project.id} 
WHERE status = 'PENDING_TRIAGE' AND amount > 10000.00;
\`\`\`
      `,
      testing: `
# UAT & Gherkin testing Specification
\`\`\`gherkin
Feature: Trade Processing Limits Validation
  Scenario: Process valid transaction boundaries
    Given target ledger head is online
    When a transaction request of 5000.00 is parsed
    Then approve transaction and set status to "APPROVED"
\`\`\`
      `
    };

    // Project-specific overrides for high-fidelity deliverables
    if (project.id === '1') {
      defaultSpecs.sql = `
# Database Design & SQL Auditing Queries
## 1. SQL DDL Tables Schema
\`\`\`sql
CREATE TABLE simple_ira_accounts (
  account_id VARCHAR(32) PRIMARY KEY,
  client_name VARCHAR(128) NOT NULL,
  contribution_limit DECIMAL(10,2) DEFAULT 15500.00,
  ytd_contribution DECIMAL(10,2) DEFAULT 0.00,
  last_sync_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`
## 2. Validation Audit Query
\`\`\`sql
SELECT account_id, ytd_contribution 
FROM simple_ira_accounts 
WHERE ytd_contribution > contribution_limit;
\`\`\`
      `;
      defaultSpecs.api = `
# REST API Integration Contracts
## 1. POST /api/v1/enrollment/validate
### Request Payload
\`\`\`json
{
  "accountId": "ACC-SIMPLE-8842",
  "contributionAmount": 500.00,
  "taxYear": 2024
}
\`\`\`
### Response (200 OK)
\`\`\`json
{
  "status": "APPROVED",
  "transactionId": "TXN-994208",
  "timestamp": "2026-08-02T19:40:00Z"
}
\`\`\`
      `;
    }

    return defaultSpecs;
  };

  const specs = getProjectTechnicalSpecs(activeCase);

  return (
    <section id="case-studies" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-light)', padding: '5.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle">Portfolio Repository</span>
          <h2 className="section-title">Enterprise <span>Project Explorer</span></h2>
          <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Explore my project repository documenting business problems, deliverables, architecture, APIs, SQL schemas, and lessons learned.
          </p>
        </div>

        {/* 1. EXECUTIVE METRICS DASHBOARD BANNER */}
        <div className="executive-dashboard-banner" style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>{ALL_CASE_STUDIES.length}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Case Studies</span>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-light)' }} className="border-none-mobile">
            <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>{realCount}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Real-World Projects</span>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-light)' }} className="border-none-mobile">
            <span style={{ display: 'block', fontSize: '1.8rem', color: '#10B981', fontWeight: 700 }}>{demoCount}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Conceptual Demos</span>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-light)' }} className="border-none-mobile">
            <span style={{ display: 'block', fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: 700 }}>60+</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Deliverables</span>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-light)' }} className="border-none-mobile">
            <span style={{ display: 'block', fontSize: '1.8rem', color: '#10B981', fontWeight: 700 }}>100%</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>UAT Sign-off Mapped</span>
          </div>
        </div>

        {/* 2. SEARCH & FILTER CONTROLS */}
        <div className="skills-filter-wrapper" style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div className="skills-tabs" style={{ display: 'flex', gap: '0.75rem' }}>
            <button className={`filter-btn ${domainFilter === 'all' ? 'active' : ''}`} onClick={() => setDomainFilter('all')}>All Projects</button>
            <button className={`filter-btn ${domainFilter === 'real' ? 'active' : ''}`} onClick={() => setDomainFilter('real')}>Real Work</button>
            <button className={`filter-btn ${domainFilter === 'conceptual' ? 'active' : ''}`} onClick={() => setDomainFilter('conceptual')}>Conceptual Demos</button>
          </div>
          <div className="skills-search-box w-full-mobile" style={{ width: '350px' }}>
            <i className="fa-solid fa-magnifying-glass skills-search-icon"></i>
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search project repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 3. PROJECT LIST TABLE EXPLORER */}
        <div style={{ background: 'rgba(11, 19, 43, 0.2)', border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(11, 19, 43, 0.4)' }}>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>Enterprise Project Repository List</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Select project to load full repository files</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="console-table" style={{ width: '100%', fontSize: '0.82rem', borderCollapse: 'collapse', margin: 0 }}>
              <thead>
                <tr>
                  <th>Project Title</th>
                  <th>Client Domain</th>
                  <th>Core Tech Stack</th>
                  <th>Budget Scope</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCaseStudies.map((cs) => {
                  const isSelected = activeCase && (activeCase.id === cs.id);
                  const isReal = ['1', '2', '3', '4'].includes(cs.id);
                  return (
                    <tr
                      key={cs.id}
                      onClick={() => {
                        setSelectedCaseId(cs.id);
                        setExpandedDeliverable(null);
                      }}
                      style={{
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(56, 189, 248, 0.05)' : 'none',
                        borderBottom: '1px solid var(--border-light)',
                        transition: 'all 0.2s'
                      }}
                    >
                      <td style={{ fontWeight: 600, color: isSelected ? 'var(--accent-gold)' : 'var(--text-main)' }}>{cs.title}</td>
                      <td>
                        <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '4px', background: isReal ? 'rgba(56, 189, 248, 0.08)' : 'rgba(16, 185, 129, 0.08)', color: isReal ? 'var(--accent-cyan)' : '#10B981', fontWeight: 700 }}>
                          {isReal ? 'Real Work' : 'Demo'}
                        </span>
                      </td>
                      <td style={{ color: 'var(--text-dim)' }}>{cs.technologies ? cs.technologies.slice(0, 3).join(', ') : 'SQL, API'}</td>
                      <td>{cs.budget || '$1.2M'}</td>
                      <td><span style={{ color: '#10B981', fontWeight: 600 }}>{cs.status || 'COMPLETED'}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. ACTIVE PROJECT SUMMARY SHEET */}
        {activeCase && (
          <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Project Overview */}
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} className="flex-col-mobile">
              <div>
                <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', background: 'rgba(56, 189, 248, 0.08)', color: 'var(--accent-cyan)', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                  {activeCase.domain}
                </span>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.75rem', color: 'var(--text-main)', marginTop: '0.5rem' }}>{activeCase.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>{activeCase.summary}</p>
              </div>
              <div style={{ textAlign: 'right' }} className="text-left-mobile mt-1-mobile">
                <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)' }}>Role: <strong>{activeCase.role}</strong></span>
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>Timeline: <strong>{activeCase.startDate} - {activeCase.endDate}</strong></span>
              </div>
            </div>

            {/* Business Problem & Goal Panel */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }} className="flex-col-mobile">
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--accent-gold)' }}></i> Business Problem
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {activeCase.problemStatement}
                </p>
                {activeCase.challenges && (
                  <div style={{ marginTop: '1rem' }}>
                    <strong style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Key Operational Challenges:</strong>
                    <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {activeCase.challenges.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fa-solid fa-bullseye" style={{ color: '#10B981' }}></i> Delivery Solution & Metrics
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {activeCase.solutionOverview}
                </p>
                {activeCase.metrics && (
                  <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                    <strong style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Measurable Business Impact:</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {activeCase.metrics.map((m, i) => (
                        <div key={i} style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: 600 }}>
                          <i className="fa-solid fa-circle-check"></i> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* My Contribution (4 columns grid) */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                My Senior BA Functional Contributions
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>Requirements Engineering</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>Drafted structured business specs, mapped validation logic constraints, and managed user stories.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>Business Systems Analysis</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>Conducted data dictionary mappings, mapped ledger fields, and analyzed database sync anomalies.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>Stakeholder Collaboration</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>Coordinated JAD alignment sprints between compliance heads, valuation groups, and engineers.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>Delivery & Testing Support</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>Led UAT test runs, verified database table updates, and compiled release migrations checklists.</p>
                </div>
              </div>
            </div>

            {/* Grouped Deliverables (Expandable Accordion Rows) */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                Technical Repository & Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                
                {/* 1. BRD & FRD specifications */}
                <div>
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === 'specs' ? null : 'specs')}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span><i className="fa-solid fa-file-invoice" style={{ marginRight: '0.5rem', color: 'var(--accent-gold)' }}></i> Business & Functional Specs (BRD / FRD)</span>
                    <i className={`fa-solid ${expandedDeliverable === 'specs' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  {expandedDeliverable === 'specs' && (
                    <div style={{ background: 'rgba(11,19,43,0.1)', border: '1px solid var(--border-light)', borderTop: 'none', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {specs.brd}
                      {specs.frd}
                    </div>
                  )}
                </div>

                {/* 2. C4 Architecture context */}
                <div>
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === 'arch' ? null : 'arch')}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span><i className="fa-solid fa-diagram-project" style={{ marginRight: '0.5rem', color: 'var(--accent-cyan)' }}></i> System C4 Architecture Block</span>
                    <i className={`fa-solid ${expandedDeliverable === 'arch' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  {expandedDeliverable === 'arch' && (
                    <div style={{ background: 'rgba(11,19,43,0.1)', border: '1px solid var(--border-light)', borderTop: 'none', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {specs.architecture}
                    </div>
                  )}
                </div>

                {/* 3. API payload integrations */}
                <div>
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === 'api' ? null : 'api')}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span><i className="fa-solid fa-network-wired" style={{ marginRight: '0.5rem', color: 'var(--accent-cyan)' }}></i> API Integration specifications (JSON Payload Contracts)</span>
                    <i className={`fa-solid ${expandedDeliverable === 'api' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  {expandedDeliverable === 'api' && (
                    <div style={{ background: 'rgba(11,19,43,0.1)', border: '1px solid var(--border-light)', borderTop: 'none', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {specs.api}
                    </div>
                  )}
                </div>

                {/* 4. SQL data schemas */}
                <div>
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === 'sql' ? null : 'sql')}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span><i className="fa-solid fa-database" style={{ marginRight: '0.5rem', color: 'var(--accent-gold)' }}></i> Database DDL Schemas & SQL Audit Queries</span>
                    <i className={`fa-solid ${expandedDeliverable === 'sql' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  {expandedDeliverable === 'sql' && (
                    <div style={{ background: 'rgba(11,19,43,0.1)', border: '1px solid var(--border-light)', borderTop: 'none', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {specs.sql}
                    </div>
                  )}
                </div>

                {/* 5. Gherkin test scenarios */}
                <div>
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === 'test' ? null : 'test')}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span><i className="fa-solid fa-vial" style={{ marginRight: '0.5rem', color: '#10B981' }}></i> UAT Test Scenarios & Gherkin Specifications</span>
                    <i className={`fa-solid ${expandedDeliverable === 'test' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  {expandedDeliverable === 'test' && (
                    <div style={{ background: 'rgba(11,19,43,0.1)', border: '1px solid var(--border-light)', borderTop: 'none', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {specs.testing}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Lessons Learned Panel */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="flex-col-mobile">
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  Lessons Learned & Key Takeaways
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {activeCase.lessonsLearned ? activeCase.lessonsLearned.map((l, i) => <li key={i}>{l}</li>) : <li>Engage compliance checks early.</li>}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  Technical Architecture Context
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {activeCase.technicalArchitecture || 'Microservices backend with API routes linked to standard databases.'}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
