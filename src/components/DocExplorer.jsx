import React, { useState } from 'react';

export default function DocExplorer() {
  const [activeTab, setActiveTab] = useState('lifecycle'); // lifecycle, deliverables, collaboration, traceability
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);
  const [activeDeliverableKey, setActiveDeliverableKey] = useState('brd');
  const [activeCollabRole, setActiveCollabRole] = useState('po');
  const [activeTraceNode, setActiveTraceNode] = useState('need');

  // 1. Business Analysis Lifecycle
  const lifecycleSteps = [
    { title: 'Discovery', desc: 'Identify business needs, project feasibility, and define initial project boundaries.' },
    { title: 'Requirement Gathering', desc: 'Conduct stakeholder interviews, JAD workshops, and collect business requirements.' },
    { title: 'Analysis', desc: 'Evaluate requirements, analyze feasibility, and identify systems bottlenecks.' },
    { title: 'Gap Analysis', desc: 'Perform AS-IS vs. TO-BE process evaluation to highlight requirements deltas.' },
    { title: 'Solution Design', desc: 'Formulate system integrations, validate schemas, and plan functional design directions.' },
    { title: 'Documentation', desc: 'Draft structured specifications (BRDs, FRDs) and map traceability matrices.' },
    { title: 'Development Support', desc: 'Detail backlogs, write acceptance criteria, and groom sprints for engineering.' },
    { title: 'Testing', desc: 'Formulate UAT plans, coordinate test scenarios, and track requirement validation.' },
    { title: 'Deployment', desc: 'Coordinate production migrations and verify release validation checklists.' },
    { title: 'Production Support', desc: 'Audit post-launch transaction exceptions and support operations desks.' }
  ];

  // 2. My Responsibilities
  const responsibilities = [
    { title: 'Requirement Workshops', desc: 'Facilitate JAD sessions with stakeholders to gather clean specifications.' },
    { title: 'Stakeholder Communication', desc: 'Align business heads, compliance teams, and technical architects.' },
    { title: 'Business Rules', desc: 'Formulate and audit statutory contribution limits and operational calculations.' },
    { title: 'Process Mapping', desc: 'Draft current and target-state workflows to guide engineering teams.' },
    { title: 'Wireframing', desc: 'Design UI layouts to visualize workflows before coding begins.' },
    { title: 'User Stories', desc: 'Author detailed Jira tickets mapping user roles to specific goals.' },
    { title: 'Acceptance Criteria', desc: 'Draft Given/When/Then scenarios to establish clear boundaries.' },
    { title: 'Backlog Grooming', desc: 'Prioritize tasks and clarify technical requirements in sprint meetings.' },
    { title: 'UAT Support', desc: 'Coordinate end-user test scripts to verify correct business rules validation.' },
    { title: 'Release Support', desc: 'Coordinate database migration steps for zero-downtime launches.' }
  ];

  // 3. Enterprise Deliverables
  const deliverables = {
    brd: {
      label: 'Business Requirements (BRD)',
      purpose: 'Document the high-level business needs, rules, and scope constraints.',
      when: 'Created during the Requirements Gathering phase.',
      value: 'Secures stakeholder consensus and avoids downstream scope drift.',
      consumers: 'Product Owners, Project Managers, and System Architects.'
    },
    frd: {
      label: 'Functional Requirements (FRD)',
      purpose: 'Translate business goals into system functional rules and logic flows.',
      when: 'Created during the Analysis and Solution Design phase.',
      value: 'Guides developers on how the system must handle requirements.',
      consumers: 'Software Engineers, QA Engineers, and System Architects.'
    },
    srs: {
      label: 'System Requirements (SRS)',
      purpose: 'Specify detailed performance metrics, environments, and hardware rules.',
      when: 'Created during the Solution Design phase.',
      value: 'Ensures the target environment meets capacity and security guidelines.',
      consumers: 'System Engineers, Database Administrators, and Ops teams.'
    },
    rtm: {
      label: 'Traceability Matrix (RTM)',
      purpose: 'Trace business needs to specific user stories, code files, and UAT cases.',
      when: 'Created during the Documentation phase and tracked through UAT.',
      value: 'Guarantees zero scope leakage and simplifies compliance audits.',
      consumers: 'Compliance Officers, QA leads, and Product Owners.'
    },
    epics: {
      label: 'Agile Epics',
      purpose: 'Group related requirements into large thematic business milestones.',
      when: 'Created during Backlog Grooming sprints.',
      value: 'Assists product managers in long-term release projections.',
      consumers: 'Product Owners, Scrum Masters, and engineering heads.'
    },
    features: {
      label: 'System Features',
      purpose: 'Define modular units of system capability (e.g. calculation engines).',
      when: 'Created during Backlog Grooming sprints.',
      value: 'Organizes system functional areas for incremental building.',
      consumers: 'Software Developers, QA Engineers, and System Architects.'
    },
    stories: {
      label: 'User Stories',
      purpose: 'Detail functional requests from user-persona perspectives.',
      when: 'Created during Backlog Grooming sprints.',
      value: 'Provides developers with clear task goals in manageable blocks.',
      consumers: 'Developers, QA Testers, and Scrum Teams.'
    },
    criteria: {
      label: 'Acceptance Criteria',
      purpose: 'Define clear validation rules using Given/When/Then scenarios.',
      when: 'Created during Backlog Grooming sprints.',
      value: 'Establishes test definitions for developers and QA engineers.',
      consumers: 'QA Automation Engineers, Developers, and UAT testers.'
    },
    wireframes: {
      label: 'UX Wireframes',
      purpose: 'Visualize interface layouts and navigation schemas.',
      when: 'Created during the Solution Design phase.',
      value: 'Resolves front-end requirements early, avoiding code rework.',
      consumers: 'Product Designers, Frontend Developers, and Business sponsors.'
    },
    process: {
      label: 'Process Flows',
      purpose: 'Render flowchart mappings of current and target-state workflows.',
      when: 'Created during the Analysis and Solution Design phase.',
      value: 'Clarifies system operations paths for developers and business heads.',
      consumers: 'System Architects, Developers, and Operations specialists.'
    },
    api: {
      label: 'API Contracts',
      purpose: 'Map fields, request formats, and query responses.',
      when: 'Created during the Solution Design phase.',
      value: 'Enables parallel front-end and back-end integration builds.',
      consumers: 'Frontend Developers, Backend Developers, and System Architects.'
    },
    sql: {
      label: 'SQL Validation Scripts',
      purpose: 'Wrote data audit queries to verify ledger records.',
      when: 'Created during the UAT and Testing phase.',
      value: 'Validates calculations and sync integrity directly in database tables.',
      consumers: 'UAT Testers, QA Engineers, and Database Administrators.'
    },
    test: {
      label: 'UAT Test Cases',
      purpose: 'Document end-user testing scenario steps and validations.',
      when: 'Created during the Testing phase.',
      value: 'Confirms that the system matches the original BRD scope.',
      consumers: 'Business users, UAT leads, and Product Owners.'
    },
    release: {
      label: 'Release Notes',
      purpose: 'Coordinate PostgreSQL migrations and ECS deployments.',
      when: 'Created during the Deployment phase.',
      value: 'Lists system updates and rollback steps for stable launches.',
      consumers: 'DevOps Engineers, Support Desks, and Operations managers.'
    }
  };

  // 4. Stakeholder Collaboration
  const collaborationRoles = {
    business: {
      title: 'Business Users',
      flow: 'Operations → Business Analyst',
      desc: 'Sponsors identify problems; BA gathers requirements and defines project scope boundaries.'
    },
    po: {
      title: 'Product Owner',
      flow: 'Product Owner ↔ Business Analyst',
      desc: 'BA assists in backlog prioritization, epic definitions, and sprint goal coordination.'
    },
    architect: {
      title: 'System Architect',
      flow: 'Architect ↔ Business Analyst',
      desc: 'BA translates functional requirements to guide system design and API contract boundaries.'
    },
    dev: {
      title: 'Developers',
      flow: 'Business Analyst → Developers',
      desc: 'BA details user stories, explains business rules, and answers implementation scope questions.'
    },
    qa: {
      title: 'QA Testers',
      flow: 'Business Analyst → QA Testers',
      desc: 'BA reviews test plans, clarifies scenarios, and supports Gherkin script conversions.'
    },
    uat: {
      title: 'UAT Team',
      flow: 'Business Analyst ↔ UAT Team',
      desc: 'BA coordinates user verification runs and compiles test sign-off documentation.'
    },
    ops: {
      title: 'Operations',
      flow: 'Business Analyst → Operations',
      desc: 'BA reviews release checklists and coordinates system cutover times with operations desks.'
    },
    support: {
      title: 'Support Desks',
      flow: 'Business Analyst → Support Desks',
      desc: 'BA provides training sessions and troubleshooting instructions for post-production issues.'
    }
  };

  // 5. Requirement Traceability
  const traceNodes = {
    need: { title: 'Business Need', desc: 'Identify core operational problems (e.g. contribution file processing delays).' },
    breq: { title: 'Business Req', desc: 'Detail user rules in the BRD (e.g. validate IRA limits).' },
    freq: { title: 'Functional Req', desc: 'Translate rules to functional specs (e.g. check thresholds before ledger posting).' },
    epic: { title: 'Epic Mapping', desc: 'Map requirements to Agile milestone Epics.' },
    feat: { title: 'System Feature', desc: 'Divide epics into modular components (e.g. validation engines).' },
    story: { title: 'User Story', desc: 'Author detailed Jira tickets containing specific developer tasks.' },
    criteria: { title: 'Acceptance Criteria', desc: 'Define Given/When/Then scenarios to guide developers and QA.' },
    dev: { title: 'Development', desc: 'Code functionality and map database schemas.' },
    test: { title: 'UAT Testing', desc: 'Conduct validation cycles confirming rule compliance.' },
    release: { title: 'Production Release', desc: 'Deploy verified code to production environments.' }
  };

  // 6. Toolkit
  const tools = [
    { title: 'Jira', icon: 'fa-solid fa-folder-tree', desc: 'Backlog grooming, user story authoring, and Sprint tracking.' },
    { title: 'Confluence', icon: 'fa-solid fa-book-open-reader', desc: 'Drafting project specifications, team wikis, and BRD archives.' },
    { title: 'SQL', icon: 'fa-solid fa-database', desc: 'Auditing ledger data and validating database sync calculations.' },
    { title: 'REST APIs', icon: 'fa-solid fa-network-wired', desc: 'Mapping fields, payloads, and validation integrations.' },
    { title: 'Process Mapping', icon: 'fa-solid fa-sitemap', desc: 'Drafting current and target-state operation flows.' },
    { title: 'Agile Framework', icon: 'fa-solid fa-people-group', desc: 'Coordinating sprints, grooming meetings, and retrospectives.' },
    { title: 'Azure DevOps', icon: 'fa-solid fa-infinity', desc: 'Managing requirement links and deployment pipelines.' },
    { title: 'Draw.io', icon: 'fa-solid fa-diagram-project', desc: 'Rendering system container layouts and process flowcharts.' },
    { title: 'Postman', icon: 'fa-solid fa-paper-plane', desc: 'Testing API endpoints and verifying query variables.' }
  ];

  return (
    <section id="doc-explorer" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-light)', padding: '5.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle">Methodology Workspace</span>
          <h2 className="section-title">Business Analysis <span>Framework</span></h2>
          <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A comprehensive, methodology-centric overview of my delivery process, deliverables registry, and stakeholder collaboration.
          </p>
        </div>

        {/* Tab Selectors */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className={`filter-btn ${activeTab === 'lifecycle' ? 'active' : ''}`} onClick={() => setActiveTab('lifecycle')}>
            1. BA Lifecycle & Responsibilities
          </button>
          <button className={`filter-btn ${activeTab === 'deliverables' ? 'active' : ''}`} onClick={() => setActiveTab('deliverables')}>
            2. Enterprise Deliverables
          </button>
          <button className={`filter-btn ${activeTab === 'collaboration' ? 'active' : ''}`} onClick={() => setActiveTab('collaboration')}>
            3. Stakeholder Collaboration
          </button>
          <button className={`filter-btn ${activeTab === 'traceability' ? 'active' : ''}`} onClick={() => setActiveTab('traceability')}>
            4. Requirement Traceability & Toolkit
          </button>
        </div>

        {/* TAB 1: LIFECYCLE & RESPONSIBILITIES */}
        {activeTab === 'lifecycle' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Interactive stepper */}
            <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
              <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Business Analysis Lifecycle
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', justifyContent: 'space-between' }}>
                {lifecycleSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLifecycleStep(idx)}
                    style={{
                      background: activeLifecycleStep === idx ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255,255,255,0.01)',
                      border: '1px solid',
                      borderColor: activeLifecycleStep === idx ? 'var(--accent-cyan)' : 'var(--border-light)',
                      borderRadius: '6px',
                      color: activeLifecycleStep === idx ? 'var(--accent-cyan)' : 'var(--text-main)',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                      minWidth: '110px',
                      flex: 1,
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Step {idx + 1}: {step.title}
                  </button>
                ))}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                  Stage {activeLifecycleStep + 1}: {lifecycleSteps[activeLifecycleStep].title}
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  {lifecycleSteps[activeLifecycleStep].desc}
                </p>
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
              <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Core Responsibilities Mappings
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>{resp.title}</strong>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{resp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DELIVERABLES */}
        {activeTab === 'deliverables' && (
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden' }} className="flex-col-mobile">
            {/* Left selector */}
            <div style={{ background: 'rgba(11, 19, 43, 0.5)', borderRight: '1px solid var(--border-light)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }} className="w-full-mobile border-b-mobile">
              <h5 style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Deliverables Registry</h5>
              {Object.keys(deliverables).map((key) => (
                <button
                  key={key}
                  className={`tree-nav-link ${activeDeliverableKey === key ? 'active' : ''}`}
                  onClick={() => setActiveDeliverableKey(key)}
                  style={{ textAlign: 'left' }}
                >
                  <i className="fa-solid fa-file-contract" style={{ marginRight: '0.5rem' }}></i>
                  {deliverables[key].label}
                </button>
              ))}
            </div>

            {/* Right details canvas */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>
                  {deliverables[activeDeliverableKey].label}
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Purpose & Overview</strong>
                  {deliverables[activeDeliverableKey].purpose}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>When Created</strong>
                  {deliverables[activeDeliverableKey].when}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Business Value Created</strong>
                  {deliverables[activeDeliverableKey].value}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Primary Consumers</strong>
                  {deliverables[activeDeliverableKey].consumers}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COLLABORATION */}
        {activeTab === 'collaboration' && (
          <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
            <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
              Stakeholder Collaboration Flow
            </h4>
            <div style={{ display: 'flex', gap: '1.5rem' }} className="flex-col-mobile">
              {/* Selectors grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', width: '320px' }} className="w-full-mobile">
                {Object.keys(collaborationRoles).map((roleKey) => (
                  <button
                    key={roleKey}
                    onClick={() => setActiveCollabRole(roleKey)}
                    style={{
                      background: activeCollabRole === roleKey ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255,255,255,0.01)',
                      border: '1px solid',
                      borderColor: activeCollabRole === roleKey ? 'var(--accent-cyan)' : 'var(--border-light)',
                      borderRadius: '6px',
                      color: activeCollabRole === roleKey ? 'var(--accent-cyan)' : 'var(--text-main)',
                      padding: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                  >
                    {collaborationRoles[roleKey].title}
                  </button>
                ))}
              </div>

              {/* Details card showing flow */}
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
                    {collaborationRoles[activeCollabRole].title} Relationship
                  </h3>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.82rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                    Communication Path Flow
                  </strong>
                  <div style={{ background: '#0b132b', border: '1px solid var(--border-light)', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                    <i className="fa-solid fa-arrows-left-right"></i> {collaborationRoles[activeCollabRole].flow}
                  </div>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.82rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                    Role Responsibility Delta
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {collaborationRoles[activeCollabRole].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TRACEABILITY & TOOLKIT */}
        {activeTab === 'traceability' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Traceability Flow */}
            <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
              <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Interactive Requirements Traceability Chain
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', justifyContent: 'space-between' }}>
                {Object.keys(traceNodes).map((nodeKey) => {
                  const node = traceNodes[nodeKey];
                  const isSelected = activeTraceNode === nodeKey;
                  return (
                    <button
                      key={nodeKey}
                      onClick={() => setActiveTraceNode(nodeKey)}
                      style={{
                        background: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-light)',
                        borderRadius: '6px',
                        color: isSelected ? 'var(--accent-cyan)' : 'var(--text-main)',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.72rem',
                        cursor: 'pointer',
                        minWidth: '100px',
                        flex: 1,
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {node.title}
                    </button>
                  );
                })}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                  Trace Stage: {traceNodes[activeTraceNode].title}
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  {traceNodes[activeTraceNode].desc}
                </p>
              </div>
            </div>

            {/* Toolkit Grid */}
            <div style={{ background: 'rgba(11, 19, 43, 0.3)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
              <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Business Analysis Toolkit
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {tools.map((tool, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', borderRadius: '6px', display: 'flex', alignItems: 'center', justify: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
                      <i className={tool.icon}></i>
                    </span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)' }}>{tool.title}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.3, display: 'block', marginTop: '0.15rem' }}>{tool.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
