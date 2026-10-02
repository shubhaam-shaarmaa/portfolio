import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';
import CaseStudies from '../CaseStudies';
import DocExplorer from '../DocExplorer';
import TradeLifecycle from '../TradeLifecycle';

describe('Portfolio Component Suite', () => {

  // Test 1: Hero
  test('Hero renders candidate role title and key recruiter metrics', () => {
    render(<Hero />);
    const roleBadge = screen.getByText(/Retirement & Asset Management/i);
    expect(roleBadge).toBeInTheDocument();
    
    // Check metric
    const savingsMetric = screen.getByText(/\$120K\/Yr/i);
    expect(savingsMetric).toBeInTheDocument();
  });

  // Test 2: CaseStudies (Enterprise Project Explorer)
  test('CaseStudies explorer renders dashboard metrics and updates active tab', () => {
    render(<CaseStudies />);
    // Check metric totals
    expect(screen.getByText('10')).toBeInTheDocument();
    
    // Check if the search box exists
    const searchInput = screen.getByPlaceholderText(/Search project repositories/i);
    expect(searchInput).toBeInTheDocument();

    // Click API specification accordion and verify it expands
    const apiAccordionBtn = screen.getByText(/API Integration specifications/i);
    fireEvent.click(apiAccordionBtn);
    expect(screen.getByText(/POST \/api\/v1\/enrollment\/validate/i)).toBeInTheDocument();
  });

  // Test 3: DocExplorer (Business Analysis Framework)
  test('DocExplorer switcher updates selected document', () => {
    render(<DocExplorer />);
    
    // Check if the Discovery step exists by default
    expect(screen.getByText(/Stage 1: Discovery/i)).toBeInTheDocument();

    // Click step 2 button and check if description updates
    const step2Btn = screen.getByRole('button', { name: /Step 2: Requirement Gathering/i });
    fireEvent.click(step2Btn);
    expect(screen.getByText(/Stage 2: Requirement Gathering/i)).toBeInTheDocument();

    // Switch to Deliverables tab
    const deliverablesTabBtn = screen.getByRole('button', { name: /2\. Enterprise Deliverables/i });
    fireEvent.click(deliverablesTabBtn);

    // Verify BRD deliverable label is rendered
    expect(screen.getByRole('heading', { name: /Business Requirements \(BRD\)/i })).toBeInTheDocument();
  });

  // Test 4: TradeLifecycle (Operations Console)
  test('TradeLifecycle stepper node updates description and resolves exceptions', () => {
    render(<TradeLifecycle />);
    
    // Check default active stage (Portfolio Rebalancing)
    expect(screen.getByRole('heading', { name: /01\. Portfolio Rebalancing/i })).toBeInTheDocument();

    // Verify initial exception count badge exists
    const exceptionsButton = screen.getByRole('button', { name: /Exceptions Desk/i });
    expect(exceptionsButton).toBeInTheDocument();

    // Click Exceptions tab
    fireEvent.click(exceptionsButton);
    expect(screen.getByText(/Operations Exception Reconciliation Hub/i)).toBeInTheDocument();

    // Resolve an exception and verify status text
    const resolveButtons = screen.getAllByRole('button', { name: /Trigger Resolution/i });
    fireEvent.click(resolveButtons[0]);
    expect(screen.getByText(/Audit match complete/i)).toBeInTheDocument();
  });

});
