export const explorerData = [
  {
    id: 'orion-retirement-rkd',
    title: 'Module 1: Orion Retirement & RKD Account Management',
    company: 'Capital Group',
    summary: 'Automated retirement account management and Recordkeeping Database (RKD) synchronization.',
    phases: {
      charter: `
# Project Charter: Orion Retirement & RKD Account Management

## 1. Executive Summary
This project aims to automate the enrollment and modification workflow for SIMPLE IRA accounts, integrating the front-office retirement gateway with the back-office Recordkeeping Database (RKD). By implementing real-time API integrations, the system reduces manual data-entry errors by 98% and compliance flags by 95%.

## 2. Project Scope & Boundary
* **In-Scope:** Real-time ingestion of SIMPLE IRA contribution files, automated contribution limits checks, and RKD sync.
* **Out-of-Scope:** Retail brokerage accounts, physical checks processing, or manual wire matching.

## 3. Core Stakeholders
* **Product Owner:** Head of Buy-Side Retirement Products
* **Business Analyst:** Shubham Sharma (Senior BA)
* **Lead Architect:** Infosys Integration Team Lead
* **Valuation Lead:** BNY Custodial Operations Manager
      `,
      brd: `
# Business Requirements Document (BRD) - SIMPLE IRA

## 1. Requirement Traceability Matrix (RTM) Reference
All business objectives documented here correspond directly to the functional specs in the FRD.

## 2. Business Requirements List
| Req ID | Business Goal | Priority | Description |
|---|---|---|---|
| BR-01 | contribution boundary | High | System must reject contributions exceeding the annual SIMPLE IRA threshold ($15,500). |
| BR-02 | automated RKD sync | High | Sync completed enrollments to RKD within 5 seconds of matching. |
| BR-03 | error triage dashboard | Medium | Create a middle-office dashboard to resolve pending exceptions. |
      `,
      frd: `
# Functional Requirements Document (FRD)

## 1. Enrollment validation Rules
The system parses incoming REST payloads and evaluates contribution limits.
* **Rule-1:** If contribution is <= Remaining Limit, status = APPROVED.
* **Rule-2:** If contribution is > Remaining Limit, status = PENDING_TRIAGE.

## 2. Database Mapping Schema
| Variable | DB Columns | Data Type | Constraint |
|---|---|---|---|
| Account ID | account_id | VARCHAR(32) | PRIMARY KEY |
| Limit YTD | limit_ytd | DECIMAL(10,2) | NOT NULL |
| Last Sync | last_sync | TIMESTAMP | DEFAULT NOW() |
      `,
      srs: `
# Software Requirements Specification (SRS)

## 1. Non-Functional Requirements (NFRs)
* **Throughput:** System must process up to 1,000 transactions per second during peak trading.
* **Latency:** RKD API response time must be under 350ms.
* **Uptime:** High-availability deployment (99.99% service availability).
      `,
      rtm: `
# Requirements Traceability Matrix (RTM)

## 1. Traceability Mapping
| Req ID | User Story ID | Test Case ID | Status |
|---|---|---|---|
| BR-01 | US-101 (Limits Check) | TC-201 (Valid Bound) | PASSED |
| BR-02 | US-102 (RKD API) | TC-202 (Sync Timeout) | PASSED |
| BR-03 | US-103 (Error UI) | TC-203 (Manual Fix) | PASSED |
      `,
      epics: `
# Epic Catalogue: SIMPLE IRA Onboarding

## Epic-01: Automated Account Ingestion
Capture, validate, and parse incoming employer contribution files without manual formatting.

## Epic-02: Real-Time RKD Synchronization
Maintain synchronized account records between front-office transaction ledgers and back-office RKD tables.
      `,
      features: `
# Feature Catalogue

## Feat-01: Contribution Limit Engine
A rule-based microservice that evaluates employer/employee contributions against yearly statutory thresholds.

## Feat-02: Operations Exception Desk
A React-based middle-office queue console allowing operations specialists to override or cancel rejected transfers.
      `,
      stories: `
# User Story Catalogue

## US-101: Validate Contributions
As a Plan Administrator, I want the system to check contribution limits so that accounts do not incur IRS penalties.

## US-102: Sync to RKD
As a Settlement Specialist, I want approved enrollments to automatically post to RKD so that ledgers are kept current.
      `,
      criteria: `
# Acceptance Criteria (US-101)

* **Scenario 1:** Contribution is under statutory limits.
  * **Given** a valid account contribution of $500
  * **When** parsed by the Limit Engine
  * **Then** return status code 200 (APPROVED).

* **Scenario 2:** Contribution exceeds limits.
  * **Given** an account contribution exceeding the yearly limit
  * **When** parsed
  * **Then** trigger Exception Queue alert and flag status as PENDING_TRIAGE.
      `,
      gherkin: `
# Gherkin Repository

\`\`\`gherkin
Feature: SIMPLE IRA Limit Validation

  Scenario: Process valid contribution
    Given the account "ACC-8842" has a remaining headroom of $2,000
    When a contribution of $500 is initiated
    Then the system should approve the transaction
    And log status "APPROVED" in the database
\`\`\`
      `,
      api: `
# API Specifications

## 1. POST /api/v1/enrollment/validate
Validates and queues account contributions.

### Request Payload
\`\`\`json
{
  "accountId": "ACC-SIMPLE-8842",
  "contributionAmount": 500.00,
  "taxYear": 2024
}
\`\`\`

### Response Payload (200 OK)
\`\`\`json
{
  "status": "APPROVED",
  "transactionId": "TXN-994208",
  "timestamp": "2026-08-02T19:40:00Z"
}
\`\`\`
      `,
      database: `
# Database Design & SQL Validation

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

## 2. Validation Window query
\`\`\`sql
SELECT account_id, ytd_contribution 
FROM simple_ira_accounts 
WHERE ytd_contribution > contribution_limit;
\`\`\`
      `,
      architecture: `
# Systems Architecture context

\`\`\`
[ Employer Portal ] === (REST API) ===> [ API Gateway ]
                                              ||
                                              || JSON Payload
                                              v
                                      [ Limit Engine ]
                                              ||
                                              || SQL Query
                                              v
                                      [ RKD Database ]
\`\`\`
      `,
      wireframes: `
# ASCII Wireframes - Operations desk

\`\`\`
+-------------------------------------------------------+
|  Operations Console - SIMPLE IRA Exceptions           |
+-------------------------------------------------------+
| [Search Account]   [Filter: Critical]                 |
+-------------------------------------------------------+
| Account ID  | Mismatch Amt | Root Cause    | Action  |
+-------------+--------------+---------------+---------+
| ACC-8842    | $500.00      | Limit Exceeded| [Fix]   |
| ACC-9912    | $120.00      | Name Mismatch | [Fix]   |
+-------------------------------------------------------+
\`\`\`
      `,
      testing: `
# Testing & UAT Verification Strategy

## 1. UAT Execution Plan
* **Cycle 1:** Boundary checks for $15,500 contribution limits.
* **Cycle 2:** Mocking API failures to verify exception queue routing.

## 2. Test Cases Matrix
| Test Case | Description | Expected Outcome | Status |
|---|---|---|---|
| TC-01 | Contribution = $15,501 | Rejected, routed to triage queue | PASSED |
| TC-02 | RKD offline | Cache payload locally, retry | PASSED |
      `,
      release: `
# Release & Deployment Notes (v2.4.0)

## 1. Deployment Checklist
1. Execute PostgreSQL migration scripts.
2. Deploy microservice containers to AWS ECS.
3. Verify Redis cache connectivity.

## 2. Rollback Procedure
Revert ECS service to task definition revision 42.
      `,
      change: `
# Change Control Log

## CR-04: Adjust SIMPLE IRA limit validation rules for catch-up contributions
* **Owner:** Shubham Sharma (BA)
* **Change:** Allow contributors aged 50+ to submit catch-up contributions up to $19,000.
      `,
      closure: `
# Project Closure Report

## 1. Metrics & Performance Review
The automated RKD matching engine has been deployed successfully. Zero critical defects were identified during UAT, resulting in complete project sign-off.
      `
    }
  },
  {
    id: 'mutual-fund-sip',
    title: 'Module 2: RKD Mutual Fund Netting & Net Asset Value (NAV) Processing',
    company: 'Capital Group',
    summary: 'Automated mutual fund SIP processing and transaction netting integrations.',
    phases: {
      charter: `
# Project Charter: Mutual Fund Netting & NAV Processing

## 1. Executive Summary
Develop an automated transactional netting service to combine multiple customer mutual fund purchase/redemption intents into a single net order, significantly reducing transaction costs.

## 2. Core Stakeholders
* **Product Owner:** Fund Valuation Lead
* **Business Analyst:** Shubham Sharma (Senior BA)
      `,
      brd: `
# Business Requirements Document (BRD) - MF Netting

## 1. Functional Requirements
* **REQ-MF-01:** Net buy and sell orders for the same ISIN prior to the 4:00 PM EST valuation cutoff.
* **REQ-MF-02:** Pull daily closing prices from Bloomberg AIM.
      `,
      frd: `
# Functional Requirements Document (FRD)

## 1. Netting Logic Algorithm
* **Step 1:** Query all buy transaction amounts.
* **Step 2:** Query all sell transaction amounts.
* **Step 3:** Compute Net Obligation = Sum(Buy) - Sum(Sell).
      `,
      srs: `
# Software Requirements Specification (SRS)
Netting calculations must execute within 2 minutes of the market cutoff window to prevent NAV generation delays.
      `,
      rtm: `
# Requirements Traceability Matrix (RTM)
Maps REQ-MF-01 to Netting Engine tests.
      `,
      epics: `
# Epic Catalogue: Mutual Fund Netting
Automated order aggregation and clearing updates.
      `,
      features: `
# Feature Catalogue
Daily order aggregation module.
      `,
      stories: `
# User Story Catalogue
As a Valuation specialist, I want the transactions to be netted so that transaction costs are reduced.
      `,
      criteria: `
# Acceptance Criteria
Verify netting output matches aggregate buy and sell balances.
      `,
      gherkin: `
# Gherkin Repository
\`\`\`gherkin
Scenario: Correctly net positions
  Given aggregate buys are $5,000
  And aggregate sells are $3,000
  When netting is executed
  Then net obligation should be $2,000 (BUY)
\`\`\`
      `,
      api: `
# API Specifications
POST /api/v1/netting/calculate-net
      `,
      database: `
# Database Design & SQL

\`\`\`sql
CREATE TABLE transaction_orders (
  order_id INT PRIMARY KEY,
  isin VARCHAR(12) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  side VARCHAR(4) CHECK (side IN ('BUY', 'SELL'))
);
\`\`\`
      `,
      architecture: `
# Systems Architecture Context
Reconciliation gateway connecting the orders catalog to clearinghouse endpoints.
      `,
      wireframes: `
# ASCII Wireframes
Rebalancer console displaying active re-netting positions.
      `,
      testing: `
# Testing & QA Matrix
Verify netting math accuracy on accounts with high volumes.
      `,
      release: `
# Release Notes
Deployed netting batch engine.
      `,
      change: `
# Change Log
Adjusted cutoff timelines.
      `,
      closure: `
# Closure Report
All goals completed successfully.
      `
    }
  },
  {
    id: 'portfolio-rebalancing',
    title: 'Module 3: ICU2 Portfolio Rebalancing Engine & Pre-Trade compliance',
    company: 'Capital Group',
    summary: 'Pre-Trade compliance validation filters and automated drift check systems.',
    phases: {
      charter: `
# Project Charter: Portfolio Rebalancing Engine

## 1. Executive Summary
Provide a rule-based engine (ICU2) to detect drift in portfolio asset weights and validate pre-trade guidelines.
      `,
      brd: `
# Business Requirements (BRD)
Evaluate portfolio weights daily and prevent purchases violating regulatory concentration boundaries.
      `,
      frd: `
# Functional Requirements (FRD)
Evaluate UCITS limits: single issuer exposure cannot exceed 10%.
      `,
      srs: `
# Software Requirements (SRS)
The rules validation service must respond under 100ms.
      `,
      rtm: `
# Requirements Traceability Matrix
Trace regulatory rules to the validation rule engine.
      `,
      epics: `
# Epic Catalogue
Real-time rule-based validation.
      `,
      features: `
# Feature Catalogue
Concentration limit checker.
      `,
      stories: `
# User Story Catalogue
As a Compliance officer, I want to prevent concentration breaches.
      `,
      criteria: `
# Acceptance Criteria
Ensure orders violating the 10% limit are blocked.
      `,
      gherkin: `
# Gherkin Repository
\`\`\`gherkin
Scenario: Block order violating limits
  Given a single issuer weight of 9.5%
  When an order is placed increasing weight to 10.5%
  Then block the trade
\`\`\`
      `,
      api: `
# API Specifications
POST /api/v1/compliance/check-limits
      `,
      database: `
# Database Design & SQL
Verify limits rules mapping tables.
      `,
      architecture: `
# Systems Architecture
Rule evaluation microservice connected to the trade routing gateway.
      `,
      wireframes: `
# ASCII Wireframes
Compliance alerts log panel.
      `,
      testing: `
# Testing & QA
Verify blocked order statuses and override logs.
      `,
      release: `
# Release Notes
Deployed ICU2 rule-sets.
      `,
      change: `
# Change Log
Adjusted concentration filters.
      `,
      closure: `
# Closure Report
Successfully signed off.
      `
    }
  }
];
