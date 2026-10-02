import React, { useState } from 'react';

export default function TradeLifecycle() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [activeStage, setActiveStage] = useState(1);
  const [activeStageSubTab, setActiveStageSubTab] = useState('business');
  const [activeAsset, setActiveAsset] = useState('equities');
  const [activeArch, setActiveArch] = useState('context');
  const [resolvedExceptions, setResolvedExceptions] = useState([]);
  const [expandedQA, setExpandedQA] = useState(null);

  // Exception list data
  const initialExceptions = [
    { id: 'ex-1', title: 'Cash Break: $2,420,000 Mismatch', system: 'RKD vs ICU2 Ledger', type: 'Cash Mismatch', rootCause: 'Dividend posting timing differences between custodian and local records, flagged on SWIFT MT548 with code REJT.', severity: 'CRITICAL', status: 'UNRESOLVED' },
    { id: 'ex-2', title: 'Settlement Fail: DTCC SSI Mismatch', system: 'DTCC CTM Gateway', type: 'Settlement Fail', rootCause: 'Incorrect Standard Settlement Instructions (SSI) for fixed income bond delivery, flagged on SWIFT MT548 status advice with code NACK.', severity: 'HIGH', status: 'UNRESOLVED' },
    { id: 'ex-3', title: 'Compliance Violation: UCITS Issuer Exposure', system: 'ICU2 Validation Rules', type: 'Compliance Breach', rootCause: 'Portfolio drift caused single-issuer weight to hit 10.45% (Limit: 10%), violating pre-trade rules.', severity: 'HIGH', status: 'UNRESOLVED' },
    { id: 'ex-4', title: 'Position Break: 15,000 shares AAPL', system: 'Security Master Sync', type: 'Position Mismatch', rootCause: 'Corporate Action stock split adjustment delay in downstream ledger.', severity: 'MEDIUM', status: 'UNRESOLVED' },
    { id: 'ex-5', title: 'Missing Valuation Price: ISIN-US0378331', system: 'Pricing Vendor Feed', type: 'NAV Exception', rootCause: 'EOD valuation price not published by Bloomberg AIM before NAV cutoff, creating pricing discrepancies on SWIFT MT548 matches.', severity: 'CRITICAL', status: 'UNRESOLVED' }
  ];

  const handleResolveException = (id) => {
    if (!resolvedExceptions.includes(id)) {
      setResolvedExceptions([...resolvedExceptions, id]);
    }
  };

  // Timeline Stage Details
  const stagesData = {
    1: {
      title: 'Portfolio Rebalancing & Drift Check',
      office: 'Front Office',
      objective: 'Verify asset allocation weights against portfolio targets and trigger drift checks.',
      activities: 'Portfolio manager reviews target allocation weights versus actual weights. Cash reserves are calculated, and buys/sells are generated to rebalance drift.',
      systems: 'OMS, Portfolio Management System (PMS), Benchmark Feeds (MSCI, S&P).',
      teams: 'Portfolio Managers, Investment Analysts.',
      inputs: 'Current position quantities, market price feeds, target allocation percentages.',
      outputs: 'Generated list of order intents (proposed buy/sell tickets).',
      docs: 'Rebalancing Worksheets, Drift Reports.',
      rules: 'Minimum trade size limits, maximum tracking error constraints, cash buffer retention rules.',
      kpis: 'Tracking Error, Drift Resolution Latency, Drift Valuation Accuracy.',
      risks: 'Outdated market prices leading to incorrect netting; transaction cost overhead exceeding rebalancing benefits.',
      controls: 'Dual PM sign-off for rebalance sheets exceeding $10M; daily pricing feed heartbeats.',
      baDeliverables: 'BRD for Portfolio Drift Threshold Dashboard, SQL Schema mappings for Benchmark matching.',
      engTasks: 'Construct in-memory re-netting algorithm, map drift alert trigger parameters.',
      qaVal: 'Verify notification payload when drift exceeds 5% threshold; test floating-point rounding errors.',
      interviewQA: [
        {
          question: 'How do you gather requirements for a Portfolio Rebalancer re-netting engine?',
          answer: 'Elicitation starts with Joint Application Design (JAD) sessions with Portfolio Managers to map rebalancing triggers (drift-based vs. calendar-based). We map how cash buffers are calculated to prevent overdrafts. I document the netting rules—combining multiple buy/sell intents for the same security into a single net order to minimize market impact.',
          followUp: 'What happens if the cash buffer calculation is incorrect?',
          mistake: 'Failing to include transaction execution fees in the netting logic, leading to overdraft exceptions during settlement.'
        }
      ]
    },
    2: {
      title: 'Pre-Trade Compliance Filter',
      office: 'Compliance',
      objective: 'Run real-time checks to prevent regulatory and internal portfolio guideline breaches.',
      activities: 'Every proposed order intent is routed through the compliance validation engine (e.g. ICU2) before it reaches the trading desk.',
      systems: 'Compliance Engine (ICU2, Charles River Rules Engine), Security Master Database.',
      teams: 'Compliance Officers, Risk Management.',
      inputs: 'Proposed order details (size, ticker, counterparty), current fund positions, regulatory limit rules.',
      outputs: 'Compliance validation status (APPROVED, BLOCKED, PENDING_OVERRIDE).',
      docs: 'Pre-Trade Compliance Reports, Override Log Sheets.',
      rules: 'UCITS 5/10/40 concentration rules, restricted country exclusion, credit rating thresholds.',
      kpis: 'Pre-Trade Latency (target <50ms), Blocked Order True Positive Rate.',
      risks: 'Compliance rule database lag causing stale checks; false positives stalling trading execution.',
      controls: 'Independent weekly audits of the rules database; real-time failure alerts if compliance engine latency exceeds 100ms.',
      baDeliverables: 'Compliance rule traceability mapping matrices; process workflow diagrams for high-severity blocks.',
      engTasks: 'Index rules table in PostgreSQL; implement Redis caching for active regulatory boundaries.',
      qaVal: 'UAT scenario test for blocked orders; negative verification using restricted country tickers.',
      interviewQA: [
        {
          question: 'Explain the UCITS 5/10/40 rule and how you document it as a BA.',
          answer: 'The UCITS 5/10/40 rule dictates that a fund cannot invest more than 10% of its assets in securities from a single issuer. Additionally, the sum of all positions that exceed 5% of assets cannot exceed 40% of the total fund value. As a BA, I write functional rules detailing window partition SQL queries that verify this limit dynamically before order routing.',
          followUp: 'How do you handle compliance overrides during high market volatility?',
          mistake: 'Hardcoding override flags without establishing an audit trail, which violates SEC regulatory trace standards.'
        }
      ]
    },
    3: {
      title: 'Order Capture & Allocation (OMS)',
      office: 'Front Office',
      objective: 'Manage order capturing, block creation, and initial account allocation rules.',
      activities: 'Approved order intents are grouped into large block orders to minimize execution slippage. Initial account allocations are defined.',
      systems: 'Order Management System (OMS - Bloomberg AIM, Charles River IMS).',
      teams: 'Trading Desks, Operations Analysts.',
      inputs: 'Approved order intents, fund allocation parameters.',
      outputs: 'Block trade records with predefined account allocations.',
      docs: 'Order Tickets, Initial Allocation Sheets.',
      rules: 'Fair allocation rules (pro-rata distribution), broker exclusion guidelines.',
      kpis: 'Block Order Slippage, Allocation Reconciliation Rate.',
      risks: 'Mismatched account IDs causing allocation exceptions downstream; front-running risks.',
      controls: 'Automated trade-block confirmation workflows; pro-rata logic embedded directly in OMS code.',
      baDeliverables: 'OMS-to-Downstream Mapping specs; User story cards detailing block execution templates.',
      engTasks: 'Build REST APIs to accept allocations payloads; configure database transaction locks.',
      qaVal: 'Verify pro-rata division calculations when order quantities do not split evenly; test API schemas.',
      interviewQA: [
        {
          question: 'How do you ensure allocation fairness as a functional consultant?',
          answer: 'We enforce pro-rata allocation rules, ensuring blocks are split based on target asset weights. I write functional requirements detailing how remainders (un-divisible share lots) are routed—typically allocated to the largest account or rotated to maintain fairness.',
          followUp: 'What are the main causes of allocation mismatches?',
          mistake: 'Allowing manual overrides of account codes after execution, creating breaks in the downstream recordkeeping database (RKD).'
        }
      ]
    },
    4: {
      title: 'Algorithmic Execution & Routing (EMS)',
      office: 'Front Office',
      objective: 'Route orders to execution venues, brokers, or dark pools using algorithms.',
      activities: 'Traders choose execution routes (algorithms, dark pools, direct market access) and execute blocks via FIX protocols.',
      systems: 'Execution Management System (EMS - Flextrade, TS Imagine), Broker Feeds.',
      teams: 'Traders, Execution Analysts.',
      inputs: 'Block trade records, real-time market data liquidity feeds.',
      outputs: 'Trade execution reports containing average execution price.',
      docs: 'Execution Confirmation Files.',
      rules: 'Best execution guidelines (MiFID II), broker commission rates.',
      kpis: 'Volume Weighted Average Price (VWAP) drift, execution latency.',
      risks: 'Market impact during large orders; network failures causing duplicated execution commands.',
      controls: 'Predefined algorithmic price limits; automated duplicate execution checkers.',
      baDeliverables: 'FIX Protocol Tag Mapping Spreadsheets; EMS UI widget wireframes.',
      engTasks: 'Implement FIX engine session handlers; set up high-frequency event streaming queues.',
      qaVal: 'Verify system behavior during FIX network drops; test message boundary size thresholds.',
      interviewQA: [
        {
          question: 'What is the role of a BA during FIX protocol mapping?',
          answer: 'The BA maps data variables to FIX tags. For example, mapping security identifier to Tag 48, side to Tag 54 (1=Buy, 2=Sell), and order quantity to Tag 38. We document custom tag definitions required by specific broker networks.',
          followUp: 'Explain the difference between FIX Tag 48 and Tag 22.',
          mistake: 'Assuming standard FIX engines map custom fields automatically without writing transformation requirements.'
        }
      ]
    },
    5: {
      title: 'Trade Validation & CTM Matching',
      office: 'Middle Office',
      objective: 'Validate executed trades against system allocations and match details with brokers.',
      activities: 'Middle-office analysts enrich the trade details and match execution data against broker confirmation files (typically via DTCC CTM).',
      systems: 'DTCC Central Trade Matching (CTM), Oasis Matching Engine, internal matching services.',
      teams: 'Middle-Office Operations.',
      inputs: 'Internal trade records, broker confirmation files (sese.023 messages).',
      outputs: 'Matched trade records, trade discrepancy exceptions.',
      docs: 'Trade Affirmation Notices, Discrepancy Logs.',
      rules: 'Match tolerance thresholds (price match within $0.01), confirmation time limit rules.',
      kpis: 'Straight-Through Processing (STP) Rate, Confirmation Match Latency.',
      risks: 'Mismatched commission, fees, or accrued interest causing trade affirmation delays.',
      controls: 'Automated tolerance checks; real-time alert notifications for unresolved mismatches.',
      baDeliverables: 'BRD for Middle-Office Exception Dashboard, DTCC CTM integration mappings.',
      engTasks: 'Develop XML matching parser; configure exception status queue databases.',
      qaVal: 'Negative test scenarios for mismatched settlement dates; performance test for end-of-day batch matching.',
      interviewQA: [
        {
          question: 'What is Straight-Through Processing (STP) and how do you improve it?',
          answer: 'STP represents trades that match and flow downstream without manual intervention. We improve STP by mapping standard settlement instructions (SSIs) automatically and creating automated matching rules in DTCC CTM.',
          followUp: 'How do you handle commission differences during matching?',
          mistake: 'Failing to define clear tolerance thresholds ($0.01 to $0.05) for matching, causing trades to fail over minor fractions.'
        }
      ]
    },
    6: {
      title: 'Netting & Clearing Instructions',
      office: 'Middle Office',
      objective: 'Aggregate obligations to calculate netting and issue settlement instructions.',
      activities: 'Trades are consolidated through netting algorithms (e.g. DTCC Continuous Net Settlement) to establish net cash and security obligations.',
      systems: 'DTCC CTM, NSCC Netting Gateway, internal accounting gateways.',
      teams: 'Settlement Teams, Investment Operations.',
      inputs: 'Matched trade records, custodian account mapping profiles.',
      outputs: 'Net settlement instructions (receivables/deliverables).',
      docs: 'Continuous Net Settlement (CNS) Reports.',
      rules: 'Netting aggregate limits, cut-off times for clearing house submissions.',
      kpis: 'Netting efficiency ratio, Clearing fail rates.',
      risks: 'Clearing house system outages; netting failures leading to high capital reserve calls.',
      controls: 'Dual reconciliation of net settlement obligations; backup communication channels.',
      baDeliverables: 'Data mapping specifications for CNS feeds; SQL queries for netting reconciliations.',
      engTasks: 'Construct clearing engine batch jobs; implement validation checks for transaction netting.',
      qaVal: 'Regression test for clearing calculations during high volume days; verify error status updates.',
      interviewQA: [
        {
          question: 'Describe Continuous Net Settlement (CNS) netting calculations.',
          answer: 'CNS aggregates all purchase and sale transactions for a participant in a given security into a single net position. The clearinghouse novates the transactions, acting as the counterparty for final settlement netting.',
          followUp: 'What are the main risks of failed netting operations?',
          mistake: 'Aggregating net settlement calculations across separate custodians, leading to failed deliveries.'
        }
      ]
    },
    7: {
      title: 'Custodian Settlement Match',
      office: 'Back Office',
      objective: 'Exchange SWIFT messages to match and execute delivery vs. payment (DVP) settlement.',
      activities: 'Instruct custodians to settle trades via SWIFT MT541 (Receive Free/DVP) and MT543 (Deliver Free/DVP). Monitor MT548 status updates.',
      systems: 'SWIFT Alliance Gateway, Custodian Interfaces, RKD Database.',
      teams: 'Custodian Operations, Settlement Analysts.',
      inputs: 'Net clearing records, SWIFT MT548 processing status advices.',
      outputs: 'Settled trade status (SETTLED), cash/security ledger postings.',
      docs: 'SWIFT MT541/MT543 instructions, SWIFT MT548 advices.',
      rules: 'DVP rules (no cash release without share delivery), value date matching.',
      kpis: 'Custodian Match Latency, Settlement Fail Rate.',
      risks: 'Fails-to-deliver due to stock borrow shortages; currency settlement delays.',
      controls: 'Automated SWIFT MT548 exception router; daily custodian cash reconciliation loops.',
      baDeliverables: 'SWIFT Message Mapping Rules (MT541/543/548), Exception status transitions diagram.',
      engTasks: 'Implement SWIFT parser service; map exception status code logs.',
      qaVal: 'UAT scenario test for MT548 rejected codes; verify database update accuracy upon settlement confirmation.',
      interviewQA: [
        {
          question: 'How do you debug a custodian settlement failure as a BA?',
          answer: 'We analyze the incoming SWIFT MT548 status advice message. I search for error codes in the message payload (such as REJT or CANC) and locate mismatch flags (e.g. price, quantity, or SSI details). I trace these back to the original OMS booking to isolate the discrepancy.',
          followUp: 'Why is DVP (Delivery vs Payment) important?',
          mistake: 'Failing to check value date alignment between cash and security legs, causing transaction fails.'
        }
      ]
    },
    8: {
      title: 'NAV Accounting & Valuation Posting',
      office: 'Back Office',
      objective: 'Verify end-of-day NAV calculations and update fund general ledgers.',
      activities: 'Calculates the fund Net Asset Value (NAV) at the end of the day by combining security valuations, cash balances, and accrued fees.',
      systems: 'Fund Accounting System (SimCorp, Multipricer), Security Master Pricing feed.',
      teams: 'Fund Accountants, Valuation specialists.',
      inputs: 'Custodian settled records, daily closing price feeds, accrued fee balances.',
      outputs: 'Daily NAV, updated fund general ledger postings.',
      docs: 'NAV Worksheet Reports, General Ledger Postings.',
      rules: 'Fair valuation policies, NAV cutoff deadlines (e.g. 4:00 PM EST).',
      kpis: 'NAV Generation Accuracy, Cutoff SLA compliance.',
      risks: 'Stale security prices causing incorrect NAV calculations; ledger double-posting errors.',
      controls: 'Independent secondary pricing source check; automatic ledger balance matching alerts.',
      baDeliverables: 'BRD for automated NAV validation checks, database mapping rules for price aggregation.',
      engTasks: 'Construct NAV aggregation procedure; implement double-entry verification logic.',
      qaVal: 'Verify system alerts when security price drift exceeds 5%; test handling of missing pricing feeds.',
      interviewQA: [
        {
          question: 'How do you document requirements for daily NAV calculations?',
          answer: 'Requirements focus on data feeds (pricing, accruals, cash balances), validation limits (e.g., alert if NAV change exceeds 1%), and the general ledger interface schema. We map double-entry ledger rules for trades, corporate actions, and fund flows.',
          followUp: 'What causes NAV generation delays?',
          mistake: 'Assuming security prices are always available at cutoff, failing to define default pricing rules.'
        }
      ]
    }
  };

  return (
    <section id="trade-lifecycle" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-light)', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle">Enterprise Operations</span>
          <h2 className="section-title">Trade Lifecycle & <span>Operations Console</span></h2>
          <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Interactive simulation of buy-side, sell-side, and post-trade operations inspired by enterprise systems like BlackRock Aladdin and Charles River IMS.
          </p>
        </div>

        {/* Main Application Container */}
        <div className="trade-lifecycle-layout">
          
          {/* Left Console: Navigation & Actor Flow */}
          <div className="lifecycle-sidebar" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* View Mode Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h5 className="sidebar-section-title" style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Console Modules</h5>
              <button className={`console-nav-btn ${activeTab === 'timeline' ? 'active' : ''}`} onClick={() => setActiveTab('timeline')}>
                <i className="fa-solid fa-clock-rotate-left"></i> Timeline & Deep Dive
              </button>
              <button className={`console-nav-btn ${activeTab === 'divisions' ? 'active' : ''}`} onClick={() => setActiveTab('divisions')}>
                <i className="fa-solid fa-sitemap"></i> Office Divisions
              </button>
              <button className={`console-nav-btn ${activeTab === 'buysell' ? 'active' : ''}`} onClick={() => setActiveTab('buysell')}>
                <i className="fa-solid fa-arrow-right-arrow-left"></i> Buy vs Sell Side
              </button>
              <button className={`console-nav-btn ${activeTab === 'assets' ? 'active' : ''}`} onClick={() => setActiveTab('assets')}>
                <i className="fa-solid fa-wallet"></i> Asset Class Matrix
              </button>
              <button className={`console-nav-btn ${activeTab === 'architecture' ? 'active' : ''}`} onClick={() => setActiveTab('architecture')}>
                <i className="fa-solid fa-network-wired"></i> System Architecture
              </button>
              <button className={`console-nav-btn ${activeTab === 'exceptions' ? 'active' : ''}`} onClick={() => setActiveTab('exceptions')}>
                <i className="fa-solid fa-triangle-exclamation"></i> Exceptions Desk 
                {resolvedExceptions.length < initialExceptions.length && (
                  <span className="badge-count" style={{ background: 'var(--accent-gold)', color: '#000', fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '50px', marginLeft: '0.5rem', fontWeight: 700 }}>
                    {initialExceptions.length - resolvedExceptions.length}
                  </span>
                )}
              </button>
              <button className={`console-nav-btn ${activeTab === 'interview' ? 'active' : ''}`} onClick={() => setActiveTab('interview')}>
                <i className="fa-solid fa-compass"></i> Design Scenario Log
              </button>
            </div>

            {/* High-Level Actor Flow Diagram */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <h5 className="sidebar-section-title" style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Ecosystem Actor Pipeline</h5>
              <div className="actor-flow-scroller" style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                <div className="actor-vertical-flow" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-gold" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Investor</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Portfolio Manager</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Research Desk</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Execution Trader</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-gold" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Order (OMS)</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-gold" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Execution (EMS)</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Execution Broker</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Market Exchange</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-gold" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Clearing House (DTCC)</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-gold" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Settlement matches</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Global Custodian</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Fund Accountant (NAV)</div>
                  <div className="flow-connector">│</div>
                  <div className="flow-step-tag"><i className="fa-solid fa-circle text-cyan" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i> Client Reporting</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Content Display Canvas */}
          <div className="lifecycle-canvas" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* TAB 1: TIMELINE & DEEP DIVE */}
            {activeTab === 'timeline' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* 8-Stage Interactive Stepper */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', overflowX: 'auto', gap: '0.5rem' }}>
                  {Object.keys(stagesData).map((key) => {
                    const num = parseInt(key);
                    const isActive = num === activeStage;
                    return (
                      <button
                        key={num}
                        className={`stepper-node-btn ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          setActiveStage(num);
                          setExpandedQA(null);
                        }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', cursor: 'pointer', background: 'none', border: 'none' }}
                      >
                        <span className={`node-num-circle ${isActive ? 'active' : ''}`} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                          0{num}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: isActive ? 'var(--accent-gold)' : 'var(--text-dim)', textAlign: 'center', maxWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {stagesData[num].title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Stage Detail Panel */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <span className="stage-office-tag" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: 'rgba(56, 189, 248, 0.08)', color: 'var(--accent-cyan)', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                        {stagesData[activeStage].office}
                      </span>
                      <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>
                        0{activeStage}. {stagesData[activeStage].title}
                      </h3>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      Objective Mapped
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    <strong>Core Objective:</strong> {stagesData[activeStage].objective}
                  </p>

                  {/* Tab Selector inside stage detail */}
                  <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem', gap: '1.5rem' }}>
                    <button className={`stage-subtab-btn ${activeStageSubTab === 'business' ? 'active' : ''}`} onClick={() => setActiveStageSubTab('business')}>1. Operations</button>
                    <button className={`stage-subtab-btn ${activeStageSubTab === 'techno' ? 'active' : ''}`} onClick={() => setActiveStageSubTab('techno')}>2. Rules & Limits</button>
                    <button className={`stage-subtab-btn ${activeStageSubTab === 'ba' ? 'active' : ''}`} onClick={() => setActiveStageSubTab('ba')}>3. BA Deliverables</button>
                  </div>

                  {/* Stage Sub-tab content */}
                  {activeStageSubTab === 'business' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '0.9rem' }}>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-list-check text-gold"></i> Activities</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{stagesData[activeStage].activities}</p>
                        <h5 style={{ color: 'var(--text-main)', marginTop: '1.25rem', marginBottom: '0.5rem' }}><i className="fa-solid fa-window-restore text-gold"></i> Systems Used</h5>
                        <p style={{ color: 'var(--accent-cyan)' }}>{stagesData[activeStage].systems}</p>
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-file-invoice-dollar text-gold"></i> Inputs & Outputs</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}><strong>Input:</strong> {stagesData[activeStage].inputs}</p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '0.5rem' }}><strong>Output:</strong> {stagesData[activeStage].outputs}</p>
                        <h5 style={{ color: 'var(--text-main)', marginTop: '1.25rem', marginBottom: '0.5rem' }}><i className="fa-solid fa-file-signature text-gold"></i> Key Documents</h5>
                        <p style={{ color: 'var(--text-muted)' }}>{stagesData[activeStage].docs}</p>
                      </div>
                    </div>
                  )}

                  {activeStageSubTab === 'techno' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '0.9rem' }}>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-scale-balanced text-gold"></i> Business Rules</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{stagesData[activeStage].rules}</p>
                        <h5 style={{ color: 'var(--text-main)', marginTop: '1.25rem', marginBottom: '0.5rem' }}><i className="fa-solid fa-chart-line text-gold"></i> Operations KPIs</h5>
                        <p style={{ color: 'var(--accent-gold)' }}>{stagesData[activeStage].kpis}</p>
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-shield-halved text-gold"></i> Risks & Boundaries</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{stagesData[activeStage].risks}</p>
                        <h5 style={{ color: 'var(--text-main)', marginTop: '1.25rem', marginBottom: '0.5rem' }}><i className="fa-solid fa-circle-exclamation text-gold"></i> Controls</h5>
                        <p style={{ color: 'var(--text-muted)' }}>{stagesData[activeStage].controls}</p>
                      </div>
                    </div>
                  )}

                  {activeStageSubTab === 'ba' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '0.9rem' }}>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-clipboard-question text-gold"></i> BA Focus Areas</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{stagesData[activeStage].baDeliverables}</p>
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}><i className="fa-solid fa-gears text-gold"></i> Systems Verification & UAT</h5>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}><strong>Dev Target:</strong> {stagesData[activeStage].engTasks}</p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '0.5rem' }}><strong>QA Goal:</strong> {stagesData[activeStage].qaVal}</p>
                      </div>
                    </div>
                  )}

                  {/* Stage Operational Scenarios section */}
                  <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                    <h5 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                      <i className="fa-solid fa-folder-tree text-gold"></i> Operational Scenario & Design Decisions
                    </h5>
                    {stagesData[activeStage].interviewQA.map((qa, i) => (
                      <div key={i} style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid var(--border-light)', borderRadius: '6px', padding: '1.25rem' }}>
                        <div style={{ fontWeight: 600, color: 'var(--text-main)', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setExpandedQA(expandedQA === i ? null : i)}>
                          <span>Scenario: {qa.question}</span>
                          <i className={`fa-solid ${expandedQA === i ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ color: 'var(--accent-gold)' }}></i>
                        </div>
                        {expandedQA === i && (
                          <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}><strong>Design Resolution:</strong> {qa.answer}</p>
                            <p style={{ color: 'var(--accent-gold)' }}><strong>Downstream Impact:</strong> {qa.followUp}</p>
                            <p style={{ color: '#EF4444' }}><strong>Operational Risk & Control:</strong> {qa.mistake}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: OFFICE DIVISIONS */}
            {activeTab === 'divisions' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Office Divisions & Systems Mappings</h4>
                <div className="divisions-grid">
                  
                  {/* Front Office */}
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                      <span style={{ width: '32px', height: '32px', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                        <i className="fa-solid fa-gauge-high"></i>
                      </span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Front Office</h4>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <li><strong>Portfolio Construction:</strong> PM aggregates holdings and evaluates benchmark alignment.</li>
                      <li><strong>Security Selection:</strong> Research analysts calculate buy/sell triggers.</li>
                      <li><strong>Order Generation:</strong> OMScaptures order intents with target allocations.</li>
                      <li><strong>Algorithmic Execution:</strong> Trader routes blocks via FIX.</li>
                      <li><strong>Primary Systems:</strong> OMS, EMS, Market Data feeds.</li>
                    </ul>
                  </div>

                  {/* Middle Office */}
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                      <span style={{ width: '32px', height: '32px', background: 'rgba(245,158,11,0.1)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                        <i className="fa-solid fa-code-compare"></i>
                      </span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Middle Office</h4>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <li><strong>Trade Validation:</strong> Matches trade confirms against RKD inputs.</li>
                      <li><strong>Trade Matching:</strong> Coordinates CTM allocations with brokers.</li>
                      <li><strong>Risk & Compliance:</strong> Audits UCITS limit engine constraints.</li>
                      <li><strong>Position Reconciliation:</strong> Audits end-of-day holdings versus custodians.</li>
                      <li><strong>Primary Systems:</strong> DTCC CTM, ICU2 Validation, RKD database.</li>
                    </ul>
                  </div>

                  {/* Back Office */}
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                      <span style={{ width: '32px', height: '32px', background: 'rgba(239,68,68,0.1)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                        <i className="fa-solid fa-vault"></i>
                      </span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Back Office</h4>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <li><strong>Settlement & Custody:</strong> Issues SWIFT MT541/543 DVP postings.</li>
                      <li><strong>Fund Accounting:</strong> Posts double-entry journal items to ledgers.</li>
                      <li><strong>NAV Calculation:</strong> Calculates daily asset valuations.</li>
                      <li><strong>Client Reporting:</strong> Aggregates holding statements.</li>
                      <li><strong>Primary Systems:</strong> SimCorp Dimension, SWIFT Gateway.</li>
                    </ul>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: BUY SIDE VS SELL SIDE */}
            {activeTab === 'buysell' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Buy Side vs Sell Side Functional Comparison</h4>
                <div style={{ overflowX: 'auto' }}>
                  <table className="console-table" style={{ width: '100%', fontSize: '0.85rem' }}>
                    <thead>
                      <tr>
                        <th>Metric Dimension</th>
                        <th style={{ color: 'var(--accent-gold)' }}>Buy Side (Asset Managers / Funds)</th>
                        <th style={{ color: 'var(--accent-cyan)' }}>Sell Side (Brokers / Dealers)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Primary Objective</strong></td>
                        <td>Invest client capital, execute rebalancing strategies, minimize tracking error.</td>
                        <td>Make markets, offer liquidity, execute client allocations, maximize commissions.</td>
                      </tr>
                      <tr>
                        <td><strong>Key Systems</strong></td>
                        <td>Bloomberg AIM, Charles River IMS, SimCorp Dimension.</td>
                        <td>FIDESSA, Execution routers, dark pool matching engines.</td>
                      </tr>
                      <tr>
                        <td><strong>Documents Handled</strong></td>
                        <td>SIMPLE IRA enrollments, BRDs, FSDs, DTCC allocation files.</td>
                        <td>Execution Confirmations, clearing reports, contract notes.</td>
                      </tr>
                      <tr>
                        <td><strong>Key Users</strong></td>
                        <td>Portfolio Managers, Buy-Side Traders, Middle Office operations.</td>
                        <td>Market Makers, Sales Traders, Clearing Operations.</td>
                      </tr>
                      <tr>
                        <td><strong>Primary KPIs</strong></td>
                        <td>Tracking Error, Portfolio Alpha, Settlement fail rate.</td>
                        <td>Execution latency, execution commission yield, VWAP spread.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: ASSET CLASS MATRIX */}
            {activeTab === 'assets' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Asset Class Mappings & Rules</h4>
                
                {/* Asset Selectors */}
                <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', gap: '1.5rem' }}>
                  <button className={`stage-subtab-btn ${activeAsset === 'equities' ? 'active' : ''}`} onClick={() => setActiveAsset('equities')}>Equities</button>
                  <button className={`stage-subtab-btn ${activeAsset === 'fixedincome' ? 'active' : ''}`} onClick={() => setActiveAsset('fixedincome')}>Fixed Income</button>
                  <button className={`stage-subtab-btn ${activeAsset === 'derivatives' ? 'active' : ''}`} onClick={() => setActiveAsset('derivatives')}>Derivatives</button>
                  <button className={`stage-subtab-btn ${activeAsset === 'mutualfunds' ? 'active' : ''}`} onClick={() => setActiveAsset('mutualfunds')}>Mutual Funds</button>
                </div>

                {/* Selected Asset Content */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem', fontSize: '0.9rem' }}>
                  {activeAsset === 'equities' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Equities Trade Lifecycle Mappings</h5>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        Equities are highly standardized. The lifecycle operates under compressed timelines (**T+1 settlement**). Trading involves FIX protocol connections (Tag 48 for ISIN/CUSIP), clearing via DTCC Continuous Net Settlement (CNS), and custody updates via SWIFT MT541/MT543.
                      </p>
                      <ul style={{ color: 'var(--text-muted)' }}>
                        <li><strong>Settlement Cycle:</strong> T+1 Delivery vs Payment (DVP).</li>
                        <li><strong>Corporate Actions:</strong> Stock splits and cash dividends require Security Master updates.</li>
                        <li><strong>Risk Checks:</strong> Real-time exposure calculations for high-volatility sessions.</li>
                      </ul>
                    </div>
                  )}
                  {activeAsset === 'fixedincome' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Fixed Income (Bonds) Operations</h5>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        Fixed Income relies heavily on accurate accrued interest pricing. Yield-to-Maturity calculations are required at trade capture. Settlement typically aggregates through Euroclear, Clearstream, or Fedwire instead of DTCC CNS.
                      </p>
                      <ul style={{ color: 'var(--text-muted)' }}>
                        <li><strong>Accrued Interest:</strong> Must calculate interest accrued since the last coupon date.</li>
                        <li><strong>Settlement:</strong> T+1 or T+2 depending on government versus corporate issues.</li>
                        <li><strong>Data Fields:</strong> Yield-to-Maturity, Coupon frequency, Maturity Date.</li>
                      </ul>
                    </div>
                  )}
                  {activeAsset === 'derivatives' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Derivatives (IRS, CDS, Options) Operations</h5>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        Derivatives require complex collateral management. Positions are marked-to-market daily, triggering margin calls. Instead of clear settlement dates, they have contract execution, premium payment, and lifecycle events (exercise/maturity).
                      </p>
                      <ul style={{ color: 'var(--text-muted)' }}>
                        <li><strong>Collateral Management:</strong> Daily calculation of Initial and Variation Margin.</li>
                        <li><strong>Clearing:</strong> Centralized clearing via platforms like LCH.Clearnet.</li>
                        <li><strong>Lifecycle Events:</strong> Expiration, physical vs cash settlement.</li>
                      </ul>
                    </div>
                  )}
                  {activeAsset === 'mutualfunds' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Mutual Funds & RKD Database Postings</h5>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        Mutual funds are valued once daily (Net Asset Value - NAV). Lifecycle involves orders captured by transfer agents, cash reserves validated via ICU2, and ledger postings reconciled in the **Recordkeeping Database (RKD)**.
                      </p>
                      <ul style={{ color: 'var(--text-muted)' }}>
                        <li><strong>Pricing:</strong> Executed only at the 4:00 PM EST NAV cutoff price.</li>
                        <li><strong>Registry:</strong> Positions stored directly in transfer agent ledgers (RKD).</li>
                        <li><strong>Validation:</strong> Contribution boundaries ($15,500 for SIMPLE IRA) checked before sync.</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 5: SYSTEM ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>System Integration Architecture Diagrams</h4>
                
                {/* Diagram Selectors */}
                <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', gap: '1.5rem' }}>
                  <button className={`stage-subtab-btn ${activeArch === 'context' ? 'active' : ''}`} onClick={() => setActiveArch('context')}>System Context</button>
                  <button className={`stage-subtab-btn ${activeArch === 'containers' ? 'active' : ''}`} onClick={() => setActiveArch('containers')}>System Containers</button>
                  <button className={`stage-subtab-btn ${activeArch === 'dataflow' ? 'active' : ''}`} onClick={() => setActiveArch('dataflow')}>Data Flow (DFD)</button>
                </div>

                {/* Selected Diagram Content */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.5rem' }}>
                  {activeArch === 'context' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>System Context Architecture</h5>
                      <pre className="query-code" style={{ padding: '1rem', background: '#090e18', border: '1px solid var(--border-light)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
{`+-----------------+       Routes Intents       +--------------------+
|  Portfolio Mgr  | -------------------------> |  OMS (Bloomberg)   |
+-----------------+                            +--------------------+
                                                         |
                                                         | Pre-Trade Check
                                                         v
+-----------------+       DVP SWIFT MT541      +--------------------+
| Global Custodian| <------------------------- |   ICU2 / RKD Sync  |
+-----------------+                            +--------------------+
                                                         |
                                                         | Net Clearing
                                                         v
                                               +--------------------+
                                               | Clearing House     |
                                               | (DTCC / CNS)       |
                                               +--------------------+`}
                      </pre>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                        <strong>Description:</strong> High-level system boundary mapping showing how order intents transit from Portfolio Managers into OMS, validate via ICU2 compliance checks, clear via DTCC, and reconcile at Custodians.
                      </p>
                    </div>
                  )}
                  {activeArch === 'containers' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Application Containers Design</h5>
                      <pre className="query-code" style={{ padding: '1rem', background: '#090e18', border: '1px solid var(--border-light)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
{`[ React UI Client ] -------- (REST / JSON) --------> [ API Gateway Service ]
                                                           |
                                                           | gRPC / Internal
                                                           v
                                                     [ ICU2 Validation Engine ]
                                                           |
                                                           | SQL queries
                                                           v
                                                     [ PostgreSQL Replica ]
                                                           |
                                                           | RabbitMQ Sync
                                                           v
                                                     [ RKD Database Master ]`}
                      </pre>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                        <strong>Description:</strong> Container architecture mapping the microservices structure. Rebalancer frontends validate rules via gRPC requests to ICU2 compliance engines, logging events in PostgreSQL before database sync triggers RKD record updates.
                      </p>
                    </div>
                  )}
                  {activeArch === 'dataflow' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h5 style={{ color: 'var(--text-main)', margin: 0 }}>Data Flow Diagram (DFD)</h5>
                      <pre className="query-code" style={{ padding: '1rem', background: '#090e18', border: '1px solid var(--border-light)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
{`[ Order Data ] ===> (1. Validation Process) ===> [ Audit Log Datastore ]
                           ||
                           || Approved Records
                           v
                     (2. Netting Engine) ====> [ Net Obligations Table ]
                           ||
                           || Instruction Payload
                           v
                     (3. Custody Matching) ====> [ SWIFT Outbox Queue ]`}
                      </pre>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                        <strong>Description:</strong> Data flow mapping showing the transitions of record states from raw inputs to cleared and matched instructions.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 6: EXCEPTIONS DESK */}
            {activeTab === 'exceptions' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>Operations Exception Reconciliation Hub</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>
                    Resolved: {resolvedExceptions.length} / {initialExceptions.length}
                  </span>
                </div>

                <div className="exceptions-queue" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {initialExceptions.map((item) => {
                    const isResolved = resolvedExceptions.includes(item.id);
                    return (
                      <div key={item.id} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem', opacity: isResolved ? 0.6 : 1, transition: 'all 0.3s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: item.severity === 'CRITICAL' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)', color: item.severity === 'CRITICAL' ? '#EF4444' : 'var(--accent-gold)', borderRadius: '4px', fontWeight: 700 }}>
                              {item.severity}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>System: {item.system}</span>
                          </div>
                          <span style={{ fontSize: '0.8rem', color: isResolved ? '#10B981' : 'var(--text-dim)', fontWeight: 600 }}>
                            {isResolved ? 'RESOLVED' : 'ACTIVE EXCEPTION'}
                          </span>
                        </div>
                        <h5 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.title}</h5>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                          <strong>Root Cause:</strong> {item.rootCause}
                        </p>
                        
                        {!isResolved ? (
                          <button className="btn btn-gold" onClick={() => handleResolveException(item.id)} style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
                            <i className="fa-solid fa-screwdriver-wrench"></i> Trigger Resolution Workflow
                          </button>
                        ) : (
                          <div style={{ fontSize: '0.8rem', color: '#10B981' }}>
                            <i className="fa-solid fa-circle-check"></i> Audit match complete. Ledger updated.
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 7: DESIGN SCENARIO LOG */}
            {activeTab === 'interview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Functional Scenarios & Triage Guidelines</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem' }}>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Scenario: Coordinating Database Schema Changes for RKD Sync</h5>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      <strong>Resolution Strategy:</strong> As a Techno-Functional BA, I document the data translation requirements early in the BRD. I construct mock database tables, write SQL select validations, and compile JSON API contracts. I present these models during JAD sessions with the Lead Architect to identify capacity constraints or schema mapping conflicts before developers start building.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.25rem' }}>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Scenario: Managing Complex UAT Runs Across Distributed Teams</h5>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      <strong>Resolution Strategy:</strong> We standardized a Confluence Traceability Matrix mapping business rules to active QA test plans. I led sprint grooming sessions to clarify Gherkin stories for the offshore squad, resolving functional blocker defects during UAT cycles, resulting in a zero-defect launch for the SIMPLE IRA account portal.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
