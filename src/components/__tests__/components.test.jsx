import React from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

// Components under test
import Navbar from '../Navbar';
import Hero from '../Hero';
import ProfessionalIdentity from '../ProfessionalIdentity';
import CareerJourney from '../CareerJourney';
import Skills from '../Skills';
import FeaturedWork from '../FeaturedWork';
import CapitalMarketsCaseStudies from '../CapitalMarketsCaseStudies';
import AiJourney from '../AiJourney';
import EngineeringFoundation from '../EngineeringFoundation';
import Certifications from '../Certifications';
import ResumeCta from '../ResumeCta';
import Contact from '../Contact';
import Footer from '../Footer';
import BackToTop from '../BackToTop';
import RecruiterDock from '../RecruiterDock';
import AskShubham from '../AskShubham';
import SelectedWork from '../SelectedWork';
import JourneyAndCapabilities from '../JourneyAndCapabilities';
import UIConceptShowcase from '../UIConceptShowcase';
import App from '../../App';

describe('Techno-Functional Portfolio Comprehensive Regression Suite', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  // =========================================================================
  // 1. NAVBAR COMPONENT
  // =========================================================================
  describe('Navbar Component', () => {
    test('renders brand logo, avatar, and navigation links', () => {
      render(<Navbar scrolled={false} activeSection="hero" />);
      
      expect(screen.getByText(/Shubham Sharma/i)).toBeInTheDocument();
      expect(screen.getByText(/Techno-Functional BA/i)).toBeInTheDocument();
      expect(screen.getByAltText('Shubham Sharma')).toBeInTheDocument();
      
      const links = ['Home', 'Ask', 'Work', 'Journey', 'Contact'];
      links.forEach((linkText) => {
        expect(screen.getByRole('link', { name: linkText })).toBeInTheDocument();
      });

      expect(screen.getByRole('link', { name: /Resume/i })).toHaveAttribute('download', 'Shubham_Sharma_Resume.pdf');
    });

    test('toggles mobile menu and closes when a link is clicked', () => {
      render(<Navbar scrolled={false} activeSection="hero" />);
      
      const toggleBtn = screen.getByRole('button', { name: /navigation menu/i });
      expect(toggleBtn).toBeInTheDocument();
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

      // Open mobile menu
      fireEvent.click(toggleBtn);
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
      const navLinksContainer = screen.getByRole('link', { name: 'Home' }).parentElement;
      expect(navLinksContainer).toHaveClass('active');

      // Click a link to close mobile menu
      fireEvent.click(screen.getByRole('link', { name: 'Work' }));
      expect(navLinksContainer).not.toHaveClass('active');
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    });

    test('closes mobile menu on backdrop click or escape key', () => {
      const { container } = render(<Navbar scrolled={false} activeSection="hero" />);
      const toggleBtn = screen.getByRole('button', { name: /navigation menu/i });
      const navLinksContainer = screen.getByRole('link', { name: 'Home' }).parentElement;

      // Open menu and verify backdrop appears
      fireEvent.click(toggleBtn);
      expect(navLinksContainer).toHaveClass('active');
      const backdrop = container.querySelector('.nav-backdrop');
      expect(backdrop).toBeInTheDocument();

      // Click backdrop to dismiss
      fireEvent.click(backdrop);
      expect(navLinksContainer).not.toHaveClass('active');

      // Re-open and dismiss with Escape key
      fireEvent.click(toggleBtn);
      expect(navLinksContainer).toHaveClass('active');
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(navLinksContainer).not.toHaveClass('active');
    });

    test('applies scrolled class when scrolled prop is true', () => {
      const { container } = render(<Navbar scrolled={true} activeSection="hero" />);
      expect(container.querySelector('.navbar')).toHaveClass('scrolled');
    });
  });

  // =========================================================================
  // 2. HERO COMPONENT
  // =========================================================================
  describe('Hero Component', () => {
    test('renders primary headline, supporting quote, and truthful metrics', () => {
      render(<Hero />);
      
      // Headline
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/TECHNO-FUNCTIONAL/i);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/BUSINESS ANALYST/i);

      // Subheadline tags
      expect(screen.getByText(/Capital Markets & Asset Management/i)).toBeInTheDocument();
      expect(screen.getAllByText(/AI & GenAI/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Product & Technology/i)).toBeInTheDocument();

      // Credibility metrics
      expect(screen.getByText(/4\+ Years/i)).toBeInTheDocument();
      expect(screen.getByText(/Enterprise Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/US Investment Mgmt Exposure/i)).toBeInTheDocument();

      // CTAs
      expect(screen.getByRole('link', { name: /View My Work/i })).toHaveAttribute('href', '#projects');
      expect(screen.getByRole('link', { name: /LinkedIn Profile/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /GitHub Profile/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Download Resume/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 3. PROFESSIONAL IDENTITY COMPONENT
  // =========================================================================
  describe('ProfessionalIdentity Component', () => {
    test('renders 3-part intersection, centerpiece, and emerging AI pillar', () => {
      render(<ProfessionalIdentity />);
      
      // 3 pillars
      expect(screen.getByRole('heading', { level: 3, name: /BUSINESS ANALYSIS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3, name: /CAPITAL MARKETS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3, name: /TECHNOLOGY/i })).toBeInTheDocument();

      // Centerpiece
      expect(screen.getByRole('heading', { name: /TECHNO-FUNCTIONAL SOLUTIONS/i })).toBeInTheDocument();
      
      // Emerging 4th pillar
      expect(screen.getByText(/EMERGING CAPABILITY/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 4, name: /AI & GENAI/i })).toBeInTheDocument();

      // Narrative & competency chips
      expect(screen.getByText(/Narrative Summary/i)).toBeInTheDocument();
      expect(screen.getByText(/Core Functional Competencies/i)).toBeInTheDocument();
      expect(screen.getByText(/Requirements analysis & JAD workshops/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 4. CAREER JOURNEY COMPONENT
  // =========================================================================
  describe('CareerJourney Component', () => {
    test('renders 5-stage progressive timeline from Trainee to Senior Associate Consultant', () => {
      render(<CareerJourney />);
      
      // Core narrative quote
      expect(screen.getByText(/The Core Career Narrative:/i)).toBeInTheDocument();

      // Stage 1
      expect(screen.getByRole('heading', { name: /^SYSTEMS ENGINEER TRAINEE$/i })).toBeInTheDocument();
      expect(screen.getAllByText('2022').length).toBeGreaterThan(0);

      // Stage 2
      expect(screen.getByRole('heading', { name: /^SYSTEMS ENGINEER$/i })).toBeInTheDocument();
      expect(screen.getAllByText('2022–2024').length).toBeGreaterThan(0);

      // Stage 3
      expect(screen.getByRole('heading', { name: /^SENIOR SYSTEMS ENGINEER$/i })).toBeInTheDocument();
      expect(screen.getAllByText('2024–2025').length).toBeGreaterThan(0);

      // Stage 4
      expect(screen.getByRole('heading', { name: /^ASSOCIATE CONSULTANT$/i })).toBeInTheDocument();
      expect(screen.getAllByText('2025–2026').length).toBeGreaterThan(0);

      // Stage 5
      expect(screen.getByRole('heading', { name: /^SENIOR ASSOCIATE CONSULTANT$/i })).toBeInTheDocument();
      expect(screen.getAllByText('2026–PRESENT').length).toBeGreaterThan(0);
    });

    test('allows selecting milestone pills and toggles active highlight', () => {
      const { container } = render(<CareerJourney />);
      
      const pills = container.querySelectorAll('.timeline-pill');
      expect(pills.length).toBe(5);

      // Click second pill (2022–2024 Systems Engineer)
      fireEvent.click(pills[1]);
      expect(pills[1]).toHaveClass('active');

      // Click again to toggle off
      fireEvent.click(pills[1]);
      expect(pills[1]).not.toHaveClass('active');
    });
  });

  // =========================================================================
  // 5. SKILLS / CORE CAPABILITIES COMPONENT
  // =========================================================================
  describe('Skills Component', () => {
    test('renders 4 capability areas and strictly partitions AI into Current vs Building', () => {
      render(<Skills />);
      
      expect(screen.getByRole('heading', { name: /BUSINESS ANALYSIS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /CAPITAL MARKETS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /TECHNOLOGY/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /AI & GENAI/i })).toBeInTheDocument();

      // AI partitioning
      expect(screen.getByText(/CURRENT CAPABILITIES \(IN PRACTICE\):/i)).toBeInTheDocument();
      expect(screen.getByText(/BUILDING TOWARD \(ACTIVE ROADMAP\):/i)).toBeInTheDocument();

      // Check specific skills
      expect(screen.getByText('User Stories')).toBeInTheDocument();
      expect(screen.getByText('Trade Lifecycle')).toBeInTheDocument();
      expect(screen.getByText('SQL')).toBeInTheDocument();
      expect(screen.getByText('Gemini')).toBeInTheDocument();
      expect(screen.getByText('RAG Pipelines')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 6. FEATURED WORK COMPONENT
  // =========================================================================
  describe('FeaturedWork Component', () => {
    test('renders project cards and filters projects by status', () => {
      render(<FeaturedWork />);
      
      expect(screen.getByText(/All Statuses \(/i)).toBeInTheDocument();
      
      // Filter by Completed
      const completedFilterBtn = screen.getByRole('button', { name: /Completed \(/i });
      fireEvent.click(completedFilterBtn);
      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();

      // Filter by In Progress
      const inProgressFilterBtn = screen.getByRole('button', { name: /In Progress \(/i });
      fireEvent.click(inProgressFilterBtn);
      expect(screen.getByText(/BFSI Document Research Assistant/i)).toBeInTheDocument();

      // Filter by Planned
      const plannedFilterBtn = screen.getByRole('button', { name: /Planned \(/i });
      fireEvent.click(plannedFilterBtn);
      expect(screen.getByText(/Banking & FinTech Stateful Support Agent/i)).toBeInTheDocument();
    });

    test('filters projects by domain category pills', () => {
      render(<FeaturedWork />);
      
      // Filter by AI & GenAI
      const aiPill = screen.getByRole('button', { name: 'AI & GenAI' });
      fireEvent.click(aiPill);
      expect(screen.getByText(/BFSI Document Research Assistant/i)).toBeInTheDocument();
      expect(screen.queryByText(/Institutional Trade Lifecycle & Exception Resolver/i)).not.toBeInTheDocument();

      // Return to All Focus Areas
      const allPill = screen.getByRole('button', { name: 'All Focus Areas' });
      fireEvent.click(allPill);
      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();
    });

    test('toggles inline Quick Peek code preview', () => {
      render(<FeaturedWork />);
      
      const quickPeekBtns = screen.getAllByRole('button', { name: /Quick Peek/i });
      expect(quickPeekBtns.length).toBeGreaterThan(0);

      // Open quick peek
      fireEvent.click(quickPeekBtns[0]);
      expect(screen.getByRole('button', { name: /Hide Quick Peek/i })).toBeInTheDocument();
      expect(screen.getByText(/\(SQL\)/i)).toBeInTheDocument();

      // Close quick peek
      const hideBtn = screen.getByRole('button', { name: /Hide Quick Peek/i });
      fireEvent.click(hideBtn);
      expect(screen.queryByText(/\(SQL\)/i)).not.toBeInTheDocument();
    });

    test('opens deliverable spec modal, verifies accessibility dialog, and closes via close button and Escape key', () => {
      render(<FeaturedWork />);
      
      // Open modal
      const inspectBtns = screen.getAllByRole('button', { name: /Inspect Spec Artifact/i });
      fireEvent.click(inspectBtns[0]);

      // Check modal attributes and content
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(screen.getByText(/Specification Context:/i)).toBeInTheDocument();

      // Close via close button
      const closeBtn = screen.getByRole('button', { name: /Close Artifact/i });
      fireEvent.click(closeBtn);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      // Reopen and close via Escape key
      fireEvent.click(inspectBtns[0]);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('renders friendly empty state when no initiatives match filter combination and resets cleanly', () => {
      render(<FeaturedWork />);

      // Filter by Completed
      const completedFilterBtn = screen.getByRole('button', { name: /Completed \(/i });
      fireEvent.click(completedFilterBtn);

      // Filter by AI & GenAI (AI projects are currently IN PROGRESS, so 0 matches)
      const aiPill = screen.getByRole('button', { name: 'AI & GenAI' });
      fireEvent.click(aiPill);

      expect(screen.getByText(/No initiatives match the selected combination/i)).toBeInTheDocument();

      // Click Reset All Filters
      const resetBtn = screen.getByRole('button', { name: /Reset All Filters/i });
      fireEvent.click(resetBtn);

      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 7. CAPITAL MARKETS CASE STUDIES COMPONENT
  // =========================================================================
  describe('CapitalMarketsCaseStudies Component', () => {
    test('renders 7-stage Trade Lifecycle and allows stage inspection', () => {
      render(<CapitalMarketsCaseStudies />);
      
      expect(screen.getByText(/7-Stage End-to-End Trade Lifecycle Flow:/i)).toBeInTheDocument();

      // Default stage is 01
      expect(screen.getByText(/Stage 01 of 07/i)).toBeInTheDocument();

      // Click Stage 05 Settlement
      const settlementStep = screen.getByText('Settlement (T+1)');
      fireEvent.click(settlementStep);
      expect(screen.getByText(/Stage 05 of 07/i)).toBeInTheDocument();
      expect(screen.getByText(/Responsible Desk:/i)).toBeInTheDocument();
    });

    test('toggles between Executive Summary and Deep Technical Specs perspective views', () => {
      render(<CapitalMarketsCaseStudies />);
      
      const execBtn = screen.getByRole('button', { name: /^Executive Summary$/i });
      const techBtn = screen.getByRole('button', { name: /^Deep Technical Specs$/i });

      expect(execBtn).toHaveClass('active');
      expect(techBtn).not.toHaveClass('active');
      expect(screen.getByText(/Showing concise business outcomes/i)).toBeInTheDocument();
      // Executive summary specific elements
      expect(screen.getByText('78% Reduction')).toBeInTheDocument();
      expect(screen.getByText(/7-Stage End-to-End Trade Lifecycle Flow:/i)).toBeInTheDocument();

      // Switch to Deep Technical Specs
      fireEvent.click(techBtn);
      expect(techBtn).toHaveClass('active');
      expect(execBtn).not.toHaveClass('active');
      expect(screen.getByText(/Showing full technical specifications/i)).toBeInTheDocument();
      // Technical specs specific elements
      expect(screen.getByText(/Institutional Trade Allocation & DTCC CTM Message Spec/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Requirements & User Stories/i })).toBeInTheDocument();

      // Switch back
      fireEvent.click(execBtn);
      expect(execBtn).toHaveClass('active');
      expect(screen.getByText('78% Reduction')).toBeInTheDocument();
    });

    test('switches across all 4 case study tabs in Deep Technical Specs mode', () => {
      render(<CapitalMarketsCaseStudies />);

      // Switch to Deep Technical Specs mode to access the 4 detailed tabs
      const techBtn = screen.getByRole('button', { name: /^Deep Technical Specs$/i });
      fireEvent.click(techBtn);
      
      // Tab 1: As-Is vs To-Be
      expect(screen.getByText(/The Business Problem/i)).toBeInTheDocument();

      // Tab 2: Requirements & User Stories
      const reqTabBtn = screen.getByRole('button', { name: /Requirements & User Stories/i });
      fireEvent.click(reqTabBtn);
      expect(screen.getByText(/Core Functional Requirements/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Acceptance Criteria \(Given-When-Then\):/i).length).toBeGreaterThan(0);

      // Tab 3: Data Model & API
      const dataTabBtn = screen.getByRole('button', { name: /Data Model & API Architecture/i });
      fireEvent.click(dataTabBtn);
      expect(screen.getByText(/Key Data Requirements & Schemas/i)).toBeInTheDocument();

      // Tab 4: UAT Scenarios & Business Impact
      const uatTabBtn = screen.getByRole('button', { name: /UAT Scenarios & Business Impact/i });
      fireEvent.click(uatTabBtn);
      expect(screen.getByText(/UAT Scenarios & Validation Criteria/i)).toBeInTheDocument();
    });

    test('operates exception triage simulator and tracks resolution status', () => {
      render(<CapitalMarketsCaseStudies />);
      
      expect(screen.getByText(/Resolved: 0 \/ 3/i)).toBeInTheDocument();

      // Resolve 1st exception
      const triageBtns = screen.getAllByRole('button', { name: /Execute Triage/i });
      fireEvent.click(triageBtns[0]);
      expect(screen.getByText(/Resolved: 1 \/ 3/i)).toBeInTheDocument();

      // Resolve remaining 2 exceptions
      const remainingTriageBtns = screen.getAllByRole('button', { name: /Execute Triage/i });
      fireEvent.click(remainingTriageBtns[0]);
      fireEvent.click(remainingTriageBtns[1]);

      expect(screen.getByText(/Resolved: 3 \/ 3/i)).toBeInTheDocument();
      expect(screen.getByText(/All breaks resolved!/i)).toBeInTheDocument();

      // Click Reset Simulator
      const resetBtn = screen.getByRole('button', { name: /Reset/i });
      fireEvent.click(resetBtn);

      expect(screen.getByText(/Resolved: 0 \/ 3/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 8. AI JOURNEY COMPONENT
  // =========================================================================
  describe('AiJourney Component', () => {
    test('renders 8-project capability roadmap and progressive architecture', () => {
      render(<AiJourney />);
      
      expect(screen.getByText(/Building Toward Production AI Systems/i)).toBeInTheDocument();
      expect(screen.getByText(/One capability → one real project\./i)).toBeInTheDocument();

      // Progression nodes
      const nodes = ['RAG', 'Agents', 'MCP', 'Evals', 'LLMOps', 'Fine-Tuning', 'AI Security', 'Model Routing'];
      nodes.forEach((n) => {
        expect(screen.getAllByText(n).length).toBeGreaterThan(0);
      });

      // Target Architecture
      expect(screen.getByText(/AI Architecture — Building Progressively/i)).toBeInTheDocument();
      expect(screen.getByText(/Client Layer/i)).toBeInTheDocument();
      expect(screen.getByText(/Gateway & Security Layer/i)).toBeInTheDocument();
      expect(screen.getByText(/Application & Agent Orchestration/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 9. ENGINEERING FOUNDATION COMPONENT
  // =========================================================================
  describe('EngineeringFoundation Component', () => {
    test('renders 4 technical pillars and evidence chips', () => {
      render(<EngineeringFoundation />);
      
      expect(screen.getByRole('heading', { name: /Engineering Foundation/i })).toBeInTheDocument();
      expect(screen.getByText(/Frontend Architecture & UI/i)).toBeInTheDocument();
      expect(screen.getByText(/Data Auditing & Schemas/i)).toBeInTheDocument();
      expect(screen.getByText(/API Contracts & Integration/i)).toBeInTheDocument();
      expect(screen.getByText(/DevSecOps & Cloud Hygiene/i)).toBeInTheDocument();

      expect(screen.getByText('React.js')).toBeInTheDocument();
      expect(screen.getByText('SQL (PostgreSQL / Relational)')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 10. CERTIFICATIONS COMPONENT
  // =========================================================================
  describe('Certifications Component', () => {
    test('renders credentials and honors cards', () => {
      render(<Certifications />);
      
      expect(screen.getByRole('heading', { name: /Certifications & Honors/i })).toBeInTheDocument();
      expect(screen.getByText(/Infosys Certified Business Consultant/i)).toBeInTheDocument();
      expect(screen.getByText(/Capital Markets Domain Specialization/i)).toBeInTheDocument();
      expect(screen.getByText(/Global Agile Developer/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 11. RESUME CTA COMPONENT
  // =========================================================================
  describe('ResumeCta Component', () => {
    test('renders download resume banner and links', () => {
      render(<ResumeCta />);
      
      expect(screen.getByRole('heading', { name: /Want the complete story\?/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Download Complete Resume/i })).toHaveAttribute('download', 'Shubham_Sharma_Resume.pdf');
      expect(screen.getByRole('link', { name: /View LinkedIn Profile/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 12. CONTACT COMPONENT
  // =========================================================================
  describe('Contact Component', () => {
    test('renders contact details and copy email button safely', () => {
      const mockTriggerToast = vi.fn();
      render(<Contact triggerToast={mockTriggerToast} />);
      
      expect(screen.getByText(/Let's Build Better Solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/Direct Email/i)).toBeInTheDocument();

      // Click copy button
      const copyBtn = screen.getByRole('button', { name: /Copy email/i });
      fireEvent.click(copyBtn);
      expect(mockTriggerToast).toHaveBeenCalled();
    });

    test('updates form inputs and submits message directly to shub.tech10@gmail.com with toast feedback', async () => {
      const mockTriggerToast = vi.fn();
      render(<Contact triggerToast={mockTriggerToast} />);
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      const emailInput = screen.getByLabelText(/Email Address/i);
      const subjectInput = screen.getByLabelText(/Subject \/ Role Opportunity/i);
      const messageInput = screen.getByLabelText(/Message Details/i);

      fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
      fireEvent.change(emailInput, { target: { value: 'alex@firm.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Senior BA Opportunity' } });
      fireEvent.change(messageInput, { target: { value: 'We would love to discuss a role.' } });

      const submitBtn = screen.getByRole('button', { name: /Send Direct Message/i });
      
      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(mockTriggerToast).toHaveBeenCalledWith(expect.stringContaining('Alex Morgan'));
      expect(mockTriggerToast).toHaveBeenCalledWith(expect.stringContaining('shub.tech10@gmail.com'));
      expect(nameInput.value).toBe('');
    });

    test('auto-populates subject and message when recruiter preset chip is selected', () => {
      render(<Contact />);
      
      const baRoleChip = screen.getByRole('button', { name: /Senior BA Role/i });
      fireEvent.click(baRoleChip);

      const subjectInput = screen.getByLabelText(/Subject \/ Role Opportunity/i);
      const messageInput = screen.getByLabelText(/Message Details/i);

      expect(subjectInput.value).toBe('Senior Business Analyst Opportunity — Techno-Functional');
      expect(messageInput.value).toContain('Senior Business Analyst / Consulting role');

      // Click Capital Markets preset
      const cmChip = screen.getByRole('button', { name: /Capital Markets Project/i });
      fireEvent.click(cmChip);

      expect(subjectInput.value).toBe('Capital Markets Domain Project / Consulting');
      expect(messageInput.value).toContain('Middle-Office Trade Lifecycle');
    });
  });

  // =========================================================================
  // 13. FOOTER COMPONENT
  // =========================================================================
  describe('Footer Component', () => {
    test('renders footer logo, copyright, and social links', () => {
      render(<Footer />);
      
      expect(screen.getByText(/Techno-Functional Business Analyst · Capital Markets & Asset Management/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 14. BACK TO TOP COMPONENT
  // =========================================================================
  describe('BackToTop Component', () => {
    test('renders with visible class when scrolled and triggers window.scrollTo on click', () => {
      const { rerender } = render(<BackToTop scrolled={false} />);
      const btn = screen.getByRole('button', { name: /Back to top/i });
      expect(btn).not.toHaveClass('visible');

      rerender(<BackToTop scrolled={true} />);
      expect(btn).toHaveClass('visible');

      fireEvent.click(btn);
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  // =========================================================================
  // 15. RECRUITER DOCK COMPONENT
  // =========================================================================
  describe('RecruiterDock Component', () => {
    test('renders exploration progress dock with percentage and navigates to sections', () => {
      render(<RecruiterDock activeSection="hero" />);
      
      expect(screen.getByRole('region', { name: /Recruiter Exploration Progress Dock/i })).toBeInTheDocument();
      expect(screen.getByText(/Explored:/i)).toBeInTheDocument();
      expect(screen.getByText(/20%/i)).toBeInTheDocument();

      // Test section jump button
      const workPill = screen.getByRole('button', { name: /Work/i });
      fireEvent.click(workPill);
    });

    test('toggles dock minimization on collapse/expand button click', () => {
      render(<RecruiterDock activeSection="hero" />);
      
      const dock = screen.getByRole('region', { name: /Recruiter Exploration Progress Dock/i });
      const toggleBtn = screen.getByRole('button', { name: /Minimize exploration dock/i });

      expect(dock).not.toHaveClass('dock-minimized');

      // Click to minimize
      fireEvent.click(toggleBtn);
      expect(dock).toHaveClass('dock-minimized');
      expect(screen.getByRole('button', { name: /Expand exploration dock/i })).toBeInTheDocument();

      // Click to expand again
      fireEvent.click(screen.getByRole('button', { name: /Expand exploration dock/i }));
      expect(dock).not.toHaveClass('dock-minimized');
    });
  });

  // =========================================================================
  // 16. ASK SHUBHAM COMPONENT (Ayush Sharma Inspired Interactive Console)
  // =========================================================================
  describe('AskShubham Component', () => {
    test('renders terminal header, prompt headline, and initial question chips', () => {
      render(<AskShubham />);

      expect(screen.getByText('// ask_shubham.exe')).toBeInTheDocument();
      expect(screen.getByText(/Skip the bio\./i)).toBeInTheDocument();
      expect(screen.getByText(/Just ask\./i)).toBeInTheDocument();
      expect(screen.getByText(/Short answers only\./i)).toBeInTheDocument();

      // Verify question chips
      expect(screen.getByRole('button', { name: /What roles are you currently open to\?/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Capital Markets & Middle-Office experience\?/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /engineering background help you as a BA\?/i })).toBeInTheDocument();
    });

    test('interactively asks a question, displays typing state, and shows concise answer with action link', () => {
      vi.useFakeTimers();
      render(<AskShubham />);

      const roleChip = screen.getByRole('button', { name: /What roles are you currently open to\?/i });
      fireEvent.click(roleChip);

      // Question is now posted into thread
      expect(screen.getByText(/What roles are you currently open to\?/i)).toBeInTheDocument();

      // Advance timers to complete simulated typing
      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Bot answer rendered
      expect(screen.getByText(/Senior Business Analyst, Techno-Functional Consultant/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Connect regarding opportunities/i })).toHaveAttribute('href', '#contact');

      vi.useRealTimers();
    });

    test('displays all answers at once when show all button is clicked and allows restart', () => {
      render(<AskShubham />);

      const showAllBtn = screen.getByRole('button', { name: /show all answers at once/i });
      fireEvent.click(showAllBtn);

      expect(screen.getByText(/Here is the complete direct briefing:/i)).toBeInTheDocument();
      expect(screen.getByText(/All questions answered!/i)).toBeInTheDocument();

      // Restart conversation
      const restartBtn = screen.getByRole('button', { name: /restart/i });
      fireEvent.click(restartBtn);

      expect(screen.getByRole('button', { name: /What roles are you currently open to\?/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 17. SELECTED WORK COMPONENT
  // =========================================================================
  describe('SelectedWork Component', () => {
    test('renders flagship trade lifecycle case study by default and toggles to all initiatives', () => {
      render(<SelectedWork />);

      expect(screen.getByText('// selected_work/')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /Case Studies & Systems Architecture/i })).toBeInTheDocument();

      // Default tab: Flagship Case Study
      expect(screen.getByText(/7-Stage End-to-End Trade Lifecycle Flow:/i)).toBeInTheDocument();

      // Toggle to All Technical Initiatives
      const initiativesTab = screen.getByRole('tab', { name: /All Technical Initiatives/i });
      fireEvent.click(initiativesTab);

      // Shows Featured Work initiatives
      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();
      expect(screen.getByText(/BFSI Document Research Assistant/i)).toBeInTheDocument();
    });

    test('switches tab when window hash changes to #projects', () => {
      render(<SelectedWork />);

      act(() => {
        window.location.hash = '#projects';
        window.dispatchEvent(new Event('hashchange'));
      });

      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 18. JOURNEY AND CAPABILITIES COMPONENT
  // =========================================================================
  describe('JourneyAndCapabilities Component', () => {
    test('renders multi-view segmented tabs and toggles between views', () => {
      render(<JourneyAndCapabilities />);

      expect(screen.getByText('// evolution_and_depth/')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /Journey & Core Capabilities/i })).toBeInTheDocument();

      // Tab 1: Career Progression
      expect(screen.getByRole('heading', { name: /^SYSTEMS ENGINEER TRAINEE$/i })).toBeInTheDocument();

      // Tab 2: Core Capabilities & Skills
      const skillsTab = screen.getByRole('tab', { name: /Core Capabilities & Skills/i });
      fireEvent.click(skillsTab);
      expect(screen.getByText('User Stories')).toBeInTheDocument();
      expect(screen.getByText(/CURRENT CAPABILITIES \(IN PRACTICE\):/i)).toBeInTheDocument();

      // Tab 3: Engineering & AI Architecture
      const engAiTab = screen.getByRole('tab', { name: /Engineering & AI Architecture/i });
      fireEvent.click(engAiTab);
      expect(screen.getByText(/Frontend Architecture & UI/i)).toBeInTheDocument();
      expect(screen.getByText(/Building Toward Production AI Systems/i)).toBeInTheDocument();

      // Tab 4: Positioning & Certifications
      const credTab = screen.getByRole('tab', { name: /Positioning & Certifications/i });
      fireEvent.click(credTab);
      expect(screen.getByRole('heading', { name: /TECHNO-FUNCTIONAL SOLUTIONS/i })).toBeInTheDocument();
      expect(screen.getByText(/Infosys Certified Business Consultant/i)).toBeInTheDocument();
    });

    test('switches tab when window hash changes to #engineering or #skills', () => {
      render(<JourneyAndCapabilities />);

      act(() => {
        window.location.hash = '#engineering';
        window.dispatchEvent(new Event('hashchange'));
      });

      expect(screen.getByText(/Frontend Architecture & UI/i)).toBeInTheDocument();

      act(() => {
        window.location.hash = '#skills';
        window.dispatchEvent(new Event('hashchange'));
      });

      expect(screen.getByText('User Stories')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 19. FULL APP INTEGRATION & OPTION 5 ARCHITECTURE
  // =========================================================================
  describe('Full App Integration', () => {
    test('renders complete application with toast container and scroll handler', () => {
      const { container } = render(<App />);
      
      expect(container.querySelector('.portfolio-app')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Shubham Sharma/i);
      expect(screen.getByRole('heading', { level: 2, name: /Techno-Functional/i })).toBeInTheDocument();

      // Scroll trigger test
      act(() => {
        window.scrollY = 100;
        fireEvent.scroll(window);
      });

      // Verify navbar receives scroll update
      expect(container.querySelector('.navbar')).toHaveClass('scrolled');
    });

    test('toggles Concept Studio and switches between 5 UI options', () => {
      render(<App />);

      // Top ribbon compare button
      const studioBtn = screen.getByRole('button', { name: /Compare All 5 UI Concepts/i });
      expect(studioBtn).toBeInTheDocument();

      fireEvent.click(studioBtn);

      expect(screen.getByText(/Select Your/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /AI-Native Dynamic Canvas & Command Deck/i })).toBeInTheDocument();

      // Click Option 01 Bento
      const bentoTab = screen.getByRole('tab', { name: /Bento Grid Command/i });
      fireEvent.click(bentoTab);

      expect(screen.getByRole('heading', { name: /Bento Grid Command Dashboard/i })).toBeInTheDocument();

      // Return to live layout
      const returnBtn = screen.getByRole('button', { name: /Back to Current View/i });
      fireEvent.click(returnBtn);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('navigates through dynamic canvas sheets via command deck chips and center tabs', () => {
      render(<App />);

      // Verify Command Deck chips (role="tab")
      const tradeChip = screen.getByRole('tab', { name: /\/\/ trade_lifecycle/i });
      const initiativesChip = screen.getByRole('tab', { name: /\/\/ initiatives/i });
      expect(tradeChip).toBeInTheDocument();
      expect(initiativesChip).toBeInTheDocument();

      // Switch to initiatives sheet
      fireEvent.click(initiativesChip);

      // Canvas updates with technical initiatives
      expect(screen.getByText(/canvas\/technical_initiatives\.json/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Technical Initiatives/i })).toBeInTheDocument();

      // Switch to terminal sheet via command chip
      const terminalChip = screen.getByRole('tab', { name: /\/\/ ask_terminal/i });
      fireEvent.click(terminalChip);

      // Verify Ask Shubham interactive terminal is projected in canvas
      expect(screen.getByText(/canvas\/ask_shubham_cli\.sh/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 20. UI CONCEPT SHOWCASE COMPONENT
  // =========================================================================
  describe('UIConceptShowcase Component', () => {
    test('renders 5 concept tabs and switches between options', () => {
      const mockSelect = vi.fn();
      const mockFinalize = vi.fn();
      render(
        <UIConceptShowcase
          activeConceptId="bento"
          onSelectConcept={mockSelect}
          onCloseStudio={vi.fn()}
          onFinalizeSelection={mockFinalize}
        />
      );

      expect(screen.getByRole('heading', { name: /Select Your/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Bento Grid Command Dashboard/i })).toBeInTheDocument();

      // Click Option 03 Split-Pane
      const splitTab = screen.getByRole('tab', { name: /Split-Pane Storyboard/i });
      fireEvent.click(splitTab);
      expect(mockSelect).toHaveBeenCalledWith('split');

      // Click Finalize
      const finalizeBtn = screen.getAllByRole('button', { name: /Finalize Option/i });
      fireEvent.click(finalizeBtn[0]);
      expect(mockFinalize).toHaveBeenCalled();
    });
  });

});
