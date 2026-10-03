import React from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

// Components under test
import CommandDeck, { COMMANDS } from '../CommandDeck';
import DynamicCanvasSheet, { CANVAS_SHEETS } from '../DynamicCanvasSheet';
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
import App from '../../App';

describe('Techno-Functional Portfolio Comprehensive Regression Suite', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  // =========================================================================
  // 1. COMMAND DECK ARCHITECTURE & SYSTEM TERMINAL
  // =========================================================================
  describe('CommandDeck System Terminal & Quick Profile', () => {
    test('renders system prompt and domain consulting specialization badge', () => {
      render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);
      
      expect(screen.getByText(/\[shubham@portfolio ~\]/i)).toBeInTheDocument();
      expect(screen.getByText(/Domain Consulting × Modern Software Engineering × AI/i)).toBeInTheDocument();
    });

    test('renders brand identity, active online badge, and company role', () => {
      render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);
      
      expect(screen.getByAltText('Shubham Sharma')).toBeInTheDocument();
      expect(screen.getByTitle(/Actively Open for Opportunities/i)).toBeInTheDocument();
      expect(screen.getByText(/Infosys Senior Associate Consultant/i)).toBeInTheDocument();
      expect(screen.getByText(/Himachal Pradesh, India/i)).toBeInTheDocument();
    });

    test('renders full contact and social direct action buttons with secure attributes', () => {
      render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);
      
      const resumeLink = screen.getByRole('link', { name: /Download Resume/i });
      expect(resumeLink).toHaveAttribute('download', 'Shubham_Sharma_Resume.pdf');
      
      const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
      
      const githubLink = screen.getByRole('link', { name: /GitHub/i });
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('highlights the active command chip matching activeSheet prop', () => {
      render(<CommandDeck activeSheet="initiatives" onSelectSheet={vi.fn()} />);
      const initiativesChip = screen.getByRole('tab', { name: /\/\/ initiatives/i });
      expect(initiativesChip).toHaveClass('active');
    });
  });

  // =========================================================================
  // 2. COMMAND DECK COMPONENT (OPTION 5 HERO ARCHITECTURE)
  // =========================================================================
  describe('CommandDeck Component', () => {
    test('renders system terminal bar and online presence indicator', () => {
      render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);

      // System prompt & status
      expect(screen.getByText(/\[shubham@portfolio ~\]/i)).toBeInTheDocument();
      expect(screen.getByText(/Domain Consulting × Modern Software Engineering × AI/i)).toBeInTheDocument();

      // Avatar & presence
      expect(screen.getByAltText(/Shubham Sharma/i)).toBeInTheDocument();
      expect(screen.getByTitle(/Actively Open for Opportunities/i)).toBeInTheDocument();
      expect(screen.getByText(/Infosys Senior Associate Consultant/i)).toBeInTheDocument();
    });

    test('renders name, headline, direct CTAs, and 4 verified credibility metrics', () => {
      render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);

      // Name & headline
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Shubham Sharma/i);
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Techno-Functional Business Analyst/i);

      // CTAs
      expect(screen.getByRole('link', { name: /Download Resume/i })).toHaveAttribute('href', expect.stringContaining('.pdf'));
      expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /shub\.tech10@gmail\.com/i })).toBeInTheDocument();

      // 4 Metrics
      expect(screen.getByText(/4\+ Years/i)).toBeInTheDocument();
      expect(screen.getByText(/US Investment/i)).toBeInTheDocument();
      expect(screen.getByText(/78% Reduction/i)).toBeInTheDocument();
      expect(screen.getByText(/99\.9% T\+1/i)).toBeInTheDocument();
    });

    test('filters command chips via live search input and triggers onSelectSheet', () => {
      const mockSelect = vi.fn();
      render(<CommandDeck activeSheet="trade" onSelectSheet={mockSelect} />);

      // All 7 command chips initially visible
      expect(screen.getAllByRole('tab').length).toBe(COMMANDS.length);

      // Search for 'initiatives'
      const searchInput = screen.getByPlaceholderText(/filter commands/i);
      fireEvent.change(searchInput, { target: { value: 'initiatives' } });

      // Only initiatives chip remains
      expect(screen.getByRole('tab', { name: /\/\/ initiatives/i })).toBeInTheDocument();
      expect(screen.queryByRole('tab', { name: /\/\/ ai_roadmap/i })).not.toBeInTheDocument();

      // Click filtered chip
      fireEvent.click(screen.getByRole('tab', { name: /\/\/ initiatives/i }));
      expect(mockSelect).toHaveBeenCalledWith('initiatives');

      // Clear search
      const clearBtn = screen.getByRole('button', { name: /clear search/i });
      fireEvent.click(clearBtn);
      expect(screen.getAllByRole('tab').length).toBe(COMMANDS.length);
    });

    test('renders workstation terminal window header, active file tag, and ready pill', () => {
      const { rerender } = render(<CommandDeck activeSheet="trade" onSelectSheet={vi.fn()} />);

      expect(screen.getByText(/\/\/\s*trade_lifecycle_spec\.json/i)).toBeInTheDocument();
      expect(screen.getByText(/READY/i)).toBeInTheDocument();

      rerender(<CommandDeck activeSheet="ai" onSelectSheet={vi.fn()} />);
      expect(screen.getByText(/\/\/\s*ai_architecture_roadmap\.json/i)).toBeInTheDocument();
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
      expect(screen.getByRole('heading', { level: 3, name: /TECHNO-FUNCTIONAL SOLUTIONS/i })).toBeInTheDocument();

      // Narrative quote / centerpiece tagline
      expect(screen.getByText(/Translating business vision into resilient/i)).toBeInTheDocument();
      
      // Emerging AI banner
      expect(screen.getByText(/EMERGING CAPABILITY/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 4. CAREER JOURNEY COMPONENT
  // =========================================================================
  describe('CareerJourney Component', () => {
    test('renders 5-stage progressive timeline from Trainee to Senior Associate Consultant', () => {
      render(<CareerJourney />);
      
      expect(screen.getByRole('heading', { name: /SYSTEMS ENGINEER TRAINEE/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /^SYSTEMS ENGINEER$/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /SENIOR SYSTEMS ENGINEER/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /^ASSOCIATE CONSULTANT$/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /SENIOR ASSOCIATE CONSULTANT/i })).toBeInTheDocument();

      // Consecutive progression core narrative
      expect(screen.getByText(/The Core Career Narrative:/i)).toBeInTheDocument();
    });

    test('allows selecting milestone pills and toggles active highlight', () => {
      render(<CareerJourney />);
      
      const milestoneBtn = screen.getByRole('button', { name: /Techno-Functional/i });
      fireEvent.click(milestoneBtn);
      
      // Clicking same again deselects
      fireEvent.click(milestoneBtn);
    });
  });

  // =========================================================================
  // 5. SKILLS COMPONENT
  // =========================================================================
  describe('Skills Component', () => {
    test('renders 4 capability areas and strictly partitions AI into Current vs Building', () => {
      render(<Skills />);

      expect(screen.getByRole('heading', { name: /BUSINESS ANALYSIS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /CAPITAL MARKETS/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /TECHNOLOGY/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /AI & GENAI/i })).toBeInTheDocument();

      // AI partitioning check
      expect(screen.getByText(/CURRENT CAPABILITIES \(IN PRACTICE\):/i)).toBeInTheDocument();
      expect(screen.getByText(/BUILDING TOWARD \(ACTIVE ROADMAP\):/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 6. FEATURED WORK COMPONENT
  // =========================================================================
  describe('FeaturedWork Component', () => {
    test('renders project cards and filters projects by status', () => {
      render(<FeaturedWork />);

      // Flagship project present
      expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();

      // Filter by Completed
      const completedFilter = screen.getByRole('button', { name: /Completed/i });
      fireEvent.click(completedFilter);
      expect(completedFilter).toHaveClass('active');

      // Filter by In Progress
      const inProgressFilter = screen.getByRole('button', { name: /In Progress/i });
      fireEvent.click(inProgressFilter);
      expect(inProgressFilter).toHaveClass('active');
    });

    test('filters projects by domain category pills', () => {
      render(<FeaturedWork />);

      const aiPill = screen.getByRole('button', { name: /^AI & GenAI$/i });
      fireEvent.click(aiPill);
      expect(aiPill).toHaveClass('active');
      expect(screen.getByText(/BFSI Document Research Assistant/i)).toBeInTheDocument();
    });

    test('toggles inline Quick Peek code preview', () => {
      render(<FeaturedWork />);

      const quickPeekBtns = screen.getAllByRole('button', { name: /Quick Peek/i });
      expect(quickPeekBtns.length).toBeGreaterThan(0);

      // Open quick peek
      fireEvent.click(quickPeekBtns[0]);
      expect(screen.getByRole('button', { name: /Hide Quick Peek/i })).toBeInTheDocument();

      // Close quick peek
      fireEvent.click(screen.getByRole('button', { name: /Hide Quick Peek/i }));
      expect(screen.queryByRole('button', { name: /Hide Quick Peek/i })).not.toBeInTheDocument();
    });

    test('opens deliverable spec modal, verifies accessibility dialog, and closes via close button and Escape key', () => {
      render(<FeaturedWork />);

      const inspectBtns = screen.getAllByRole('button', { name: /Inspect Spec Artifact/i });
      fireEvent.click(inspectBtns[0]);

      // Accessible modal dialog
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      expect(screen.getByText(/Specification Context:/i)).toBeInTheDocument();

      // Close with close button
      const closeBtn = screen.getByRole('button', { name: /Close modal/i });
      fireEvent.click(closeBtn);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      // Open again and close with Escape key
      fireEvent.click(inspectBtns[0]);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('renders friendly empty state when no initiatives match filter combination and resets cleanly', () => {
      render(<FeaturedWork />);

      // Filter Planned + Capital Markets -> produces 0 matches
      const plannedFilter = screen.getByRole('button', { name: /Planned/i });
      fireEvent.click(plannedFilter);

      const cmPill = screen.getByRole('button', { name: /^Capital Markets$/i });
      fireEvent.click(cmPill);

      expect(screen.getByText(/No initiatives match/i)).toBeInTheDocument();

      // Reset
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

      const stages = [
        'Trade Initiation', 'Order Management', 'Execution',
        'Confirmation', 'Settlement', 'Reconciliation', 'Reporting & Accounting'
      ];
      stages.forEach(st => {
        expect(screen.getByRole('button', { name: new RegExp(st, 'i') })).toBeInTheDocument();
      });

      // Click Settlement stage
      const settlementBtn = screen.getByRole('button', { name: /Settlement \(T\+1\)/i });
      fireEvent.click(settlementBtn);
      expect(screen.getByText(/Exchange of securities against cash payment via central clearing networks under T\+1/i)).toBeInTheDocument();
    });

    test('toggles between Executive Summary and Deep Technical Specs perspective views', () => {
      render(<CapitalMarketsCaseStudies />);

      // Default: Executive Summary mode
      expect(screen.getByText(/In-depth techno-functional analysis of institutional securities workflows/i)).toBeInTheDocument();
      expect(screen.getByText(/78% Reduction/i)).toBeInTheDocument();

      // Switch to Technical mode
      const techBtn = screen.getAllByRole('button', { name: /Deep Technical Specs/i })[0];
      fireEvent.click(techBtn);

      expect(screen.getByRole('button', { name: /Requirements & User Stories/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Data Model & API Architecture/i })).toBeInTheDocument();
    });

    test('switches across all 4 case study tabs in Deep Technical Specs mode', () => {
      render(<CapitalMarketsCaseStudies />);

      // Switch to technical
      fireEvent.click(screen.getAllByRole('button', { name: /Deep Technical Specs/i })[0]);

      // Tab 2: Requirements & User Stories
      const reqTab = screen.getByRole('button', { name: /Requirements & User Stories/i });
      fireEvent.click(reqTab);
      expect(screen.getByText(/Core Functional Requirements/i)).toBeInTheDocument();

      // Tab 3: Data & API Specifications
      const dataTab = screen.getByRole('button', { name: /Data Model & API Architecture/i });
      fireEvent.click(dataTab);
      expect(screen.getByText(/Key Data Requirements & Schemas/i)).toBeInTheDocument();

      // Tab 4: UAT & Traceability
      const uatTab = screen.getByRole('button', { name: /UAT Scenarios & Business Impact/i });
      fireEvent.click(uatTab);
      expect(screen.getByText(/UAT Scenarios & Validation Criteria/i)).toBeInTheDocument();
    });

    test('operates exception triage simulator and tracks resolution status', () => {
      render(<CapitalMarketsCaseStudies />);

      expect(screen.getByText(/Middle-Office Exception Triage Simulator/i)).toBeInTheDocument();

      const resolveBtns = screen.getAllByRole('button', { name: /Execute Triage/i });
      expect(resolveBtns.length).toBe(3);

      // Resolve first exception
      fireEvent.click(resolveBtns[0]);
      expect(screen.getByText(/Action:/i)).toBeInTheDocument();

      // Resolve remaining
      const remainingBtns = screen.getAllByRole('button', { name: /Execute Triage/i });
      remainingBtns.forEach(btn => fireEvent.click(btn));

      expect(screen.getByText(/All breaks resolved!/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 8. AI JOURNEY COMPONENT
  // =========================================================================
  describe('AiJourney Component', () => {
    test('renders 8-project capability roadmap and progressive architecture', () => {
      render(<AiJourney />);

      expect(screen.getByText('Building Toward Production AI Systems')).toBeInTheDocument();
      expect(screen.getAllByText('RAG').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Agents').length).toBeGreaterThan(0);
      expect(screen.getAllByText('MCP').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Model Routing').length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // 9. ENGINEERING FOUNDATION COMPONENT
  // =========================================================================
  describe('EngineeringFoundation Component', () => {
    test('renders 4 technical pillars and evidence chips', () => {
      render(<EngineeringFoundation />);

      expect(screen.getByText(/Frontend Architecture & UI/i)).toBeInTheDocument();
      expect(screen.getByText(/Data Auditing & Schemas/i)).toBeInTheDocument();
      expect(screen.getByText(/API Contracts & Integration/i)).toBeInTheDocument();
      expect(screen.getByText(/DevSecOps & Cloud Hygiene/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 10. CERTIFICATIONS COMPONENT
  // =========================================================================
  describe('Certifications Component', () => {
    test('renders credentials and honors cards', () => {
      render(<Certifications />);

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

      expect(screen.getByText(/Want the complete story\?/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Download Complete Resume/i })).toHaveAttribute('href', expect.stringContaining('.pdf'));
      expect(screen.getByRole('link', { name: /View LinkedIn Profile/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 12. CONTACT COMPONENT
  // =========================================================================
  describe('Contact Component', () => {
    test('renders contact details and copy email button safely', () => {
      const mockToast = vi.fn();
      render(<Contact triggerToast={mockToast} />);

      expect(screen.getAllByText(/shub\.tech10@gmail\.com/i).length).toBeGreaterThan(0);
      
      const copyBtn = screen.getByRole('button', { name: /Copy email/i });
      fireEvent.click(copyBtn);
      expect(mockToast).toHaveBeenCalled();
    });

    test('updates form inputs and submits message directly to shub.tech10@gmail.com with toast feedback', async () => {
      const mockToast = vi.fn();
      window.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });

      render(<Contact triggerToast={mockToast} />);

      const nameInput = screen.getByLabelText(/Full Name/i);
      const emailInput = screen.getByLabelText(/Email Address/i);
      const subjectInput = screen.getByLabelText(/Subject/i);
      const msgInput = screen.getByLabelText(/Message/i);
      const submitBtn = screen.getByRole('button', { name: /Send Direct Message/i });

      fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
      fireEvent.change(emailInput, { target: { value: 'alex@capitalpartners.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Senior BA Discussion' } });
      fireEvent.change(msgInput, { target: { value: 'We would love to discuss a Senior BA role.' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(window.fetch).toHaveBeenCalledWith(
        expect.stringContaining('formsubmit.co'),
        expect.objectContaining({ method: 'POST' })
      );
      expect(mockToast).toHaveBeenCalledWith(expect.stringContaining('Your message has been sent directly'));
    });

    test('auto-populates subject and message when recruiter preset chip is selected', () => {
      const mockToast = vi.fn();
      render(<Contact triggerToast={mockToast} />);

      const presetChip = screen.getByRole('button', { name: /Senior BA Role/i });
      fireEvent.click(presetChip);

      expect(screen.getByLabelText(/Subject/i)).toHaveValue('Senior Business Analyst Opportunity — Techno-Functional');
      expect(mockToast).toHaveBeenCalledWith(expect.stringContaining('Template loaded'));
    });
  });

  // =========================================================================
  // 13. FOOTER COMPONENT
  // =========================================================================
  describe('Footer Component', () => {
    test('renders footer logo, copyright, and social links', () => {
      render(<Footer />);

      expect(screen.getAllByText(/Techno-Functional Business Analyst/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/© 2026 Shubham Sharma/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^LinkedIn$/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 14. BACK TO TOP COMPONENT
  // =========================================================================
  describe('BackToTop Component', () => {
    test('renders with visible class when scrolled and triggers window.scrollTo on click', () => {
      window.scrollTo = vi.fn();
      const { container, rerender } = render(<BackToTop scrolled={false} />);

      expect(container.querySelector('.back-to-top')).not.toHaveClass('visible');

      rerender(<BackToTop scrolled={true} />);
      const btn = screen.getByRole('button', { name: /Back to top/i });
      expect(btn).toHaveClass('visible');

      fireEvent.click(btn);
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  // =========================================================================
  // 15. RECRUITER DOCK COMPONENT
  // =========================================================================
  describe('RecruiterDock Component', () => {
    test('renders true subsection exploration progress and dynamic guidance hints', () => {
      const handleSelect = vi.fn();
      render(<RecruiterDock activeSection="work" activeSheet="trade" onSelectSheet={handleSelect} />);

      expect(screen.getByRole('region', { name: /Recruiter Exploration Progress Dock/i })).toBeInTheDocument();
      expect(screen.getByTitle('14% Explored')).toBeInTheDocument();
      expect(screen.getByText(/14%/i)).toBeInTheDocument();
      expect(screen.getByText(/\(1\/7\)/i)).toBeInTheDocument();

      // Guided hint button for next unvisited subsection (02 Initiatives)
      const hintBtn = screen.getByRole('button', { name: /Hint: Explore Initiatives/i });
      expect(hintBtn).toBeInTheDocument();

      fireEvent.click(hintBtn);
      expect(handleSelect).toHaveBeenCalledWith('initiatives');

      const askPill = screen.getByRole('button', { name: /^Ask$/i });
      fireEvent.click(askPill);
    });

    test('opens and interacts with application exploration guide checklist modal', () => {
      const handleSelect = vi.fn();
      render(<RecruiterDock activeSection="hero" activeSheet="trade" onSelectSheet={handleSelect} />);

      // Click progress wrap to open guide modal
      const progressWrap = screen.getByTitle(/Click to open Exploration Guide/i);
      fireEvent.click(progressWrap);

      const modal = screen.getByRole('dialog', { name: /Application Exploration Guide/i });
      expect(modal).toBeInTheDocument();
      expect(screen.getByText(/To achieve/i)).toBeInTheDocument();
      expect(screen.getByText(/1 of 7 Subsections Explored/i)).toBeInTheDocument();

      // Click an unvisited item card to navigate
      const careerCard = screen.getByRole('button', { name: /Career Journey/i });
      expect(careerCard).toBeInTheDocument();
      fireEvent.click(careerCard);
      expect(handleSelect).toHaveBeenCalledWith('career');

      // Modal closes after selection
      expect(screen.queryByRole('dialog', { name: /Application Exploration Guide/i })).not.toBeInTheDocument();
    });

    test('toggles dock minimization on collapse/expand button click', () => {
      const { container } = render(<RecruiterDock activeSection="hero" />);
      const minimizeBtn = screen.getByRole('button', { name: /Minimize exploration dock/i });

      fireEvent.click(minimizeBtn);
      expect(container.querySelector('.recruiter-dock')).toHaveClass('dock-minimized');

      const expandBtn = screen.getByRole('button', { name: /Expand exploration dock/i });
      fireEvent.click(expandBtn);
      expect(container.querySelector('.recruiter-dock')).not.toHaveClass('dock-minimized');
    });
  });

  // =========================================================================
  // 16. ASK SHUBHAM COMPONENT
  // =========================================================================
  describe('AskShubham Component', () => {
    test('renders terminal header, prompt headline, and initial question chips', () => {
      render(<AskShubham />);

      expect(screen.getByText('// ask_shubham.exe')).toBeInTheDocument();
      expect(screen.getByText(/What roles are you currently open to\?/i)).toBeInTheDocument();
      expect(screen.getByText(/What's your Capital Markets & Middle-Office experience\?/i)).toBeInTheDocument();
    });

    test('interactively asks a question, displays typing state, and shows concise answer with action link', () => {
      vi.useFakeTimers();
      render(<AskShubham />);

      const qChip = screen.getByRole('button', { name: /What roles are you currently open to\?/i });
      fireEvent.click(qChip);

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(screen.getByText(/Senior Business Analyst, Techno-Functional Consultant/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Connect regarding opportunities/i })).toBeInTheDocument();
      vi.useRealTimers();
    });

    test('displays all answers at once when show all button is clicked and allows restart', () => {
      render(<AskShubham />);

      const showAllBtn = screen.getByRole('button', { name: /Show All Answers/i });
      fireEvent.click(showAllBtn);

      expect(screen.getByText(/4\+ years at Infosys supporting a US investment management client/i)).toBeInTheDocument();
      expect(screen.getByText(/Promoted 4 consecutive times/i)).toBeInTheDocument();

      // Reset
      const resetBtn = screen.getByRole('button', { name: /restart/i });
      fireEvent.click(resetBtn);
      expect(screen.getByRole('button', { name: /What roles are you currently open to\?/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 17. DYNAMIC CANVAS SHEET COMPONENT (OPTION 5 WORKSPACE)
  // =========================================================================
  describe('DynamicCanvasSheet Component', () => {
    test('renders deliverable viewport header and bottom navigation rail', () => {
      render(<DynamicCanvasSheet activeSheet="trade" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);

      // Intro header in viewport
      expect(screen.getByText(/\/\/ flagship_case_study\.spec/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Institutional Trade Lifecycle/i })).toBeInTheDocument();

      // Bottom rail
      expect(screen.getByText(/ACTIVE DELIVERABLE:/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Next:.*Initiatives/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Prev:.*Contact/i })).toBeInTheDocument();
    });

    test('switches active sheet when bottom navigation prev/next buttons are clicked', () => {
      const mockSelect = vi.fn();
      render(<DynamicCanvasSheet activeSheet="trade" onSelectSheet={mockSelect} triggerToast={vi.fn()} />);

      // Click bottom rail next button
      const nextBtn = screen.getByRole('button', { name: /Next:.*Initiatives/i });
      fireEvent.click(nextBtn);
      expect(mockSelect).toHaveBeenCalledWith('initiatives');

      // Click bottom rail prev button
      const prevBtn = screen.getByRole('button', { name: /Prev:.*Contact/i });
      fireEvent.click(prevBtn);
      expect(mockSelect).toHaveBeenCalledWith('contact');
    });

    test('projects designated deliverable components when different sheets are active', () => {
      const { rerender } = render(<DynamicCanvasSheet activeSheet="initiatives" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);
      expect(screen.getByRole('heading', { name: /Technical Initiatives/i })).toBeInTheDocument();

      rerender(<DynamicCanvasSheet activeSheet="career" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);
      expect(screen.getByRole('heading', { name: /Career Trajectory & Core Capabilities/i })).toBeInTheDocument();

      rerender(<DynamicCanvasSheet activeSheet="ai" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);
      expect(screen.getByRole('heading', { name: /AI Roadmap & Enterprise Systems Architecture/i })).toBeInTheDocument();

      rerender(<DynamicCanvasSheet activeSheet="terminal" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);
      expect(screen.getByRole('heading', { name: /Interactive Q&A Terminal Console/i })).toBeInTheDocument();

      rerender(<DynamicCanvasSheet activeSheet="contact" onSelectSheet={vi.fn()} triggerToast={vi.fn()} />);
      expect(screen.getByRole('heading', { name: /Direct Contact & Role Opportunities/i })).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 18. FULL APP INTEGRATION & OPTION 5 LIVE FLOW
  // =========================================================================
  describe('Full App Integration', () => {
    test('renders complete application with command deck, dynamic canvas, and scroll handler', () => {
      const { container } = render(<App />);
      
      expect(container.querySelector('.portfolio-app')).toBeInTheDocument();
      expect(container.querySelector('.command-deck-section')).toBeInTheDocument();
      expect(container.querySelector('.dynamic-canvas-section')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Shubham Sharma/i);
      expect(screen.getByRole('heading', { level: 2, name: /Techno-Functional/i })).toBeInTheDocument();

      // Scroll trigger test
      act(() => {
        window.scrollY = 600;
        fireEvent.scroll(window);
      });

      // Verify back-to-top receives scroll update
      expect(container.querySelector('.back-to-top')).toHaveClass('visible');
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
      expect(screen.getByText(/\/\/\s*technical_initiatives\.json/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Technical Initiatives/i })).toBeInTheDocument();

      // Switch to terminal sheet via command chip
      const terminalChip = screen.getByRole('tab', { name: /\/\/ ask_terminal/i });
      fireEvent.click(terminalChip);

      // Verify Ask Shubham interactive terminal is projected in canvas
      expect(screen.getByText(/\/\/\s*ask_shubham_cli\.sh/i)).toBeInTheDocument();
    });

    test('syncs active sheet and section when window hash changes', () => {
      render(<App />);

      // Hash to #initiatives
      act(() => {
        window.location.hash = '#initiatives';
        window.dispatchEvent(new Event('hashchange'));
      });
      expect(screen.getByText(/\/\/\s*technical_initiatives\.json/i)).toBeInTheDocument();

      // Hash to #journey
      act(() => {
        window.location.hash = '#journey';
        window.dispatchEvent(new Event('hashchange'));
      });
      expect(screen.getByText(/\/\/\s*career_and_capabilities\.json/i)).toBeInTheDocument();

      // Hash to #contact
      act(() => {
        window.location.hash = '#contact';
        window.dispatchEvent(new Event('hashchange'));
      });
      expect(screen.getByText(/\/\/\s*direct_contact_form\.json/i)).toBeInTheDocument();
    });
  });

});
