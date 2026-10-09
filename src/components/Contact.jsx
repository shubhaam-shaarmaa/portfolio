import React, { useState } from 'react';
import contactImg from '../assets/shubham_contact.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';

export const RECRUITER_PRESETS = [
  {
    id: 'ba-role',
    icon: 'fa-briefcase text-gold',
    label: '💼 Senior BA Role',
    subject: 'Senior Business Analyst Opportunity — Techno-Functional',
    msg: "Hi Shubham, I came across your portfolio and would like to connect regarding a Senior Business Analyst / Techno-Functional role with our team. Let's arrange a brief introductory discussion."
  },
  {
    id: 'capital-markets',
    icon: 'fa-chart-line text-cyan',
    label: '📈 Capital Markets Project',
    subject: 'Capital Markets Domain Project / Consulting',
    msg: "Hi Shubham, we are looking for a Techno-Functional BA with Capital Markets and Middle-Office Trade Lifecycle experience. Let's discuss our upcoming initiative."
  },
  {
    id: 'ai-genai',
    icon: 'fa-microchip text-purple',
    label: '🤖 AI & GenAI Engagement',
    subject: 'AI & GenAI Solutions Opportunity',
    msg: "Hi Shubham, saw your AI Journey roadmap and engineering foundations. Interested in discussing opportunities involving AI-assisted requirements and product delivery."
  },
  {
    id: 'chat',
    icon: 'fa-mug-hot text-emerald',
    label: '☕ Quick Coffee Chat',
    subject: 'Professional Networking & Introduction',
    msg: "Hi Shubham, impressive techno-functional portfolio! I'd love to connect and keep in touch regarding upcoming initiatives."
  }
];

