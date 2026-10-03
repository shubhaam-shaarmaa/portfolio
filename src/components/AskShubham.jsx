import React, { useState, useRef, useEffect } from 'react';
import { DYNAMIC_EXPERIENCE_TEXT } from '../data/portfolioData';

export const ASK_ITEMS = [
  {
    id: 'roles',
    q: 'What roles are you currently open to?',
    a: 'Senior Business Analyst, Techno-Functional Consultant, and Capital Markets opportunities at the intersection of Financial Services, Technology, and AI.',
    link: { label: 'Connect regarding opportunities', href: '#contact' }
  },
  {
    id: 'capital-markets',
    q: "What's your Capital Markets & Middle-Office experience?",
    a: `${DYNAMIC_EXPERIENCE_TEXT} at Infosys supporting a US investment management client. Hands-on with the 7-stage trade lifecycle, pre-settlement constraint validation, SSI break triage, and T+1 DTCC cut-off windows.`,
    link: { label: 'Inspect Trade Lifecycle Case Study', href: '#case-studies' }
  },
  {
    id: 'tech-ba',
    q: 'How does your engineering background help you as a BA?',
    a: 'I write SQL data verification queries, map JSON REST API schemas, audit database tables, and run JAD sessions speaking fluent engineer language. Zero translation loss between business desks and dev squads.',
    link: { label: 'View Engineering Foundation', href: '#engineering' }
  },
  {
    id: 'ai-roadmap',
    q: 'What are you building in AI & GenAI?',
    a: 'Building toward production AI systems: BFSI document research RAG assistants, middle-office trade exception triage agents with MCP tools, and LLM evaluation benchmarks.',
    link: { label: 'Explore AI Roadmap', href: '#ai-journey' }
  },
  {
    id: 'career',
    q: 'What is your career trajectory at Infosys?',
    a: 'Promoted 4 consecutive times: Trainee (2022) → Systems Engineer (2022–2024) → Senior Systems Engineer (2024–2025) → Associate Consultant (2025–2026) → Senior Associate Consultant (2026–Present).',
    link: { label: 'View 5-Stage Career Journey', href: '#journey' }
  },
  {
    id: 'specs',
    q: 'Can I inspect a real work sample or spec artifact?',
    a: 'Yes — you can inspect full Gherkin user stories, middle-office SQL exception scripts, and JSON API schemas right in the selected work section.',
    link: { label: 'Inspect Spec Artifacts', href: '#projects' }
  }
];

export default function AskShubham({ isEmbedded = false }) {
  const [thread, setThread] = useState([
    {
      type: 'bot',
      text: 'hey. ask me anything below. answers are concise, truthful, and backed by real deliverables.'
    }
  ]);
  const [askedIds, setAskedIds] = useState(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  const timerRef = useRef(null);

  // Auto-scroll terminal when a new message or typing state changes
  useEffect(() => {
    if (terminalRef.current) {
      if (typeof terminalRef.current.scrollTo === 'function') {
        terminalRef.current.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }
  }, [thread, isTyping]);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const remainingItems = ASK_ITEMS.filter((item) => !askedIds.has(item.id));

  const handleAsk = (item) => {
    if (isTyping) return;

    // Add user question immediately
    setThread((prev) => [...prev, { type: 'user', text: item.q }]);
    setAskedIds((prev) => new Set([...prev, item.id]));
    setIsTyping(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setThread((prev) => [
        ...prev,
        {
          type: 'bot',
          text: item.a,
          link: item.link
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleShowAll = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTyping(false);
    setThread([
      {
        type: 'bot',
        text: 'Here is the complete direct briefing:'
      },
      ...ASK_ITEMS.map((item) => ({
        type: 'bot',
        title: item.q,
        text: item.a,
        link: item.link
      }))
    ]);
    setAskedIds(new Set(ASK_ITEMS.map((i) => i.id)));
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTyping(false);
    setThread([
      {
        type: 'bot',
        text: 'hey. ask me anything below. answers are concise, truthful, and backed by real deliverables.'
      }
    ]);
    setAskedIds(new Set());
  };

  const ContentWrapper = isEmbedded ? 'div' : 'section';
  const containerClass = isEmbedded ? 'embedded-ask-wrap' : 'ask-section';
  const innerClass = isEmbedded ? '' : 'container';

  return (
    <ContentWrapper id={isEmbedded ? undefined : 'ask'} className={containerClass}>
      <div className={innerClass}>
        <div className="ask-container-card">
          {/* Header Bar */}
          <div className="ask-header">
            <div className="ask-header-meta">
              <span className="ask-tag-mono">// ask_shubham.exe</span>
              <span className="ask-status-dot"></span>
              <span className="text-xs text-dim">interactive terminal</span>
            </div>
            <div className="ask-header-actions">
              {askedIds.size > 0 && (
                <button
                  type="button"
                  className="ask-reset-btn"
                  onClick={handleReset}
                  title="Reset conversation"
                >
                  <i className="fa-solid fa-rotate-left"></i> restart
                </button>
              )}
            </div>
          </div>

          <div className="ask-layout-grid">
            {/* Left Prompt Column */}
            <div className="ask-prompt-col">
              <h2 className="ask-title">
                Skip the bio.<br />
                <span>Just ask.</span>
              </h2>
              <p className="ask-subtitle">
                Short answers only. Pick a question, and every answer leads somewhere.
              </p>

              {/* Question Chips */}
              <div className="ask-chips-wrap">
                {remainingItems.length > 0 ? (
                  remainingItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="ask-chip"
                      disabled={isTyping}
                      onClick={() => handleAsk(item)}
                    >
                      <i className="fa-solid fa-arrow-turn-down text-cyan"></i> {item.q}
                    </button>
                  ))
                ) : (
                  <div className="ask-completed-note">
                    <i className="fa-solid fa-check-double text-emerald"></i> All questions answered! Feel free to explore the work below or restart.
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="ask-quick-actions">
                {remainingItems.length > 0 && (
                  <button
                    type="button"
                    className="ask-text-btn"
                    onClick={handleShowAll}
                  >
                    show all answers at once &rarr;
                  </button>
                )}
                <a href="#work" className="ask-text-link">
                  skip the chat, show me everything &rarr;
                </a>
              </div>
            </div>

            {/* Right Chat Terminal Output */}
            <div className="ask-terminal-col">
              <div ref={terminalRef} className="terminal-screen" role="log" aria-live="polite">
                {thread.map((msg, idx) => (
                  <div key={idx} className={`terminal-msg msg-${msg.type}`}>
                    {msg.title && (
                      <div className="msg-title">
                        <i className="fa-solid fa-terminal text-cyan"></i> {msg.title}
                      </div>
                    )}
                    <div className="msg-bubble">
                      {msg.text}
                      {msg.link && (
                        <div className="msg-link-row">
                          <a href={msg.link.href} className="msg-action-btn">
                            {msg.link.label} &rarr;
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="terminal-typing" aria-label="Typing response">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
