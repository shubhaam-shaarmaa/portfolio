import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';
import ProfessionalIdentity from '../ProfessionalIdentity';
import CareerJourney from '../CareerJourney';
import Skills from '../Skills';
import FeaturedWork from '../FeaturedWork';
import CapitalMarketsCaseStudies from '../CapitalMarketsCaseStudies';
import AiJourney from '../AiJourney';

describe('Techno-Functional Portfolio Component Suite', () => {

  // Test 1: Hero
  test('Hero renders primary techno-functional positioning and truthful credentials', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/TECHNO-FUNCTIONAL/i);
    expect(screen.getAllByText(/Senior Associate Consultant — Infosys/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/US Investment Mgmt Exposure/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise Experience/i)).toBeInTheDocument();
  });

  // Test 2: Professional Identity
  test('ProfessionalIdentity renders 3-part intersection and emerging AI pillar', () => {
    render(<ProfessionalIdentity />);
    expect(screen.getByText(/Business × Technology ×/i)).toBeInTheDocument();
    expect(screen.getByText(/TECHNO-FUNCTIONAL SOLUTIONS/i)).toBeInTheDocument();
    expect(screen.getByText(/EMERGING CAPABILITY/i)).toBeInTheDocument();
  });

  // Test 3: Career Journey
  test('CareerJourney renders 5-stage progressive career evolution', () => {
    render(<CareerJourney />);
    expect(screen.getByText(/SYSTEMS ENGINEER TRAINEE/i)).toBeInTheDocument();
    expect(screen.getByText(/SENIOR ASSOCIATE CONSULTANT/i)).toBeInTheDocument();
    expect(screen.getByText(/The Core Career Narrative:/i)).toBeInTheDocument();
  });

  // Test 4: Core Capabilities
  test('Skills component renders 4 distinct capability areas and partitions AI into Current vs Building', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /BUSINESS ANALYSIS/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /CAPITAL MARKETS/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /TECHNOLOGY/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /AI & GENAI/i })).toBeInTheDocument();
    expect(screen.getByText(/CURRENT CAPABILITIES \(IN PRACTICE\):/i)).toBeInTheDocument();
    expect(screen.getByText(/BUILDING TOWARD \(ACTIVE ROADMAP\):/i)).toBeInTheDocument();
  });

  // Test 5: Featured Work & Spec Modal
  test('FeaturedWork renders project cards and opens deliverable spec modal', () => {
    render(<FeaturedWork />);
    expect(screen.getByText(/Institutional Trade Lifecycle & Exception Resolver/i)).toBeInTheDocument();
    
    // Open spec modal
    const inspectBtn = screen.getAllByRole('button', { name: /Inspect Spec Artifact/i })[0];
    fireEvent.click(inspectBtn);

    expect(screen.getByText(/Specification Context:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close Artifact/i })).toBeInTheDocument();
  });

  // Test 6: Capital Markets Case Studies & 7-Stage Lifecycle
  test('CapitalMarketsCaseStudies renders 7 stages and toggles active stage and resolves exception', () => {
    render(<CapitalMarketsCaseStudies />);
    expect(screen.getByText(/7-Stage End-to-End Trade Lifecycle Flow:/i)).toBeInTheDocument();
    
    // Switch to Settlement stage by clicking the label text
    const settlementLabel = screen.getByText('Settlement (T+1)');
    fireEvent.click(settlementLabel);
    expect(screen.getByText(/Stage 05 of 07/i)).toBeInTheDocument();

    // Test Exception Resolver
    const triageBtns = screen.getAllByRole('button', { name: /Execute Triage/i });
    fireEvent.click(triageBtns[0]);
    expect(screen.getByText(/Resolved: 1 \/ 3/i)).toBeInTheDocument();
  });

  // Test 7: AI Journey
  test('AiJourney renders 8-project roadmap and evolving architecture', () => {
    render(<AiJourney />);
    expect(screen.getByText(/Building Toward Production AI Systems/i)).toBeInTheDocument();
    expect(screen.getAllByText(/BFSI Research Assistant/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/AI Architecture — Building Progressively/i)).toBeInTheDocument();
  });

});