export default function Contact({ triggerToast, isEmbedded = false }) {
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState(RECRUITER_PRESETS[0].subject);
  const [message, setMessage] = useState(RECRUITER_PRESETS[0].msg);
  const [selectedPreset, setSelectedPreset] = useState('ba-role');

  const targetEmail = PERSONAL_INFO.email;

  const buildFullMessage = () => {
    const signature = senderName.trim() ? `\n\nBest regards,\n${senderName.trim()}` : '';
    return `${message.trim()}${signature}`;
  };

  const getGmailUrl = () => {
    const fullBody = buildFullMessage();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  };

  const getOutlookUrl = () => {
    const fullBody = buildFullMessage();
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(targetEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  };

  const getMailtoUrl = () => {
    const fullBody = buildFullMessage();
    return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  };

  const handleLaunchApp = (destination) => {
    if (destination === 'gmail') {
      window.open(getGmailUrl(), '_blank', 'noopener,noreferrer');
      if (typeof triggerToast === 'function') {
        triggerToast('Opening Gmail web composer with your pre-filled inquiry...');
      }
    } else if (destination === 'outlook') {
      window.open(getOutlookUrl(), '_blank', 'noopener,noreferrer');
      if (typeof triggerToast === 'function') {
        triggerToast('Opening Outlook web composer with your pre-filled inquiry...');
      }
    } else if (destination === 'mailto') {
      window.location.href = getMailtoUrl();
      if (typeof triggerToast === 'function') {
        triggerToast(`Opening default email client to deliver to ${targetEmail}...`);
      }
    }
  };

  const handleCopyDraft = () => {
    const fullBody = buildFullMessage();
    const draftText = `To: ${targetEmail}\nSubject: ${subject}\n\n${fullBody}`;

    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(draftText)
        .then(() => {
          if (typeof triggerToast === 'function') {
            triggerToast('Email draft copied to clipboard! Paste directly into your email client.');
          }
        })
        .catch(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email: ${targetEmail}`);
          }
        });
    } else {
      if (typeof triggerToast === 'function') {
        triggerToast(`Email: ${targetEmail}`);
      }
    }
  };

  const copyEmail = () => {
    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(targetEmail)
        .then(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email copied to clipboard: ${targetEmail}`);
          }
        })
        .catch(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email: ${targetEmail}`);
          }
        });
    } else {
      if (typeof triggerToast === 'function') {
        triggerToast(`Email: ${targetEmail}`);
      }
    }
  };

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset.id);
    setSubject(preset.subject);
    setMessage(preset.msg);
    if (typeof triggerToast === 'function') {
      triggerToast(`Template loaded: "${preset.label}". Ready to dispatch!`);
    }
  };

  const ContentWrapper = isEmbedded ? 'div' : 'section';
  const containerClass = isEmbedded ? 'embedded-contact-wrap' : 'contact-section';
  const innerClass = isEmbedded ? '' : 'container';

  return (
    <ContentWrapper id={isEmbedded ? undefined : 'contact'} className={containerClass}>
      <div className={innerClass}>
        {/* Section Header */}
        {!isEmbedded && (
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Verified Direct Communications</span>
            <h2 className="section-title">
              Let's Build <span>Better Solutions</span>
            </h2>
            <p className="section-desc max-w-700">
              Reach out directly with 100% authenticated sender delivery. Open to Senior Business Analyst, Techno-Functional Consultant, and Capital Markets opportunities.
            </p>
          </div>
        )}

        <div className="contact-grid">
          {/* Left Column: Verified Channels & Direct Identity */}
          <div className="contact-info-column">
            <div className="contact-image-wrapper">
              <img
                src={contactImg}
                alt="Shubham Sharma - Senior Consultant"
                className="contact-card-img"
              />
              <div className="contact-img-badge">
                <i className="fa-solid fa-circle-check text-emerald"></i> Available for Opportunities
              </div>
            </div>

            <div className="contact-cards-stack">
              {/* Direct LinkedIn */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-gold">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="contact-item-info">
                  <div className="contact-item-header-row">
                    <span className="contact-lbl">LinkedIn Network</span>
                    <span className="verified-channel-tag text-gold">Fast Response</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    linkedin.com/in/shubham-sharma
                  </a>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-link"
                  title="Open LinkedIn profile"
                  aria-label="Open LinkedIn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              {/* GitHub Profile */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-purple">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="contact-item-info">
                  <div className="contact-item-header-row">
                    <span className="contact-lbl">GitHub Profile</span>
                    <span className="verified-channel-tag text-purple">Code & Repos</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    github.com/shubhaam-shaarmaa
                  </a>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-link"
                  title="Open GitHub profile"
                  aria-label="Open GitHub"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              {/* Direct Email */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-cyan">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-item-info">
                  <div className="contact-item-header-row">
                    <span className="contact-lbl">Direct Email</span>
                    <span className="verified-channel-tag text-cyan">Direct Inbox</span>
                  </div>
                  <a href={`mailto:${targetEmail}`} className="contact-val">
                    {targetEmail}
                  </a>
                </div>
                <button
                  className="contact-copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>

              {/* Location & Timezone Alignment */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-blue">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">Location & Work Alignment</span>
                  <span className="contact-val">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="contact-subval text-dim">
                    Remote & Hybrid Ready · Aligned with US & EMEA Trading Hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Composer & Dispatcher */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <div className="composer-header">
                <h3 className="form-card-title">
                  <i className="fa-solid fa-paper-plane text-cyan"></i> Direct Email Composer
                </h3>
              </div>

              <p className="form-card-subtitle">
                Select a recruiter template or customize your inquiry below. Launch directly in your preferred authenticated email provider with pre-filled content.
              </p>

              {/* 1-Click Recruiter Presets */}
              <div className="recruiter-presets-wrapper mt-2">
                <span className="presets-label">
                  <i className="fa-solid fa-bolt text-gold"></i> 1-Click Inquiry Templates:
                </span>
                <div className="presets-chips-row">
                  {RECRUITER_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className={`preset-chip ${selectedPreset === preset.id ? 'active' : ''}`}
                      onClick={() => handleSelectPreset(preset)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Composer Inputs */}
              <div className="composer-fields-wrapper mt-3">
                <div className="form-group">
                  <label htmlFor="senderName" className="form-label">
                    Your Name & Organization <span className="text-dim text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Morgan Stanley)"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject Line</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject line..."
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role specifics, project scope, or scheduling details..."
                    className="form-input"
                  ></textarea>
                </div>

                {/* Dispatch Action Grid */}
                <div className="composer-dispatch-block mt-3">
                  <div className="dispatch-buttons-grid">
                    <button
                      type="button"
                      className="btn btn-dispatch-gmail"
                      onClick={() => handleLaunchApp('gmail')}
                      title="Open in Gmail Web Composer"
                    >
                      <i className="fa-brands fa-google"></i>
                      <span>Send via Gmail</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-dispatch-outlook"
                      onClick={() => handleLaunchApp('outlook')}
                      title="Open in Outlook Web Composer"
                    >
                      <i className="fa-brands fa-microsoft"></i>
                      <span>Send via Outlook</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-dispatch-mailto"
                      onClick={() => handleLaunchApp('mailto')}
                      title="Open Default Desktop Mail App (Apple Mail / Outlook Desktop)"
                    >
                      <i className="fa-solid fa-envelope"></i>
                      <span>Default Mail App</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-dispatch-copy"
                      onClick={handleCopyDraft}
                      title="Copy Formatted Draft to Clipboard"
                    >
                      <i className="fa-regular fa-copy"></i>
                      <span>Copy Draft</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
