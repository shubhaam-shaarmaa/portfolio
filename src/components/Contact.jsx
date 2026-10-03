import React, { useState } from 'react';
import contactImg from '../assets/shubham_contact.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ triggerToast, isEmbedded = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = PERSONAL_INFO.email;
    const mailtoFallback = `mailto:${targetEmail}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response && response.ok) {
        if (typeof triggerToast === 'function') {
          triggerToast(`Thank you, ${formData.name || 'there'}! Your message has been sent directly to ${targetEmail}.`);
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        window.location.href = mailtoFallback;
        if (typeof triggerToast === 'function') {
          triggerToast(`Opening email client to deliver message to ${targetEmail}...`);
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      window.location.href = mailtoFallback;
      if (typeof triggerToast === 'function') {
        triggerToast(`Opening email client to deliver message to ${targetEmail}...`);
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(PERSONAL_INFO.email)
        .then(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email copied to clipboard: ${PERSONAL_INFO.email}`);
          }
        })
        .catch(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email: ${PERSONAL_INFO.email}`);
          }
        });
    } else {
      if (typeof triggerToast === 'function') {
        triggerToast(`Email: ${PERSONAL_INFO.email}`);
      }
    }
  };

  const presets = [
    {
      id: 'ba-role',
      icon: 'fa-briefcase text-gold',
      label: '💼 Senior BA Role',
      subject: 'Senior Business Analyst Opportunity — Techno-Functional',
      msg: 'Hi Shubham, I came across your portfolio and would like to connect regarding a Senior Business Analyst / Consulting role with our team. Let\'s arrange a brief introductory discussion.'
    },
    {
      id: 'capital-markets',
      icon: 'fa-chart-line text-cyan',
      label: '📈 Capital Markets Project',
      subject: 'Capital Markets Domain Project / Consulting',
      msg: 'Hi Shubham, we are looking for a Techno-Functional BA with Capital Markets and Middle-Office Trade Lifecycle experience. Let\'s discuss our upcoming initiative.'
    },
    {
      id: 'ai-genai',
      icon: 'fa-microchip text-purple',
      label: '🤖 AI & GenAI Engagement',
      subject: 'AI & GenAI Solutions Opportunity',
      msg: 'Hi Shubham, saw your AI Journey roadmap and engineering foundations. Interested in discussing opportunities involving AI-assisted requirements and product delivery.'
    },
    {
      id: 'chat',
      icon: 'fa-mug-hot text-emerald',
      label: '☕ Quick Coffee Chat',
      subject: 'Professional Networking & Introduction',
      msg: 'Hi Shubham, impressive techno-functional portfolio! I\'d love to connect and keep in touch regarding upcoming initiatives.'
    }
  ];

  const handleSelectPreset = (preset) => {
    setFormData(prev => ({
      ...prev,
      subject: preset.subject,
      message: preset.msg
    }));
    if (typeof triggerToast === 'function') {
      triggerToast(`Template loaded: "${preset.label}". Ready to send!`);
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
            <span className="section-subtitle">Connect & Collaborate</span>
            <h2 className="section-title">
              Let's Build <span>Better Solutions</span>
            </h2>
            <p className="section-desc max-w-700">
              Let's build better solutions at the intersection of business, technology and AI. Open to Senior Business Analyst, Techno-Functional Consultant, and Capital Markets opportunities.
            </p>
          </div>
        )}

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Photo */}
          <div className="contact-info-column">
            <div className="contact-image-wrapper">
              <img
                src={contactImg}
                alt="Shubham Sharma - Senior Consultant"
                className="contact-card-img"
              />
              <div className="contact-img-badge">
                <i className="fa-solid fa-signal text-emerald"></i> Available for Opportunities
              </div>
            </div>

            <div className="contact-cards-stack">
              {/* Email Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-cyan">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">Direct Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-val">
                    {PERSONAL_INFO.email}
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

              {/* LinkedIn Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-gold">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">LinkedIn Network</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    linkedin.com/in/shubham-sharma
                  </a>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-purple">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">GitHub Repository</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    github.com/shubhaam-shaarmaa
                  </a>
                </div>
              </div>

              {/* Location & Mobile */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-blue">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">Location & Phone</span>
                  <span className="contact-val text-muted">
                    {PERSONAL_INFO.location} &nbsp;·&nbsp; {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <h3 className="form-card-title">
                <i className="fa-solid fa-paper-plane text-cyan"></i> Send a Direct Message
              </h3>
              <p className="form-card-subtitle">
                Discuss opportunities across Business Analysis, Capital Markets solutions, or AI workflows.
              </p>

              {/* 1-Click Recruiter Presets */}
              <div className="recruiter-presets-wrapper mt-2">
                <span className="presets-label">
                  <i className="fa-solid fa-bolt text-gold"></i> 1-Click Recruiter Templates:
                </span>
                <div className="presets-chips-row">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className={`preset-chip ${formData.subject === preset.subject ? 'active' : ''}`}
                      onClick={() => handleSelectPreset(preset)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@firm.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject / Role Opportunity</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Senior Business Analyst Opportunity — Capital Markets"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role specifics, project scope, or scheduling details..."
                    className="form-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i> Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> Send Direct Message
                    </>
                  )}
                </button>

                <div className="form-delivery-guarantee mt-2 text-center">
                  <span className="text-xs text-dim">
                    <i className="fa-solid fa-shield-halved text-emerald"></i> Delivered directly to <strong>{PERSONAL_INFO.email}</strong>
                  </span>
                </div>

                <div className="form-secondary-action mt-1 text-center">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Opportunity Inquiry')}&body=${encodeURIComponent(formData.message || 'Hi Shubham,')}`}
                    className="direct-mailto-link text-xs text-cyan"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Prefer your email app? Open in Outlook / Gmail
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
